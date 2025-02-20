const THEME = 'theme';
const LIGHT_THEME = 'theme-white';
const DARK_TEHME = 'theme-dark';

const container = document.querySelector('main');
const showMore = document.querySelector('.show-more');
const view = document.querySelector('.view');
const viewFrame = view.querySelector('iframe');
const photoContainer = document.querySelector('.photo-container');

function setTheme(theme) {
    localStorage.setItem(THEME, theme);
    container.classList.remove(LIGHT_THEME)
    container.classList.remove(DARK_TEHME)
    container.classList.add(theme)
} 

if (!localStorage.getItem(THEME)) {
    setTheme(LIGHT_THEME)
} else {
    setTheme(localStorage.getItem(THEME))
}

const toggle = document.querySelector(".toggle");
const closeView = document.querySelector(".view .close")


toggle.addEventListener("click", () => {
    if (localStorage.getItem(THEME) == LIGHT_THEME) {
        setTheme(DARK_TEHME)
    } else {
        setTheme(LIGHT_THEME)
    }
});

showMore.addEventListener("click", () => {
    document.querySelector(".minimized").classList.remove("minimized")
    showMore.remove()
});

closeView.addEventListener("click", () => {
    view.classList.remove('active')
});

photoContainer.addEventListener("click", e => {
    const target = e.target

    if (target.dataset.viewLink) {
        viewFrame.src = target.dataset.viewLink
        view.classList.add('active')
    }
})