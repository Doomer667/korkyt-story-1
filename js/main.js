const slideTwoTrigger = document.getElementById('slide-two-trigger')
const slideSixTrigger = document.getElementById('slide-six-trigger')
const slideElevenTrigger = document.getElementById('slide-eleven-trigger')
const triggers = [slideTwoTrigger, slideSixTrigger]
const slideTwo = document.getElementById('slide-two')
const slideSix = document.getElementById('slide-six')
const slideFive = document.getElementById('slide-five')
const slideEleven = document.getElementById('slide-eleven')
const imageOneTrigger = document.getElementById('image-one-trigger')
const imageTwoTrigger = document.getElementById('image-two-trigger')
const imageThreeTrigger = document.getElementById('image-three-trigger')
let isModal = false


const createModal = (id, image, header, body, className) => {
  const element = document.createElement('div')
  element.setAttribute('class', className)
  element.setAttribute('id', id)

  const headerComponent = document.createElement('h2')
  headerComponent.innerText = header
  headerComponent.setAttribute('class', 'info__header')

  const bodyComponent = document.createElement('p')
  bodyComponent.innerText = body
  headerComponent.setAttribute('class', 'info__body')

  const textContent = document.createElement('div')
  textContent.setAttribute('class', 'text-container')
  textContent.appendChild(headerComponent)
  textContent.appendChild(bodyComponent)

  const imageComponent = document.createElement('img')
  imageComponent.setAttribute('src', image)
  imageComponent.setAttribute('class', 'info__image')

  const closeButton = document.createElement('button')
  const buttonImage = document.createElement('img')
  buttonImage.setAttribute('src', '../icons/close.png')
  buttonImage.setAttribute('class', 'close-button__image')
  closeButton.setAttribute('class', 'close-button')
  closeButton.setAttribute('id', 'close-button')
  closeButton.onclick = () => closeDialog(id)
  closeButton.appendChild(buttonImage)

  element.appendChild(imageComponent)
  element.appendChild(textContent)
  element.appendChild(closeButton)

  return element
}

const openDialog = (element, id, link, header, body) => {
  element.after(createModal(id, link, header, body, 'info'))
}

const closeDialog = (id) => {
  const modal = document.getElementById(id)
  enableTriggers()
  modal.remove()
  isModal = false
}

const enableTriggers = () => {
  triggers.forEach(element => element.setAttribute('class', 'circle'))
}

slideTwoTrigger.onclick = () => {
  const id = 'modal-one'
  const link = '../images/image-8.jpg'
  const header = 'yurt'
  const body = 'A yurt (from the Turkic languages) or ger (Mongolian) is a portable, round tent covered and insulated with skins or felt and traditionally used as a dwelling by several distinct nomadic groups in the steppes and mountains of Inner Asia. The structure consists of a flexible angled assembly or latticework of wood or bamboo for walls, a door frame, ribs (poles, rafters), and a wheel (crown, compression ring) possibly steam-bent as a roof. The roof structure is sometimes self-supporting, but large yurts may have interior posts supporting the crown.'

  openDialog(slideTwo, id, link, header, body)
  slideTwoTrigger.setAttribute('class', 'circle disabled')
}

slideSixTrigger.onclick = () => {
  const id = 'modal-two'
  const link = '../images/image-8.jpg'
  const header = 'NE yurt'
  const body = 'NOT A yurt (from the Turkic languages) or ger (Mongolian) is a portable, round tent covered and insulated with skins or felt and traditionally used as a dwelling by several distinct nomadic groups in the steppes and mountains of Inner Asia. The structure consists of a flexible angled assembly or latticework of wood or bamboo for walls, a door frame, ribs (poles, rafters), and a wheel (crown, compression ring) possibly steam-bent as a roof. The roof structure is sometimes self-supporting, but large yurts may have interior posts supporting the crown.'

  openDialog(slideSix, id, link, header, body)
  slideSixTrigger.setAttribute('class', 'circle disabled')
}

slideElevenTrigger.onclick = () => {
  const id = 'modal-one'
  const link = '../images/image-8.jpg'
  const header = 'yurt'
  const body = 'A yurt (from the Turkic languages) or ger (Mongolian) is a portable, round tent covered and insulated with skins or felt and traditionally used as a dwelling by several distinct nomadic groups in the steppes and mountains of Inner Asia. The structure consists of a flexible angled assembly or latticework of wood or bamboo for walls, a door frame, ribs (poles, rafters), and a wheel (crown, compression ring) possibly steam-bent as a roof. The roof structure is sometimes self-supporting, but large yurts may have interior posts supporting the crown.'

  openDialog(slideEleven, id, link, header, body)
  slideElevenTrigger.setAttribute('class', 'circle disabled')
}

const openModal = (element, id, link, header, body) => {
  element.appendChild(createModal(id, link, header, body, 'modal-dialog'))
}

imageOneTrigger.onclick = () => {
  const id = 'modal-three'
  const link = '../images/image-7.webp'
  const header = 'sherter'
  const body = 'The sherter is an ancient Kazakh and ancient Turkic musical instrument with its own unique colorful sound. Traditionally, the technique of playing the presented stringed instrument is reduced to classical plucking manipulations, which allow you to get a sufficiently loud clear sound with the possibility of setting a clear rhythm.'

  if (!isModal) {
    openModal(slideFive, id, link, header, body)
    isModal = true
  }
}

imageTwoTrigger.onclick = () => {
  const id = 'modal-four'
  const link = '../images/image-9.png'
  const header = 'dabyl'
  const body = 'The dabyl is a large drum, the sounds of which served as a signal about the appearance of foreigners in the steppe. Rawhide skins of two bulls or camels were used for its manufacture. They were pulled together on a wooden case 20-30 cm wide, and in diameter reaching one and a half meters. The double was suspended on tripods made of poles or spears.'

  if (!isModal) {
    openModal(slideFive, id, link, header, body)
    isModal = true
  }
}

imageThreeTrigger.onclick = () => {
  const id = 'modal-five'
  const link = '../images/image-8.jpg'
  const header = 'yurt'
  const body = 'A yurt (from the Turkic languages) or ger (Mongolian) is a portable, round tent covered and insulated with skins or felt and traditionally used as a dwelling by several distinct nomadic groups in the steppes and mountains of Inner Asia. The structure consists of a flexible angled assembly or latticework of wood or bamboo for walls, a door frame, ribs (poles, rafters), and a wheel (crown, compression ring) possibly steam-bent as a roof. The roof structure is sometimes self-supporting, but large yurts may have interior posts supporting the crown.'

  if (!isModal) {
    openModal(slideFive, id, link, header, body)
    isModal = true
  }
}
