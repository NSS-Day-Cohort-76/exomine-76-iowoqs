import { mainHTML } from "./Exomine.js"
import { governorsEventListener } from "./governors.js"
import { facilitiesEventListener } from "./facilities.js"

const container = document.querySelector("#container")

const render = async () => {
    const governorsHTML = await displayGovernors()
    const colonyInventoryHTML = await displayColonyInventory()
    const facilityChoiceHTML = await displayFacility()
    container.innerHTML = governorsHTML + colonyInventoryHTML + facilityChoiceHTML
    governorsEventListener()
    facilitiesEventListener()
}

render()
