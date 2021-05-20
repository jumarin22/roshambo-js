function main() {
  const rock = 'rock'
  const paper = 'paper'
  const scissors = 'scissors'
  const lizard = 'lizard'
  const spock = 'spock'
  const yourTurn = 'Please make your choice'
  const choiceMade = 'Choice Made'
  const win = 'You win!'
  const lose = 'You lose :('
  const draw = 'Draw!'

  let oneChoice = 'one'
  let twoChoice = 'two'
  let oneDisplay = document.querySelector('.one p')
  let twoDisplay = document.querySelector('.two p')

  const oneRock = document
    .querySelector('.one button.rock')
    .addEventListener('click', pickOneRock)

  function pickOneRock() {
    oneChoice = rock
    oneDisplay.textContent = choiceMade
    twoDisplay.textContent = yourTurn
  }

  const onePaper = document
    .querySelector('.one button.paper')
    .addEventListener('click', pickOnePaper)

  function pickOnePaper() {
    oneChoice = paper
    oneDisplay.textContent = choiceMade
    twoDisplay.textContent = yourTurn
  }

  const oneScissors = document
    .querySelector('.one button.scissors')
    .addEventListener('click', pickOneScissors)

  function pickOneScissors() {
    oneChoice = scissors
    oneDisplay.textContent = choiceMade
    twoDisplay.textContent = yourTurn
  }

  const oneLizard = document
    .querySelector('.one button.lizard')
    .addEventListener('click', pickOneLizard)

  function pickOneLizard() {
    oneChoice = lizard
    oneDisplay.textContent = choiceMade
    twoDisplay.textContent = yourTurn
  }

  const oneSpock = document
    .querySelector('.one button.spock')
    .addEventListener('click', pickOneSpock)

  function pickOneSpock() {
    oneChoice = spock
    oneDisplay.textContent = choiceMade
    twoDisplay.textContent = yourTurn
  }

  const twoRock = document
    .querySelector('.two button.rock')
    .addEventListener('click', picktwoRock)

  function picktwoRock() {
    twoChoice = rock
    showWinner()
  }

  const twoPaper = document
    .querySelector('.two button.paper')
    .addEventListener('click', picktwoPaper)

  function picktwoPaper() {
    twoChoice = paper
    showWinner()
  }

  const twoScissors = document
    .querySelector('.two button.scissors')
    .addEventListener('click', picktwoScissors)

  function picktwoScissors() {
    twoChoice = scissors
    showWinner()
  }

  const twoLizard = document
    .querySelector('.two button.lizard')
    .addEventListener('click', pickTwoLizard)

  function pickTwoLizard() {
    twoChoice = lizard
    showWinner()
  }

  const twoSpock = document
    .querySelector('.two button.spock')
    .addEventListener('click', pickTwoSpock)

  function pickTwoSpock() {
    twoChoice = spock
    showWinner()
  }

  function showWinner() {
    if (oneChoice != 'one' && twoChoice != 'two') {
      if (oneChoice === twoChoice) {
        oneDisplay.textContent = draw
        twoDisplay.textContent = draw
      } else if (
        (oneChoice === rock &&
          (twoChoice === scissors || twoChoice == lizard)) ||
        (oneChoice === paper && (twoChoice === rock || twoChoice == spock)) ||
        (oneChoice === scissors &&
          (twoChoice === paper || twoChoice === lizard)) ||
        (oneChoice === lizard &&
          (twoChoice === spock || twoChoice === paper)) ||
        (oneChoice === spock && (twoChoice === scissors || twoChoice === rock))
      ) {
        oneDisplay.textContent = win
        twoDisplay.textContent = lose
      } else {
        oneDisplay.textContent = lose
        twoDisplay.textContent = win
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', main)
