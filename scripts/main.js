import { mainHTML } from "./Exomine.js"
import { governorsEventListener } from "./governors.js"

const container = document.getElementById("container")

const render = async () => {
    container.innerHTML = await mainHTML()
    governorsEventListener()
}

render()
