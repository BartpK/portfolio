const navButton = document.querySelector('#navbutton')
const navButtonClose = document.querySelector('#navclosebutton')
const navLinks = document.querySelectorAll('.navlink')
const navContainer = document.querySelector('#navmenucontainer')

document.querySelector('#whatsappbutton').addEventListener('click', () => window.open("https://wa.me/31642286298"))
document.querySelector('#emailbutton').addEventListener('click', () => window.open("mailto:bartkuipers88@gmail.com"))


navLinks.forEach(link => {
    link.addEventListener('click', () => toggleNav())
})




navButton.addEventListener('click', () => toggleNav())
navButtonClose.addEventListener('click', () => toggleNav())



const toggleNav = () => {
    if (navContainer.className === 'navmenuclosed') {
        navContainer.className = 'navmenuopen'
    } else {
        navContainer.className = 'navmenuclosed'
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//https://wa.me/31642286298