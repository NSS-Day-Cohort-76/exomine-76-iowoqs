export const MineralChoices = async () => {
    const response = await fetch("http://localhost:8088/minerals")
    const minerals = await response.json()
    const selectedFacilityId = document.querySelector("#facility").value

    if (selectedFacilityId === "0") {
        alert("Please select a facility first.")
        return
    }

    let mineralChoiceHTML = `
        <div id="facilityMinerals" class="facility-minerals">
        `
        
        for (const mineral of minerals) {
            html += `<input type="radio" name="mineral" value="${mineral.id}" /> ${mineral.name} <br />`
        }
        
        mineralChoiceHTML += `
        </div>`

        return mineralChoiceHTML
}