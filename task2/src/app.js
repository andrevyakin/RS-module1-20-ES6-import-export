export function initApp() {
    const divCookieConsent = document.querySelector(".cookie-consent")
    const button = document.querySelector(".cookie-consent__button");

    if (localStorage.alreadyClickedButton === 'true')
        divCookieConsent.classList.toggle('cookie-consent-hide');

    if (!localStorage.alreadyClickedButton)
        button.addEventListener("click", () => {
            divCookieConsent.classList.toggle('cookie-consent-hide');
            localStorage.setItem('alreadyClickedButton', 'true');
        })
}