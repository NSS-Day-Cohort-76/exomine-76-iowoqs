export const MineralChoices = async () => {
    const response = await fetch("http://localhost:8088/minerals")
    const minerals = await response.json()

    let html = `
        <div class='survey-input' id='mineral'>
        `
        
        for (const mineral of minerals) {
            html += `<input type="radio" name="mineral" value="${mineral.id}" /> ${mineral.name} <br />`
        }
        
        html += `
        </div>`

        return html
}