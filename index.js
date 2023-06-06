import charactersData from './data.js'
import Characters from './Characters.js'

const monstersArray = ["orc", "demon", "goblin"]

document.getElementById('attack-button').addEventListener('click', attack)

function getNewMonster() {
    const nextMonsterData = charactersData[monstersArray.shift()]
    return nextMonsterData ? new Characters(nextMonsterData) : {};
}

function attack() {
    wizard.getDiceHtml()
    monster.getDiceHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()

    if (wizard.isDead) {
        endGame()
    } else if (monster.isDead) {
        if (monstersArray.length > 0) {
            setTimeout(()=>{
                monster = getNewMonster()
                render()
            }, 1500)
        } else {
            endGame()
        }
    }
}

function endGame() {
    const endMessage = wizard.health === 0 && monster.health === 0 ? "No Victors"
    : wizard.health > 0 ? "The Wizard Wins"
    : `The ${monster.name} wins`;

    const endEmoji = wizard.health > 0 ? "🔮" : "💀"

    setTimeout(() => {
        document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2>    
            <h3>${endMessage}</h3>
            <p>${endEmoji}</p>
        </div>`
    }, 2500);

}

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacter()
    document.getElementById('monster').innerHTML = monster.getCharacter()
}

let wizard = new Characters(charactersData.hero)
let monster = getNewMonster()

render()