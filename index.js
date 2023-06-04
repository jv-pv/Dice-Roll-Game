import charactersData from './data.js'
import Characters from './Characters.js'

document.getElementById('attack-button').addEventListener('click', attack)

function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    if (wizard.isDead || orc.isDead) endGame()
    render()
}

function endGame() {
    const endMessage = wizard.health === 0 && orc.health === 0 ? "No Victors"
    : wizard.health > 0 ? "The Wizard Wins"
    : "The Orc Wins";

    const endEmoji = wizard.health > 0 ? "🔮" : "💀"

    document.body.innerHTML = `
    <div class="end-game">
        <h2>Game Over</h2>    
        <h3>${endMessage}</h3>
        <p>${endEmoji}</p>
    </div>`
}

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacter()
    document.getElementById('monster').innerHTML = orc.getCharacter()
}

let wizard = new Characters(charactersData.hero)
let orc = new Characters(charactersData.monster)

render()