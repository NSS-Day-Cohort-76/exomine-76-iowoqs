const colonyState = {
    colonyId: 0,
    mineralId: 0,
    quantity: 0
}

const facilityState = {
    facilityId: 0,
    mineralId: 0,
    quantity: 0
}

export const setFacility = (facilityId) => {
    facilityState.facilityId = facilityId
}

export const setColony = (colonyId) => {
    colonyState.colonyId = colonyId
}

export const setMineral = (mineralId) => {
    colonyState.mineralId = mineralId
    facilityState.mineralId = mineralId
}

export const purchaseMineral = async () => {
    // Get colonyMineral if it exists
    const colonyRes = await fetch(`http://localhost:8088/colonyMinerals?mineralId=${colonyState.mineralId}&colonyId=${colonyState.colonyId}`)
    const colonyMineralArray = await colonyRes.json()
    
    let colonyMineral
    if (colonyMineralArray.length === 0) {
        // New entry
        colonyMineral = {
            colonyId: colonyState.colonyId,
            mineralId: colonyState.mineralId,
            quantity: 1
        }

        await fetch("http://localhost:8088/colonyMinerals", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(colonyMineral)
        })
    } else {
        // Update existing
        colonyMineral = colonyMineralArray[0]
        colonyMineral.quantity += 1

        await fetch(`http://localhost:8088/colonyMinerals/${colonyMineral.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(colonyMineral)
        })
    }

    //Fetch and update facility mineral
    const facilityRes = await fetch(`http://localhost:8088/facilityMinerals?mineralId=${facilityState.mineralId}&facilityId=${facilityState.facilityId}`)
    const facilityMineralArray = await facilityRes.json()


    const facilityMineral = facilityMineralArray[0]
    facilityMineral.quantity -= 1

    await fetch(`http://localhost:8088/facilityMinerals/${facilityMineral.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(facilityMineral)
    })


    document.dispatchEvent(new CustomEvent("purchaseSubmitted"))
}
