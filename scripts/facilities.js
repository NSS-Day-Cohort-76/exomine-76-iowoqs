import { setFacility } from "./transientState.js"

const handleFacilityChoice = (changeEvent) => {
    if (changeEvent.target.id === "facility") {
        const chosenOption = parseInt(changeEvent.target.value)
        setFacility(chosenOption)
        console.log(parseInt(chosenOption))
            }
         }

export const displayFacilities = async () => {
    document.addEventListener("change", handleFacilityChoice)
    const response = await fetch("http://localhost:8088/facilities")
    const facilities = await response.json()
   
    let facilityChoiceHTML = `<select id="facility" class="facility-dropdown">
                    <option value="0">Please select facility</option>`

    const divStringArray = facilities.map((facility) => {
        if (facility.status === true) {
          facilityChoiceHTML += `<option 
                                    value="${facility.id}
                                    ">${facility.name}
                                </option>`
                
}})
    facilityChoiceHTML += divStringArray.join("")    
    facilityChoiceHTML += `</select>`

    return facilityChoiceHTML
}