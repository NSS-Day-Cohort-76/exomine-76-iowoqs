import { setColony } from "./TransientState.js"

const governors = await fetch("http://localhost:8088/governors").then(res => res.json())

const handleChange = (changeEvent) => {
    if (changeEvent.target.id === "governors") {
        const chosenOption = parseInt(changeEvent.target.value)
        const colonyIdObj = governors.find(obj => obj.id === chosenOption)
        setColony(colonyIdObj.colonyId)
        }
    }

export const displayGovernors = async () => {
    document.addEventListener("change", handleChange)
    const governors = await fetch("http://localhost:8088/governors").then(res => res.json())

    let html = `
      <div class="dropdown-wrapper">
        <label for="governors">Choose a Governor</label>
        <select id="governors" class="dropdown">
          <option value="none">Choose a governor...</option> 
    `
      const governorString = governors.map(obj => `
        <option value="${obj.id}" ${obj.status === false ? "disabled" : ""}>
        ${obj.name} (${obj.status ? "Active" : "Inactive"})
        </option>`)
        
        html += governorString.join("")
        html += `</select></div>`
        
        return html
        
    }


export const governorsEventListener = () => {
    document.addEventListener("change", (changeEvt) => {
        if (changeEvt.target.id === "governors") {
            document.dispatchEvent(new CustomEvent ("governorSelected"))
        }
    })
}