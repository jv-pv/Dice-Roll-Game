function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() => {
        return Math.floor(Math.random() * 6)+1;
    })
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() => {
        return `<div class="placeholder-dice"></div>`
    }).join('')
}

const getPercentage = (remainingHealth, maximumHealth) => (remainingHealth / maximumHealth) * 100

export {getDiceRollArray, getDicePlaceholderHtml, getPercentage}