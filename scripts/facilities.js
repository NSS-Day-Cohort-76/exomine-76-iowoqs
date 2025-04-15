import { setFacility } from "./TransientState.js"

const handleFacilityChoice = (changeEvent) => {
    if (changeEvent.target.id === "facility") {
        const chosenOption = parseInt(changeEvent.target.value)
        setFacility(chosenOption)
        }
    }

export const displayFacility = async () => {
    const response = await fetch("http://localhost:8088/facilities")
    const facilities = await response.json()
   
    let facilityChoiceHTML = 
        `<div class="dropdown-wrapper">
            <label for="facility">Choose a Facility</label>
            <select id="facility" class="facility-dropdown">
            <option value="0">Choose a facility...</option>`

    const facilityOptions = facilities
        .filter(facility => facility.status === true)
        .map(facility => `<option value="${facility.id}">${facility.name}</option>`)

    facilityChoiceHTML += facilityOptions.join("")
    facilityChoiceHTML += `</select></div>`

    return facilityChoiceHTML
}
