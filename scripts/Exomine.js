import { displayGovernors } from "./governors.js";
import { displayColonyInventory } from "./colonyInventory.js";
import { displayFacility } from "./facilities.js";



export const mainHTML = async () => {
  const governorsDropdownHTML = await displayGovernors()
  const facilityDropdownHTML = await displayFacility()
  const colonyInventoryHTML = await displayColonyInventory()

  let html = `
  <section class="top-half">
    <div class="dropdowns">
      ${governorsDropdownHTML}
      ${facilityDropdownHTML}
    </div>

    <div id="colonyInventory" class="colony-inventory">
      <h2>Colony Minerals</h2>
      ${colonyInventoryHTML}
      <ul id="colonyInventoryList"></ul>
    </div>
  </section>

  <section class="bottom-half">
    <div id="facilityMinerals" class="facility-minerals">
      <h2 id="facilityMineralHeading">Facility Minerals</h2>
      <form id="mineralsForm"></form>
    </div>

    <div id="spaceCart" class="space-cart">
      <h2>Space Cart</h2>
      <div id="cartDetails">
        <p>No mineral selected</p>
      </div>
      <button id="purchaseBtn">Purchase Minerals</button>
    </div>
  </section>`

  return html
}
