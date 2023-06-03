import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'

function Characters(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    
    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num => {
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.takeDamage = function(attackScoreDamage) {

        let totalAttackScore = attackScoreDamage.reduce((accumulatedAttackScore, diceValue) => {
            return accumulatedAttackScore + diceValue;
        })
        this.health -= totalAttackScore

        if(this.health < 0) {
            this.health = 0
            this.isDead = true
        }
        console.log(this.isDead)

        console.log(`${this.name}: ${attackScoreDamage} damage`)
    }
    
    this.getCharacter = function() {
        const {elementId, name, avatar, health, diceCount, diceArray} = this
        return `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">    
                ${diceArray}
            </div>
        </div>
        `
    }
}


export default Characters 