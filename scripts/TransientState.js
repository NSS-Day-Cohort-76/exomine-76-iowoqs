const transientState = {
    facilityId: 0,
    governorId: 0,
    mineralId: 0,
}
const newTransientState = {  
    facilityMineralId: 0,
    colonyInventoryId: 0
}

export const setFacility = (id) => {
    transientState.facilityId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setGovernor = (id) => {
    transientState.governorId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setMineral = (id) => {
    transientState.mineralId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
  }











// export const purchaseMineral = () => {
    /*
        Does the chosen governor's colony already own some of this mineral?
            - If yes, what should happen?
            - If no, what should happen?

        Defining the algorithm for this method is traditionally the hardest
        task for teams during this group project. It will determine when you
        should use the method of POST, and when you should use PUT.

        Only the foolhardy try to solve this problem with code.
    */



  







// const transientState = {
//     governorId: 0,
//     facilityId: 0,
//     mineralId: 0
//   }
  
//   // SETTERS
  
//   export const setGovernor = (id) => {
//     transientState.governorId = id
//     // document.dispatchEvent(new CustomEvent("stateChanged"))
//   }
  
//   export const setFacility = (id => {
//     transientState.facilityId = id
//     // document.dispatchEvent(new CustomEvent("stateChanged"))
//   }
  
//   export const setMineral = (id) => {
//     transientState.mineralId = id
    // document.dispatchEvent(new CustomEvent("stateChanged"))
//   }

  // GETTER
  
//   export const getTransientState = () => {
//     return { ...transientState } // safe copy right heeeere
//   }
  
  // RESET
  
//   export const resetTransientState = () => {
//     transientState.mineralId = 0
//     document.dispatchEvent(new CustomEvent("stateChanged"))
//   }


//main.js  // example of function that keeps on keepin on injecting with each new update
//   const renderApp = async () => {
//     document.querySelector("#mineralsForm").innerHTML = FacilityMinerals()
//   }
  
//   document.addEventListener("stateChanged", renderApp)

// FacilityMinerals.js//
//   document.addEventListener("change", (event) => {
//     if (event.target.name === "mineral") {
//       setMineral(parseInt(event.target.value))
//     }
//   })