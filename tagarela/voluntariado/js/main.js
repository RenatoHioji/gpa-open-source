async function loadComponent(selector, path) {
    const container = document.querySelector(selector)
    const response = await fetch(path)
    const html = await response.text()
    container.innerHTML = html
}