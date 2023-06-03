import charactersData from './data.js'
import Characters from './Characters.js'

document.getElementById('attack-button').addEventListener('click', attack)

function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render()
}

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacter()
    document.getElementById('monster').innerHTML = orc.getCharacter()
}

let wizard = new Characters(charactersData.hero)
let orc = new Characters(charactersData.monster)

render()