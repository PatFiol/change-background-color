const mainButton = document.querySelector('#main-button')
const buttons = document.querySelector('#button-container')
const background = document.querySelector('.background')

// (()=>{

mainButton.addEventListener('click', showColors)

// })();

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
    <button class="white"></button>
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
        break;
      case ('orange'):
        background.className = 'orange';
        break;
      case ('yellow'):
        background.className = 'yellow';
        break;
      case ('light-green'):
        background.className = 'light-green';
        break;
      case ('dark-green'):
        background.className = 'dark-green';
        break;
      case ('dark-blue'):
        background.className = 'dark-blue';
        break;
      case ('light-blue'):
        background.className = 'light-blue';
        break;
      case ('purple'):
        background.className = 'purple';
        break;
      case ('pink'):
        background.className = 'pink';
        break;
      case ('white'):
        background.className = 'white';
        break;
      case ('grey'):
        background.className = 'grey';
        break;
      case ('black'):
        background.className = 'black';
        break;
      }

})