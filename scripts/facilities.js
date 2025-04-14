import { setFacility } from "./TransientState.js"

const handleFacilityChoice = (changeEvent) => {
    if (changeEvent.target.id === "facility") {
        const chosenOption = parseInt(changeEvent.target.value)
        setFacility(chosenOption)
        console.log(parseInt(chosenOption))
            }
         }

export const displayFacility = async () => {
    document.addEventListener("change", handleFacilityChoice)
    const response = await fetch("http://localhost:8088/facilities")
    const facilities = await response.json()
   
    let facilityChoiceHTML = `<select id="facility" class="facility-dropdown">
        <option value="0">Choose a facility...</option>`

    const facilityOptions = facilities
        .filter(facility => facility.status === true)
        .map(facility => `<option value="${facility.id}">${facility.name}</option>`)

    facilityChoiceHTML += facilityOptions.join("")
    facilityChoiceHTML += `</select>`

    return facilityChoiceHTML
}


export const facilitiesEventListener = () => {
    document.addEventListener("change", (changeEvt) => {
        if (changeEvt.target.id === "facility") {
            document.dispatchEvent(new CustomEvent ("facilitySelected"))
        }
    })
}