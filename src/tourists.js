export function removeTourist(id) {
  document.getElementById(id).remove()

  const touristList = getTourists()
  console.log(touristList.length)

  if (touristList.length == 1) {
    return
  } else {
    const button = document.createElement('button')
    button.classList.add('button', 'button-link')
    button.id = `remove-tourist-0${touristList.length}`
    button.innerText = "Удалить"
    document.querySelector(`#tourist-0${touristList.length} .tourist-header`).appendChild(button)

    document.getElementById(`remove-tourist-0${touristList.length}`).addEventListener('click', () => {
      removeTourist(`tourist-0${touristList.length}`)
    })
  }
}


export function addTourist() {
  let amount = document.querySelectorAll('.tourist')
  if (amount.length == 6) { return }

  const touristList = document.getElementById('tourist-list')
  let template = document.createElement('div')

  template.id = `tourist-0${amount.length + 1}`
  template.classList.add('tourist', 'form-block')
  template.innerHTML = `
      <div class="tourist-header">
        <h4>Турист</h4>
        <button class="button button-link" id="remove-tourist-0${amount.length + 1}">Удалить</button>
      </div>
      <div class="input">
        <input id="tourist-name-0${amount.length + 1}" type="text" placeholder="NAME SURNAME" required>
        <label for="tourist-name-0${amount.length + 1}">Имя туриста</label>
      </div>
      <div class="input-group">
        <div class="input">
          <input id="tourist-date-0${amount.length + 1}" type="date" placeholder="ДД.ММ.ГГГГ" required>
          <label for="tourist-date-0${amount.length + 1}">Дата рождения</label>
        </div>
        <div class="input">
          <input id="tourist-passport-0${amount.length + 1}" type="text" placeholder="00000000" required>
          <label for="tourist-passport-0${amount.length + 1}">Паспорт</label>
        </div>
      </div>
    `

  if (document.getElementById(`remove-tourist-0${amount.length}`) != undefined) {
    document.getElementById(`remove-tourist-0${amount.length}`).remove()
  }


  touristList.appendChild(template)
  document.getElementById(`remove-tourist-0${amount.length + 1}`).addEventListener('click', () => {
    removeTourist(`tourist-0${amount.length + 1}`)
  })
}

export function getTourists() {
  let fields = document.querySelectorAll('.tourist')
  let touristList = []

  for (let i = 0; i < fields.length; i++) {
    if (document.getElementById(`tourist-name-0${i + 1}`) != null) {
      let tourist = new Object()
      tourist.name = document.getElementById(`tourist-name-0${i + 1}`).value
      tourist.date = document.getElementById(`tourist-date-0${i + 1}`).value
      tourist.passport = document.getElementById(`tourist-passport-0${i + 1}`).value
      touristList.push(tourist)
    }
  }

  return touristList
}