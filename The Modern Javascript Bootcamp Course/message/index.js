const { hash } = window.location;
const message = atob(hash.replace('#', ''));
// MESSAGE ENCRYPTED ON THE LINK
if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    // SHOW MESSAGE ON H1
    document.querySelector('h1').innerText = message;
}
// GET FORM INPUT VALUE
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault(); // PREVENT THE BROWSER TO SEND BACKEND REQUESTS
    // HIDE AFTER SUBMIT
    document.querySelector('#message-form').classList.add('hide');
    // GET MESSAGE
    const messageInput = document.querySelector('#message-input');
    // ENCRYPT
    const encrypted = btoa(messageInput.value);
    // SHOW RESULS
    document.querySelector('#link-form').classList.remove('hide')
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});