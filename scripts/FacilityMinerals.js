import { setMineral } from "./TransientState.js"

export const MineralChoices = async () => {
    const [mineralsRes, facilityMineralsRes, facilitiesRes] = await Promise.all([
        fetch("http://localhost:8088/minerals"),
        fetch("http://localhost:8088/facilityMinerals"),
        fetch("http://localhost:8088/facilities")
    ])

    const minerals = await mineralsRes.json()
    const facilityMinerals = await facilityMineralsRes.json()
    const facilities = await facilitiesRes.json()

    const selectedFacilityId = parseInt(document.querySelector("#facility").value)
    const availableMinerals = facilityMinerals.filter(fm => fm.facilityId === selectedFacilityId)

    let mineralChoiceHTML = `<div id="facilityMinerals" class="facility-minerals">`

    for (const fm of availableMinerals) {
        const mineral = minerals.find(m => m.id === fm.mineralId)
        if (mineral) {
            mineralChoiceHTML += `<input type="radio" name="mineral" value="${mineral.id}" /> ${fm.quantity} tons of ${mineral.name} <br />`
        }
    }

    mineralChoiceHTML += `</div>`

    const facilityObj = facilities.find(f => f.id === selectedFacilityId)
    if (facilityObj) {
        document.getElementById("facilityMineralHeading").innerHTML = `Facility Minerals for ${facilityObj.name}`
    }

        document.querySelector("#mineralsForm").innerHTML = mineralChoiceHTML
    }


document.addEventListener("purchaseSubmitted", MineralChoices)

document.addEventListener("change", (event) => {
    // Only run if a mineral radio button was selected
    if (event.target.name === "mineral") {
        const selectedMineralId = parseInt(event.target.value)

//         // Get the selected facility name
//         const facilityDropdown = document.querySelector("#facility")
//         const selectedFacilityName = facilityDropdown.options[facilityDropdown.selectedIndex].text

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

