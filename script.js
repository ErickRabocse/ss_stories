const textareaEl = document.querySelector('.form__textarea')
const counterEl = document.querySelector('.counter')
//declare max amount of letters
const MAX_CHARS = 500

textareaEl.addEventListener('input', (e) => {
  // number of characters typed in the textarea
  const characters = e.target.value.length
  //characters left
  const charsLeft = MAX_CHARS - characters
  // updating counter
  counterEl.textContent = charsLeft
})
