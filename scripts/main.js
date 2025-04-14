import { mainHTML } from "./Exomine.js"
import { governorsEventListener } from "./governors.js"
import { facilitiesEventListener } from "./facilities.js"

const container = document.getElementById("container")

const render = async () => {
    container.innerHTML = await mainHTML()
    governorsEventListener()
    facilitiesEventListener()
}

render()
