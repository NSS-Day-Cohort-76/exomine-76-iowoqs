import { displayGovernors } from "./governors.js";
import { displayColonyInventory } from "./colonyInventory.js";
import { governorsEventListener } from "./governors.js";
import { displayFacilities } from "./facilities.js";

const container = document.querySelector("#container")
const governorDropdown = document.getElementById("governorDropdown")
const colonyDropdown = document.getElementById("colonyInventory")
const facilityDropdown = document.getElementById("facilityDropdown")

const render = async () => {
    const governorsHTML = await displayGovernors()
    const colonyInventoryHTML = await displayColonyInventory()
    const facilitiesHTML = await displayFacilities()

    governorDropdown.innerHTML = governorsHTML
    colonyDropdown.innerHTML = colonyInventoryHTML
    facilityDropdown.innerHtml = facilitiesHTML
    governorsEventListener()
}

render()
