import { MineralChoices } from "./FacilityMinerals.js"
import { purchaseMineral } from "./TransientState.js"
import { displayColonyInventory } from "./colonyInventory.js"
import { setFacility } from "./TransientState.js"
import { setMineral } from "./TransientState.js"

export const setupEventListeners = () => {
    // Facility selection
    document.addEventListener("change", (event) => {
        if (event.target.id === "facility") {
            const chosenOption = parseInt(event.target.value)
            setFacility(chosenOption)
            document.dispatchEvent(new CustomEvent("facilitySelected")) // Let this handle updating minerals
            
        }
            
    })


    // Mineral radio selection
    document.addEventListener("change", (event) => {
        if (event.target.name === "mineral") {
            const selectedMineralId = parseInt(event.target.value)

            setMineral(selectedMineralId)

            const facilityDropdown = document.querySelector("#facility")
            const selectedFacilityName = facilityDropdown.options[facilityDropdown.selectedIndex].text

            fetch("http://localhost:8088/minerals")
                .then(response => response.json())
                .then(minerals => {
                    const selectedMineral = minerals.find(minerals => minerals.id === selectedMineralId)
                    const cartMessage = `1 ton of ${selectedMineral.name} from ${selectedFacilityName}`
                    document.querySelector("#cartDetails").innerHTML = `<p>${cartMessage}</p>`
                })
        }
    })

    // Purchase button
    document.addEventListener("click", async (event) => {
        if (event.target.id === "purchaseBtn") {
            await purchaseMineral()
            document.querySelector("#cartDetails").innerHTML = `<p>No mineral selected</p>`
        }
    })

    // Update UI after purchase
    document.addEventListener("purchaseMade", async () => {
        await MineralChoices()
        await displayColonyInventory()
        console.log("Purchase made! UI updated.")
    })
}


