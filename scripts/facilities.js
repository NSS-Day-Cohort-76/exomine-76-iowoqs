export const displayFacility = async () => {
    const response = await fetch("http://localhost:8088/facilities")
    const facilities = await response.json()

    let facilityChoiceHTML = `<select id="facility" class="facility-dropdown">
        <option value="0">Please select facility</option>`

    for (const facility of facilities) {
        if (facility.status === true) {
            facilityChoiceHTML += `<option value="${facility.id}">${facility.name}</option>`
        }
    }

    facilityChoiceHTML += `</select>`
    return facilityChoiceHTML
}
