// TODO: If no letters were found, increment the counter.
// TODO: If the counter exceeds the max, end the game, and
//         show the modal with a failure message.
// TODO: If the letters are all revealed, end the game and
//         show the modal with a success message.
// NOTE: No counter exists!
// TODO: Pick a word from a random list of words.
const randomWords = ['BULBASAUR',
  'IVYSAUR',
  'VENUSAUR',
  'CHARMANDER',
  'CHARMELEON',
  'CHARIZARD',
  'SQUIRTLE',
  'WARTORTLE',
  'BLASTOISE',
  'CATERPIE',
  'METAPOD',
  'BUTTERFREE',
  'WEEDLE',
  'KAKUNA',
  'BEEDRILL',
  'PIDGEY',
  'PIDGEOTTO',
  'PIDGEOT',
  'RATTATA',
  'RATICATE',
  'SPEAROW',
  'FEAROW',
  'EKANS',
  'ARBOK',
  'PIKACHU',
  'RAICHU',
  'SANDSHREW',
  'SANDSLASH',
  'NIDORAN♀',
  'NIDORINA',
  'NIDOQUEEN',
  'NIDORAN♂',
  'NIDORINO',
  'NIDOKING',
  'CLEFAIRY',
  'CLEFABLE',
  'VULPIX',
  'NINETALES',
  'JIGGLYPUFF',
  'WIGGLYTUFF',
  'ZUBAT',
  'GOLBAT',
  'ODDISH',
  'GLOOM',
  'VILEPLUME',
  'PARAS',
  'PARASECT',
  'VENONAT',
  'VENOMOTH',
  'DIGLETT',
  'DUGTRIO',
  'MEOWTH',
  'PERSIAN',
  'PSYDUCK',
  'GOLDUCK',
  'MANKEY',
  'PRIMEAPE',
  'GROWLITHE',
  'ARCANINE',
  'POLIWAG',
  'POLIWHIRL',
  'POLIWRATH',
  'ABRA',
  'KADABRA',
  'ALAKAZAM',
  'MACHOP',
  'MACHOKE',
  'MACHAMP',
  'BELLSPROUT',
  'WEEPINBELL',
  'VICTREEBEL',
  'TENTACOOL',
  'TENTACRUEL',
  'GEODUDE',
  'GRAVELER',
  'GOLEM',
  'PONYTA',
  'RAPIDASH',
  'SLOWPOKE',
  'SLOWBRO',
  'MAGNEMITE',
  'MAGNETON',
  'DODUO',
  'DODRIO',
  'SEEL',
  'DEWGONG',
  'GRIMER',
  'MUK',
  'SHELLDER',
  'CLOYSTER',
  'GASTLY',
  'HAUNTER',
  'GENGAR',
  'ONIX',
  'DROWZEE',
  'HYPNO',
  'KRABBY',
  'KINGLER',
  'VOLTORB',
  'ELECTRODE']
let counter = 0
let solved = 0
let wordString
const chooseWord = (randomWords) => {
  let choice = randomWords[Math.floor(Math.random() * randomWords.length)]
  console.log(choice)
  return choice
}

// When the click event fires, this function will be called,
//   and the actual 'MouseEvent' object will be passed as an
//   argurment, we'll call it 'event'
const handleLetterClick = (event) => {
  // The event's target property is a reference to the actuall
  //   button node that was clicked.
  const button = event.target
  // The button's textContent property is the character we
  // set it to when we created the button.
  const letter = button.textContent

  // Set the disabled property on the button:
  //   <button disable>A</button>
  button.disabled = true

  // Collect ALL of the spans in the <div class="word"> node
  const letters = document.querySelectorAll('.word span')
  let matched = false
  // For each number, 0 through the number of spans, as i
  for (let i = 0; i < letters.length; i++) {
    // Check if the span at position 'i' in the word matches
    //   the letter that got clicked.
    if (letters[i].textContent === letter) {
      // If it did, reveal the letter.
      letters[i].className = 'revealed'
      matched = true
      solved++
    }
    if (solved >= letters.length) {
      document.querySelector('.modal.hidden').className = 'modal'
      document.querySelector('.modal h1').textContent = 'Winner!'
    }
  } if (!matched) {
    counter++
    document.querySelector('.counter').textContent = counter
    if (counter >= 6) {
      document.querySelector('.modal.hidden').className = 'modal'
      document.querySelector('.modal h1').textContent = 'You Lose.'
    }
  }
}

const init = () => {
  wordString = chooseWord(randomWords)
  // Find the HTML node <div class="input">
  const inputs = document.querySelector('.input')
  // Find the HTML node '<div class="word">'
  const word = document.querySelector('.word')

  // For each number, 0 through 25, as 'i'
  for (let i = 0; i < 26; i++) {
    // The ASCII value, in decimal, for the
    //   character 'A' is 65 (www.asciitable.com/)
    //             'B' is 66, etc.
    // Adding 65 and 'i', will get us each letter
    //   of the alphabet as we go through this loop.
    const letter = String.fromCharCode(65 + i)
    // Create a '<button>' node (or "tag")
    const button = document.createElement('button')
    // Set the text inside the button node to be
    //   the current letter: e.g. <button>A</button>
    button.textContent = letter
    // When this button get clicked, call the function
    //   with the name 'handleLetterClick'
    button.addEventListener('click', handleLetterClick)
    // Stick this button node into the <div class="inputs">
    inputs.appendChild(button)
  }

  // For each number, 0 through the length of the string
  //   'randomWords', as i
  for (let i = 0; i < wordString.length; i++) {
    // Create a <span> node
    const letter = document.createElement('span')
    // Set the text inside the node to be the character
    //   at the 'i' position in 'randomWords', remember
    //   characters in strings can be accessed like arrays.
    letter.textContent = wordString[i]

    // Stick this span node into the <div class="word">
    word.appendChild(letter)
  }
}

// When the document is ready, call the funtion named 'init'
document.addEventListener('DOMContentLoaded', init)
