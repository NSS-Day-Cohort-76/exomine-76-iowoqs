const transientState = {
    governorId: 0,
    facilityId: 0,
    mineralId: 0
  }
  
  // SETTERS
  
  export const setGovernor = (id) => {
    transientState.governorId = id
    // document.dispatchEvent(new CustomEvent("stateChanged"))
  }
  
  export const setFacility = (id)=> {
    transientState.facilityId = id
    // document.dispatchEvent(new CustomEvent("stateChanged"))
  }
  
  export const setMineral = (id) => {
    transientState.mineralId = id
    // document.dispatchEvent(new CustomEvent("stateChanged"))
  }

  // GETTER
  
//   export const getTransientState = () => {
//     return { ...transientState } // safe copy right here
//   }
  
  // RESET
  
//   export const resetTransientState = () => {
//     transientState.mineralId = 0
//     document.dispatchEvent(new CustomEvent("stateChanged"))
//   }


//main.js  // example of function that keeps on injecting with each new update
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