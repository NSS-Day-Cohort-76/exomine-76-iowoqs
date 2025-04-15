import { displayGovernors } from "./governors.js";
import { displayFacility } from "./facilities.js";
import { submissionButton } from "./spaceCart.js";
import { renderMinerals } from "./FacilityMinerals.js";
import { displayColonyInventory } from "./colonyInventory.js";


export const mainHTML = async () => {

    const governorsDropdownHTML = await displayGovernors()
    const facilityDropdownHTML = await displayFacility()
    const buttonHTML = submissionButton()
    const mineralHTML = renderMinerals()
    const colonyInventoryHTML = displayColonyInventory()

    let html = `
    <section class="top-half">
      <div class="dropdowns">
        ${governorsDropdownHTML}
        ${facilityDropdownHTML}
      </div>

      <div id="colonyInventory" class="colony-inventory">
        <h2>Colony Minerals</h2>
        
        <ul id="colonyInventoryList"></ul>
      </div>

    </section>

    <section class="bottom-half">
      <div id="facilityMinerals" class="facility-minerals">
        <h2 id="facilityMineralHeading">Facility Minerals</h2>
        <form id="mineralsForm">
        
      </div>

      <div id="spaceCart" class="space-cart">
        <h2>Space Cart</h2>
        <div id="cartDetails">

        </div>
        <div>
        ${buttonHTML}
        </div>
      </div>
    </section>`

    return html
}

