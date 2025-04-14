
const transientState = {
    selectedGovernorId: null,
    selectedFacilityId: null,
    selectedMineralId: null,
}

// Setters

export const setGovernor = (id) => transientState.selectedGovernorId = id
export const setFacility = (id) => transientState.selectedFacilityId = id
export const setMineral = (id) => transientState.selectedMineralId = id

// Getters
export const getTransientState = () => ({ ...transientState })



export const purchaseMineral = async () => {
    const { selectedGovernorId, selectedFacilityId, selectedMineralId } = getTransientState()

    if (!selectedGovernorId || !selectedFacilityId || !selectedMineralId) {
        alert("Please select a governor, facility, and mineral.")
        return
    }

    // Get the colonyId from the selected governor
    const governorRes = await fetch(`http://localhost:8088/governors/${selectedGovernorId}?_expand=colony`)
    const governor = await governorRes.json()
    const colonyId = governor.colonyId

    // Get the facilityMineral record
    const facilityMineralsRes = await fetch(`http://localhost:8088/facilityMinerals?facilityId=${selectedFacilityId}&mineralId=${selectedMineralId}`)
    const facilityMinerals = await facilityMineralsRes.json()
    const facilityMineralRecord = facilityMinerals[0]

    if (facilityMineralRecord.quantity <= 0) {
        alert("Not enough minerals at the facility.")
        return
    }

    // Update facilityMineral: subtract 1
    await fetch(`http://localhost:8088/facilityMinerals/${facilityMineralRecord.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: facilityMineralRecord.quantity - 1 })
    })

    // Check if the colonyMineral record already exists
    const colonyMineralsRes = await fetch(`http://localhost:8088/colonyMinerals?colonyId=${colonyId}&mineralId=${selectedMineralId}`)
    const colonyMinerals = await colonyMineralsRes.json()

    if (colonyMinerals.length > 0) {
        // It exists, so update it
        const colonyMineralRecord = colonyMinerals[0]
        await fetch(`http://localhost:8088/colonyMinerals/${colonyMineralRecord.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity: colonyMineralRecord.quantity + 1 })
        })
    } else {
        // It doesn't exist, so create it
        await fetch(`http://localhost:8088/colonyMinerals`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                colonyId,
                mineralId: selectedMineralId,
                quantity: 1
            })
        })
    }

    // Notify the app that a purchase happened
    document.dispatchEvent(new CustomEvent("purchaseMade"))
}
