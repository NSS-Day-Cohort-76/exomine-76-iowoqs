import { displayGovernors } from "./governors.js";
import { displayColonyInventory } from "./colonyInventory.js";
import { governorsEventListener } from "./governors.js";

const container = document.querySelector("#container")

const render = async () => {
    const governorsHTML = await displayGovernors()
    const colonyInventoryHTML = await displayColonyInventory()
    container.innerHTML = governorsHTML + colonyInventoryHTML
    governorsEventListener()
}

render()
