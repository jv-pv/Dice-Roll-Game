import charactersData from './data.js'
import Characters from './Characters.js'

document.getElementById('attack-button').addEventListener('click', attack)

function attack() {
    console.log("click")
    render()
}

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacter()
    document.getElementById('monster').innerHTML = orc.getCharacter()
}

let wizard = new Characters(charactersData.hero)
let orc = new Characters(charactersData.monster)

render()