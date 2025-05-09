import { setFacility } from "./TransientState.js"

const handleFacilityChoice = (changeEvent) => {
    if (changeEvent.target.id === "facility") {
        const chosenOption = parseInt(changeEvent.target.value)
        setFacility(chosenOption)
        }
    }

export const displayFacility = async () => {
    document.addEventListener("change", handleFacilityChoice)
    const response = await fetch("http://localhost:8088/facilities")
    const facilities = await response.json()
   
    let facilityChoiceHTML = 
        `<div class="dropdown-wrapper">
            <label for="facility">Choose a Facility</label>
            <select id="facility" class="facility-dropdown" disabled>
            <option value="0">Choose a facility...</option>`

    const facilityOptions = facilities
        .filter(facility => facility.status === true)
        .map(facility => `<option value="${facility.id}">${facility.name}</option>`)

    facilityChoiceHTML += facilityOptions.join("")
    facilityChoiceHTML += `</select></div>`

    return facilityChoiceHTML
}


export const facilitiesEventListener = () => {
     // Listen for governor selection
     document.addEventListener("governorSelected", () => {
        const facilityDropdown = document.getElementById("facility")
        if (facilityDropdown) {
            facilityDropdown.disabled = false
        }
    })
    
    document.addEventListener("change", (changeEvt) => {
        if (changeEvt.target.id === "facility") {
            document.dispatchEvent(new CustomEvent ("facilitySelected"))
        }
    })
}