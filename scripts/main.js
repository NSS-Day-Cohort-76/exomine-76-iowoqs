import { displayGovernors } from "./governors.js";
import { displayColonyInventory } from "./colonyInventory.js";
import { governorsEventListener } from "./governors.js";
import { displayFacilities } from "./facilities.js";

const container = document.querySelector("#container")

const render = async () => {
    const governorsHTML = await displayGovernors()
    const colonyInventoryHTML = await displayColonyInventory()
    const facilityChoiceHTML = await displayFacilities()
    container.innerHTML = governorsHTML + colonyInventoryHTML + facilityChoiceHTML
    governorsEventListener()
}

render()
