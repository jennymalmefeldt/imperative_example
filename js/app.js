const app = document.getElementById('app')

const allSpeakers = ["Scott H", "John P", "Scott G", "Dan V", "Debra H", "Zainer T", "Scott A", "Ellen G"]

const list = document.createElement("ul")
app.appendChild(list)

allSpeakers.map(speaker => {
  const speakerDisplay = document.createElement("li")
  speakerDisplay.innerText = speaker
  // list.appendChild( speakerDisplay)
  list.insertAdjacentElement("beforeend", speakerDisplay)
})