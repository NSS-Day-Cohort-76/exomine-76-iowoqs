import { purchaseMineral } from "./TransientState.js"

const handlePurchaseSubmission = (clickEvent) => {
    if (clickEvent.target.id === "submission-button") {
        console.log("Button clicked!")
        purchaseMineral()
    }
}

export const submissionButton = () => {
    document.addEventListener("click", handlePurchaseSubmission)

    return `<button id='submission-button'>Purchase Mineral</button>`
}