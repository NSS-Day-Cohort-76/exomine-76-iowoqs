import { mainHTML } from "./Exomine.js"
import { setupEventListeners } from "./EventListeners.js"  //  New unified listener module

const container = document.querySelector("#container")

const render = async () => {
    const html = await mainHTML()     // Use your single-page builder
    container.innerHTML = html

    setupEventListeners()             // Attach all event listeners
}

render()

