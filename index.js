import charactersData from './data.js'
import Characters from './Characters.js'

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacter()
    document.getElementById('monster').innerHTML = orc.getCharacter()
}

let wizard = new Characters(charactersData.hero)
let orc = new Characters(charactersData.monster)

render()