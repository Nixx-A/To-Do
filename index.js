function getId(id) {
  return document.getElementById(id)
}

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const openModalBtn = document.querySelector('.btn-open')
const closeModalBtn = document.querySelector('.btn-close')
const clearLocalStorage = document.querySelector('.clear')


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

const container = getId('container')
container.addEventListener('click', deleteToDo)

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

function callItemsLocalStorage(collection) {
  console.log(collection)
  let id
  collection.forEach(item => {
    id = localStorage.getItem(item)
    painToDo(id)
  })
}

let collectionRandomsId = []

function painToDo(text) {
  randomId = createIdRandom()
  /*  collectionRandomsId += collectionRandomsId.push(`${randomId}`) */
  /*  console.log(randomId) */
  localStorage.setItem(`${randomId}`, `${text}`)
  /*  callItemsLocalStorage(collectionRandomsId) */
  let contentToDo = document.createElement('div')
  contentToDo.setAttribute('class', 'to-do')
  contentToDo.innerHTML = `
  <input class="to-do__check" type="checkbox">
  <p class="to-do__text">${text}</p>
  <button class="to-do__delete btn" id="${randomId}" data-id="${randomId}" >delete</button>
  </tr>`
  container.appendChild(contentToDo)
}

function paintLocalStorage () {
  
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    let value = localStorage.getItem(key)
    let contentToDo = document.createElement('div')
    contentToDo.setAttribute('class', 'to-do')
    contentToDo.innerHTML = `
    <input class="to-do__check" type="checkbox">
    <p class="to-do__text">${value}</p>
    <button class="to-do__delete btn " id="${key}" data-id="${key}" >delete</button>
    </tr>`
    container.appendChild(contentToDo)
  }
}

paintLocalStorage()

/* clearLocalStorage.addEventListener('click', () => {
 localStorage.clear()
}) */

function deleteToDo(e) {
  const box = e.target.nextSibling
  const id = e.target.dataset.id
  localStorage.removeItem(id)
  if (box === 'false') {
    e.target.nextSibling.classList.add('checked')
    console.log('se esta haciendo')
    box.classList.add('checked')
    checkedToDo(e.target)
  } else if (id) {
    e.target.parentElement.remove()
  }
}

function checkedToDo(e) {
  const checkText = e.nextSibling.dataset.text
  console.log(checkText)
  if (checkText.includes('checked')) {
    checkText.classList.remove('checked')
  } else {
    checkText.classList.add('checked')
  }
}
