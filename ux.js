//VARIABLES
const $buttonMoodDark = document.querySelector('#buttonMoodDark')
const $buttonMenu = document.querySelector('#buttonMenu')
const $buttonReceiveNews = document.querySelector('#buttonReceiveNews')
const $buttonReceiveNewsMenu = document.querySelector('.floatingMenu_item--receiveNews')
const $buttonCancelarNews = document.querySelector('#buttonCancelarNews')
const $navItems = document.querySelectorAll('.floatingMenu_item')



const changeMoodDark = () => {
    const $body = document.querySelector('body')
    $body.classList.toggle('moodDark')
}

const showMenu = e => {
    e.preventDefault()
    const $floatingMenu = document.querySelector('#floatingMenu')
    $floatingMenu.classList.toggle('floatingMenu_active')
}

const hideMenu = () => {
    const $floatingMenu = document.querySelector('#floatingMenu')
    $floatingMenu.classList.remove('floatingMenu_active')
    
}

const showReceiveNews = e => {
    e.preventDefault()
    const $sectionReceiveNews = document.querySelector('#sectionReceiveNews')
    $sectionReceiveNews.classList.toggle('sectionReceiveNews_active')
    hideMenu()
}




$navItems.forEach(item => {
    item.addEventListener('click', hideMenu)
})
$buttonMoodDark.addEventListener('click', changeMoodDark)
$buttonMenu.addEventListener('click', showMenu)
$buttonReceiveNews.addEventListener('click', showReceiveNews)
$buttonReceiveNewsMenu.addEventListener('click', showReceiveNews)
$buttonCancelarNews.addEventListener('click', showReceiveNews)