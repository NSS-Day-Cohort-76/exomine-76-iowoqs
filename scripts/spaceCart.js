import { purchaseMineral } from "./TransientState.js"

const handlePurchaseSubmission = (clickEvent) => {
    if (clickEvent.target.id === "submission-button") {
        purchaseMineral()
        
        //Reset Cart
        document.querySelector("#cartDetails").innerHTML = `<p>No mineral selected</p>`
        
        // Uncheck all radio buttons
        const checkedRadio = document.querySelector('input[name="mineral"]:checked')
        if (checkedRadio) {
            checkedRadio.checked = false
        }
    }
}

export const submissionButton = () => {
    document.addEventListener("click", handlePurchaseSubmission)

    return `<button id='submission-button'>Purchase Mineral</button>`
}