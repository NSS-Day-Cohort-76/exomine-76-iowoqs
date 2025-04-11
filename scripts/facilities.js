import { setFacilityId } from "./transientState.js"

const handleFacilityChoice = (changeEvent) => {
    if (changeEvent.target.id === "facility") {
        const chosenOption = parseInt(changeEvent.target.value)
        setFacilityId(chosenOption)
        console.log(parseInt(chosenOption))
            }
         }

export const displayFacilities = async () => {
    document.addEventListener("change", handleFacilityChoice)
    const response = await fetch("http://localhost:8088/facilities")
    const facilities = await response.json()
    const selectedGovernorId = document.querySelector("#governor").value;

    if (selectedGovernorId === "0") {
      alert("Please make sure to select a governor");
      return;
    }

    let facilityChoiceHTML = `<select id="facility" class="facility-dropdown">
                    <option value="0">Please select facility</option>`

    facilities.map((facility) => {
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