document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const { value } = document.querySelector('input');
    const header = document.querySelector('h1');
    // EMAIL VALIDATION
    if(value.includes('@')){
        header.innerHTML = 'Valid email';
    } else {
        header.innerHTML = 'Invalid email';
    }
});
