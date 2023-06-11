import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from './utils.js'


class Characters {
    constructor(data) {
        Object.assign(this, data)
        this.diceArray = getDicePlaceholderHtml(this.diceCount)
        this.maxHealth = this.health
    }

    getHealthBarHtml() {
        const percent = getPercentage(this.health, this.maxHealth)
        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
            style="width:${percent}%;">
            </div>
        </div>
        `
    }
    
    getDiceHtml() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num => {
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    takeDamage(attackScoreDamage) {
        let totalAttackScore = attackScoreDamage.reduce((accumulatedAttackScore, diceValue) => {
            return accumulatedAttackScore + diceValue;
        })
        this.health -= totalAttackScore

        if(this.health <= 0) {
            this.health = 0
            this.isDead = true
        }
        console.log(getPercentage(this.health, this.maxHealth))
    }
    
    getCharacter() {
        const { name, avatar, health, diceArray} = this
        const healthBar = this.getHealthBarHtml()
        return `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
            <div class="dice-container">    
                ${diceArray}
            </div>
        </div>
        `
    }
}


export default Characters 