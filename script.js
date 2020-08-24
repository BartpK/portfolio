const navButton = document.querySelector('#navbutton')
const navButtonClose = document.querySelector('#navclosebutton')
const navLinks = document.querySelectorAll('.navlink')
const navContainer = document.querySelector('#navmenucontainer')

const projectsWrapper = document.querySelector('#projectswrapper')


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

const loadProjects = async () => {
    const projectsData = await getProjects();
    displayProjects(projectsData);
}
loadProjects();

const displayProjects = (data) => {
    console.log(data);
    const projectshtml = data.items.map(entry => {
        return (
            `<div class="projectcard">
            <div class="projectpreviewwrapper">
                <img loading="lazy" class="projectpreview" src="${getAssetURL(entry.fields.projectPreviewImage.sys.id, data)}" />
                <div class="tagwrapper">
                ${createTags(entry)}
                </div>
            </div>
            <div class="projectdetails">
                <h3 class="projecttitle">${entry.fields.projectName}</h3>
                <p>${entry.fields.projectDescription}</p>
                <div class="buttonswrapper">
                    <a class="viewlivebutton" href="${entry.fields.liveProjectUrl}"><i
                            class="fas fa-rocket"></i>
                        View live project</a>
                    <a class="viewgithubbutton"
                        href="${entry.fields.githubProjectUrl}"><i
                            class="devicon-github-plain"></i> View on
                        GitHub</a>
                </div>
            </div>
        </div>`
        )
    }).join('')
    projectsWrapper.innerHTML = projectshtml;
}