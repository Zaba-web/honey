const THEME = 'theme';
const LIGHT_THEME = 'theme-white';
const DARK_TEHME = 'theme-dark';

const NOTIFY_HOUR = 'hour';
const NOTIFY_MINUTE = 'minute';

const container = document.querySelector('body');
const showMore = document.querySelector('.show-more');
const view = document.querySelector('.view');
const viewFrame = view.querySelector('iframe');
const photoContainer = document.querySelector('.photo-container');
const mapContainer = document.querySelector('.map-container');
const notificationContainer = document.querySelector('.notification-popup');

const closeNotification = document.querySelector('.close-notification-popup');
const showNotification = document.querySelector('.notification-trigger');

const hourSelector = document.querySelector("#hour")
const minuteSelector = document.querySelector("#minute")

const closeNotificationNoSave = document.querySelector(".close-notification-popup-no-save")

const ep = "https://chhoney64622.corsa.chost.com.ua";

function setTheme(theme) {
    localStorage.setItem(THEME, theme);
    container.classList.remove(LIGHT_THEME)
    container.classList.remove(DARK_TEHME)
    container.classList.add(theme)
} 

function openView(e) {
    const target = e.target

    if (target.dataset.viewLink) {
        viewFrame.src = target.dataset.viewLink
        view.classList.add('active')
    }
}

function saveNotificationTime(hour, minute) {
    localStorage.setItem(NOTIFY_HOUR, hour);
    localStorage.setItem(NOTIFY_MINUTE, minute);

    notificationContainer.classList.remove('active')
}

if (!localStorage.getItem(THEME)) {
    setTheme(LIGHT_THEME)
} else {
    setTheme(localStorage.getItem(THEME))
}

if (localStorage.getItem(NOTIFY_HOUR)) {
    hourSelector.value = localStorage.getItem(NOTIFY_HOUR)
}

if (localStorage.getItem(NOTIFY_MINUTE)) {
    minuteSelector.value = localStorage.getItem(NOTIFY_MINUTE)
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
    openView(e)
});

mapContainer.addEventListener("click", e => {
    openView(e)
})

closeNotification.addEventListener("click", () => {
    saveNotificationTime(hourSelector.value, minuteSelector.value)
})

showNotification.addEventListener("click", () => {
    notificationContainer.classList.add('active');
})

closeNotificationNoSave.addEventListener("click", () => {
    notificationContainer.classList.remove('active');
})

fetch(ep)
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));