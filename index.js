function getId(id) {
  return document.getElementById(id)
}

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const openModalBtn = document.querySelector('.btn-open')
const closeModalBtn = document.querySelector('.btn-close')

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

openModalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

//const form  = getId('form');
const container = getId('container')
container.addEventListener('click', deleteToDo)
//text = getId("text").value

form.addEventListener('submit', event => {
  event.preventDefault()
  const text = getId('text').value
  console.log(text)
  painToDo(text)
  text.value = ''
  getId('text').value = ''
  closeModal()
})

function createIdRandom() {
  return Date.now()
}

function painToDo(text) {
  randomId = createIdRandom()
 /*  console.log(randomId) */
  let contentToDo = document.createElement('div')
  contentToDo.setAttribute('class', 'to-do')
  contentToDo.innerHTML = `
  <input class="to-do__check" type="checkbox">
  <p class="to-do__text checked">${text}</p>
  <button class="to-do__delete modal-btn" id="${randomId}" data-id="${randomId}" >delete</button>
  </tr>`
  container.appendChild(contentToDo)
}

/* const deleteBtn = document.querySelector('.to-do__delete')
deleteBtn.addEventListener('click', deleteToDo) */
/* const deleteBtn = document.querySelectorAll('.to-do__delete')
deleteBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    console.log(e);
  })
})
 */


function deleteToDo(e) {
  console.log(e.target.dataset.id);
  const id = e.target.dataset.id
  if (id) {
    e.target.parentElement.remove()
  }
}
