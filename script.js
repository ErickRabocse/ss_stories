const textareaEl = document.querySelector('.form__textarea')
const counterEl = document.querySelector('.counter')
const storiesFeedEl = document.querySelector('.stories')
const formEl = document.querySelector('.form')
//declare max amount of letters
const MAX_CHARS = 500
// Global variables

// INPUT COMPONENT
textareaEl.addEventListener('input', (e) => {
  // number of characters typed in the textarea
  const characters = e.target.value.length
  //characters left
  const charsLeft = MAX_CHARS - characters
  // updating counter
  counterEl.textContent = charsLeft
})

// STORIES FEEDBACK COMPONENT
// visual indicator fn abstracted
const visualIndicator = (textCheck) => {
  textareaEl.classList.add(textCheck)
  setTimeout(() => {
    textareaEl.classList.remove(textCheck)
  }, 2000)
}
// fn used to render list item
const handleStoryPost = (e) => {
  e.preventDefault()
  const storyText = textareaEl.value
  // verification section: min-length & #
  if (storyText.includes('#') && storyText.length >= 10) {
    visualIndicator('valid')
  } else {
    visualIndicator('invalid')
    textareaEl.focus()
    return
  }
  // getting data to render in stories feed: hashtag, author name, author's 1st letter, like-counter & date
  const hashElement = storyText.split(' ').find((word) => word.includes('#'))
  const authorName = hashElement.substring(1)
  const authorCapital = authorName.substring(0, 1).toUpperCase()
  const likeCount = 0
  const daysAgo = 0
  // Creating object with the properties of the HTML element to be rendered.
  const renderedHTML = {
    storyText,
    hashElement,
    authorName,
    authorCapital,
    likeCount,
    daysAgo,
  }

  // HTML feed to be posted in the list
  const storyListEl = `
    <li class="storyElList">
      <button class="like">
        <label class="count">${renderedHTML.likeCount}</label>
        <i class="fa-regular fa-star"></i>
      </button>
      <section class="author_letter">
        <p class="capital_letter">${renderedHTML.authorCapital}</p>
      </section>
      <div class="text">
        <p class="author_name">${renderedHTML.authorName}</p>
        <p class="story_posted">${renderedHTML.storyText}</p> 
      </div>  
      <p class="days__ago">${renderedHTML.daysAgo} days ago</p>
    </li>
  `
  //
  storiesFeedEl.insertAdjacentHTML('beforeend', storyListEl)
}

formEl.addEventListener('submit', handleStoryPost)
