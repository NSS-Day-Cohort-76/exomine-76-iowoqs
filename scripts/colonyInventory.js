
export const displayColonyInventory = async () => {
    
    const colonies = await fetch("http://localhost:8088/governors?_expand=colony").then(res => res.json())
    
    document.addEventListener("governorSelected", () => {
        const governorsDropdown = document.getElementById("governors")
        const colonyObject = colonies.find(obj => obj.id === parseInt(governorsDropdown.value))

        const title = document.getElementById("colonyInventory")
        title.innerHTML = `<h2>${colonyObject.colony.name} Minerals</h2>`
    }
)
    return ""
}
