document.getElementById('lista').addEventListener('click', (e) => {
    if (e.target && e.target.matches('li.item')) {
        console.log('Click en. ' + e.target.textContent)
    }
})