export const displayFacilities = async () => {
    const response = await fetch("http://localhost:8088/facilities")
    const facilities = await response.json()

    let facilityChoiceHTML = `<select id="facility">
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