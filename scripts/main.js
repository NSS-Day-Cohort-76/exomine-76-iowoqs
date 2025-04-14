import { displayGovernors } from "./governors.js";
import { displayColonyInventory } from "./colonyInventory.js";
import { governorsEventListener } from "./governors.js";
import { displayFacility } from "./facilities.js";

const container = document.querySelector("#container")
const governorDropdown = document.getElementById("governorDropdown")
const colonyDropdown = document.getElementById("colonyInventory")
const facilityDropdown = document.getElementById("facilityDropdown")

const render = async () => {
    const governorsHTML = await displayGovernors()
    const colonyInventoryHTML = await displayColonyInventory()
    const facilityChoiceHTML = await displayFacility()
    container.innerHTML = governorsHTML + colonyInventoryHTML + facilityChoiceHTML
    governorsEventListener()
}

render()
