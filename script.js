const mainButton = document.querySelector('#main-button')
const buttons = document.querySelector('#button-container')
const background = document.querySelector('.background')



mainButton.addEventListener('click', showColors)

function showColors(e) {
	e.preventDefault()
	buttons.innerHTML = `
    <button class="red"></button>
    <button class="orange"></button>
    <button class="yellow"></button>
    <button class="light-green"></button>
    <button class="dark-green"></button>
    <button class="dark-blue"></button>
    <button class="light-blue"></button>
    <button class="purple"></button>
    <button class="pink"></button>
    <button class="brown"></button>
    <button class="grey"></button>
    <button class="black"></button>
  `
  mainButton.textContent = 'Click on desired color to set the background'
}

buttons.addEventListener('click', (e) => {
  e.preventDefault();
  const backgroundColor = e.target.className

    switch (backgroundColor) {
      case ('red'):
        background.className = 'red';
        localStorage.setItem('background color', 'red')
        break;
      case ('orange'):
        background.className = 'orange';
        localStorage.setItem('background color', 'orange')
        break;
      case ('yellow'):
        background.className = 'yellow';
        localStorage.setItem('background color', 'yellow')
        break;
      case ('light-green'):
        background.className = 'light-green';
        localStorage.setItem('background color', 'light-green')
        break;
      case ('dark-green'):
        background.className = 'dark-green';
        localStorage.setItem('background color', 'dark-green')
        break;
      case ('dark-blue'):
        background.className = 'dark-blue';
        localStorage.setItem('background color', 'dark-blue')
        break;
      case ('light-blue'):
        background.className = 'light-blue';
        localStorage.setItem('background color', 'light-blue')
        break;
      case ('purple'):
        background.className = 'purple';
        localStorage.setItem('background color', 'purple')
        break;
      case ('pink'):
        background.className = 'pink';
        localStorage.setItem('background color', 'pink')
        break;
      case ('brown'):
        background.className = 'brown';
        localStorage.setItem('background color', 'brown')
        break;
      case ('grey'):
        background.className = 'grey';
        localStorage.setItem('background color', 'grey')
        break;
      case ('black'):
        background.className = 'black';
        localStorage.setItem('background color', 'black')
        break;
      }

})

const color = localStorage.getItem('background color')

function changeColor() {
  return background.className = color
}

changeColor()