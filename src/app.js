import './assets/css/style.scss'

const $adButton = document.querySelector('#adButton')
const $adArea = document.querySelector('#adArea')
$adButton.addEventListener('click', e => {
    e.preventDefault()
    $adArea.style.display = $adArea.style.display == 'block' ? 'none' : 'block'
})