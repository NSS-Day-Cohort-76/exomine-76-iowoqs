
export const displayGovernors = async () => {
    const governors = await fetch("http://localhost:8088/governors").then(res => res.json())

    let html = `<select id="governors" class="dropdown">

      <option value="none">Choose a governor...</option>` 
      const governorString = governors.map(obj => `
        <option value="${obj.id}">${obj.name}</option>`)
        
        html += governorString.join("")
        html += `</select>`
        
        return html
        
    }


export const governorsEventListener = () => {
    document.addEventListener("change", (changeEvt) => {
        if (changeEvt.target.id === "governors") {
            document.dispatchEvent(new CustomEvent ("governorSelected"))
        }
    })
}