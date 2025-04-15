import { setMineral } from "./TransientState.js"

export const renderMinerals = async () => {
    const [mineralsRes, facilityMineralsRes, facilities] = await Promise.all([
        fetch("http://localhost:8088/minerals"),
        fetch("http://localhost:8088/facilityMinerals"),
        fetch("http://localhost:8088/facilities")
    ])

    const minerals = await mineralsRes.json()
    const facilityMinerals = await facilityMineralsRes.json()
    const facilityObjects = await facilities.json()

    const selectedFacilityId = parseInt(document.querySelector("#facility").value)
    const availableMineralsAtFacility = facilityMinerals.filter(
        facilityMinerals => facilityMinerals.facilityId === selectedFacilityId
    )

    let mineralChoiceHTML = `<div id="facilityMinerals" class="facility-minerals">`
    for (const facilityMinerals of availableMineralsAtFacility) {
        const mineral = minerals.find(mineral => mineral.id === facilityMinerals.mineralId)
        mineralChoiceHTML += `<input type="radio" name="mineral" value="${mineral.id}" /> ${facilityMinerals.quantity} tons of ${mineral.name} <br />`
    }
    mineralChoiceHTML += `</div>`
    
    const facilityEl = document.getElementById("facility")

    if (facilityEl.value !== "0" ) {
        const facilityObject = facilityObjects.find(obj => obj.id === selectedFacilityId)
        document.getElementById("facilityMineralHeading").innerHTML = `Facility Minerals for ${facilityObject.name}`
        document.querySelector("#mineralsForm").innerHTML = mineralChoiceHTML
    }
}

document.addEventListener("facilitySelected", renderMinerals)
document.addEventListener("purchaseSubmitted", renderMinerals)

document.addEventListener("change", (event) => {
    // Only run if a mineral radio button was selected
    if (event.target.name === "mineral") {
        const selectedMineralId = parseInt(event.target.value)

        // Get the selected facility name
        const facilityDropdown = document.querySelector("#facility")
        const selectedFacilityName = facilityDropdown.options[facilityDropdown.selectedIndex].text

        // Get the selected mineral name by looking at the radio button's value
        fetch("http://localhost:8088/minerals")
            .then(response => response.json())
            .then(minerals => {
                const selectedMineral = minerals.find(minerals => minerals.id === selectedMineralId)

                // Now update the cart with the message
                const cartMessage = `1 ton of ${selectedMineral.name} from ${selectedFacilityName}`
                document.querySelector("#cartDetails").innerHTML = `<p>${cartMessage}</p>`
                setMineral(selectedMineral.id)
            })
    }
})

