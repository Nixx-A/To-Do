function getId(id) {
  return document.getElementById(id)
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
openModalBtn.addEventListener("click", openModal);


const form  = getId('form');
row = getId("container")
text = getId("text").value

form.addEventListener('submit', (event) => {
  const text = getId("text").value
  console.log(text)
  painToDo(text)
  text.value = ""
  closeModal()
  event.preventDefault()
});

function createIdRandom() {
  randomId = Math.floor(Math.random() * 1000)
  return randomId
}

function painToDo(text) {
  randomId = createIdRandom()
  let contentToDo = document.createElement('div') 
  contentToDo.setAttribute("class", "to-do")
   contentToDo.innerHTML = `
  <input class="to-do__check" type="checkbox">
  <p class="to-do__text">${text}</p>
  <button class="to-do__delete modal-btn" id="${randomId}" onclick=deleteToDo(id)>delete</button>
  </tr>`
  row.appendChild(contentToDo)
}

function deleteToDo(id) {
  const id = getId(id)
  return id.parentElement.remove()
}

