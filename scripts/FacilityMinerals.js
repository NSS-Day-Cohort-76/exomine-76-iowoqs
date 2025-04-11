export const MineralChoices = async () => {
    const [mineralsRes, facilityMineralsRes] = await Promise.all([ //Gets both list of all minerals and the facilityMinerals list at the same time.
        fetch("http://localhost:8088/minerals"),
        fetch("http://localhost:8088/facilityMinerals")
    ])
    const minerals = await mineralsRes.json()
    const facilityMinerals = await facilityMineralsRes.json() // Turns the response into usable data (the two lists)

    //Reads the selected facility from the dropdown and converts it to a number.
    const selectedFacilityId = parseInt(document.querySelector("#facility").value) 

    if (selectedFacilityId === 0) {
        alert("Please select a facility first.") //If no facility is selected, alert the user and stop execution.
        return
    }

    // Filter facilityMinerals by selected facility, and gives you only the minerals that match the facility the user selected.
    const availableMineralsAtFacility = facilityMinerals.filter(
        facilityMinerals => facilityMinerals.facilityId === selectedFacilityId
    )

    //Loops through the available minerals and creates a radio button for each one.
    let mineralChoiceHTML = `<div id="facilityMinerals" class="facility-minerals">`

    for (const facilityMinerals of availableMineralsAtFacility) {
        const mineral = minerals.find(mineral => mineral.id === facilityMinerals.mineralId)
        mineralChoiceHTML += `<input type="radio" name="mineral" value="${mineral.id}" /> ${mineral.name} <br />`
    }

    mineralChoiceHTML += `</div>`
    return mineralChoiceHTML
}

document.querySelector("#facility").addEventListener("change", async () => {
    const mineralHTML = await MineralChoices()
    document.querySelector("#facilityMinerals").innerHTML = mineralHTML
})

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
            })
    }
})

document.querySelector("#purchaseBtn").addEventListener("click", () => {
    // Reset cart message
    document.querySelector("#cartDetails").innerHTML = `<p>No mineral selected</p>`

    // Uncheck all radio buttons
    const checkedRadio = document.querySelector('input[name="mineral"]:checked')
    if (checkedRadio) {
        checkedRadio.checked = false
    }
})
