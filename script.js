const navButton = document.querySelector('#navbutton')
const navButtonClose = document.querySelector('#navclosebutton')
const navLinks = document.querySelectorAll('.navlink')
const navContainer = document.querySelector('#navmenucontainer')

navLinks.forEach(link => {
    link.addEventListener('click', () => toggleNav())
})




navButton.addEventListener('click', () => toggleNav())
navButtonClose.addEventListener('click', () => toggleNav())



const toggleNav = () => {
    console.log('clicked')
    if (navContainer.className === 'navmenuclosed') {
        navContainer.className = 'navmenuopen'
    } else {
        navContainer.className = 'navmenuclosed'
    }
}




//https://wa.me/31642286298