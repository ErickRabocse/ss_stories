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
// fn used to render list item
const handleStoryPost = (e) => {
  e.preventDefault()
  const storyEl = textareaEl.value
  // HTML feed to be posted in the list
  const storyListEl = `
    <li class="storyElList">
      <button class="like">
        <label class="count">0</label>
        <i class="fa-regular fa-star"></i>
      </button>
      <section class="author_letter">
        <p class="capital_letter">A</p>
      </section>
      <div class="text">
        <p class="author_name">Author</p>
        <p class="story_posted">${storyEl}</p> 
      </div>  
      <p class="days__ago">123 days ago</p>
    </li>
  `
  storiesFeedEl.insertAdjacentHTML('beforeend', storyListEl)
}

formEl.addEventListener('submit', handleStoryPost)
