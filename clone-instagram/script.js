const html = document.querySelector('html')
const checkbox = document.querySelector('#dk')

checkbox.addEventListener('change', () => {
    html.classList.toggle('dark-mode')
})