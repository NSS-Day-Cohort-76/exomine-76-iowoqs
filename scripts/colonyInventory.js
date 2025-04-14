
export const displayColonyInventory = async () => {
    
    const colonies = await fetch("http://localhost:8088/governors?_expand=colony").then(res => res.json())
    const colonyMinerals = await fetch ("http://localhost:8088/colonyMinerals?_expand=mineral").then(res => res.json())

    document.addEventListener("governorSelected", () => {
        const governorsDropdown = document.getElementById("governors")
        const colonyObject = colonies.find(obj => obj.id === parseInt(governorsDropdown.value))
        const mineralObject = colonyMinerals.filter(obj => obj.colonyId === colonyObject.colonyId)

        
        let html = `
        <h2>${colonyObject.colony.name} Minerals</h2>
        <div>`
        const minerals = mineralObject.map(obj => 
            `<p>${obj.quantity} tons of ${obj.mineral.name}<p>`
        )
        
        html += minerals.join("")
        html += `<div>`
        
        const inventorySection = document.getElementById("colonyInventory")
        inventorySection.innerHTML = html
    }
)
    
}
document.addEventListener("purchaseSubmitted", displayColonyInventory)