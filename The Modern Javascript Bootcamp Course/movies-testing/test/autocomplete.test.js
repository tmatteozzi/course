// HELPER FUNCTION
const waitFor = (selector) => {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            // SELECTOR APPEARED
            if(document.querySelector(selector)){
                clearInterval(interval);
                clearTimeout(timeout);
                resolve();
            };
        }, 30);
        // SELECTOR DID NOT APPEAR
         const timeout = setTimeout(() => {
            clearInterval(interval);
            reject();
        }, 2000);
    });
};

// FOR EVERY SINGLE TEST
beforeEach(() => {
    // RESET TARGET DIV
    document.querySelector('#target').innerHTML = '';
    // CREATE AUTOCOMPLETE FORM
    createAutoComplete({
        root: document.querySelector('#target'),
        fetchData() {
            return [
                { Title: 'Avengers' },
                { Title: 'Dark Knight' },
                { Title: 'Fast & Furious' }
            ];
        },
        renderOption(movie) {
            return movie.Title;
        }
    });
});

it('Dropdown starts closed', () => {
    // DROPDOWN SHOULD START CLOSED
    const dropdown = document.querySelector('.dropdown');
    expect(dropdown.className).not.to.include('is-active');
});

it('After searching, dropdown opens up', async () => {
    // FAKE INPUT EVENT
    const input = document.querySelector('input');
    input.value = 'avengers';
    input.dispatchEvent(new Event('input'));
    // WAIT INPUT DEBOUNCE
    await waitFor('.dropdown-item');
    // DROPDOWN SHOULD BE OPENED 
    const dropdown = document.querySelector('.dropdown');
    expect(dropdown.className).to.include('is-active');
});

it('After searching, display some results', async () => {
    // FAKE INPUT EVENT
    const input = document.querySelector('input');
    input.value = 'avengers';
    input.dispatchEvent(new Event('input'));
    // WAIT INPUT DEBOUNCE
    await waitFor('.dropdown-item');
    // GET ALL ELEMENTS
    const items = document.querySelectorAll('.dropdown-item');
    expect(items.length).to.equal(3);
});