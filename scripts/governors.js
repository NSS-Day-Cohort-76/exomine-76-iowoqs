import { setColony } from "./TransientState.js"

const handleChange = (changeEvent) => {
    if (changeEvent.target.id === "governors") {
        const chosenOption = parseInt(changeEvent.target.value)
        setColony(chosenOption)
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
        <option value="${obj.id}">${obj.name}</option>`)
        
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