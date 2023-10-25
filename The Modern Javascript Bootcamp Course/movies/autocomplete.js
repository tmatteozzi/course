const createAutoComplete = ( { root, renderOption, onOptionSelect, inputValue, fetchData } ) => {
    // HTML GENERATION
    root.innerHTML = `
        <label><b>Search</b></label> 
        <input class="input" />
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results"></div>
            </div>
        </div>
    `;
    // GET ELEMENTS
    const input = root.querySelector('input');
    const dropdown = root.querySelector('.dropdown');
    const resultsWrapper = root.querySelector('.dropdown-content');
    // ON INPUT DATA FETCH
    const onInput = async (event) => {
        // GET ITEMS
        const items = await fetchData(event.target.value);
        // IF THERE ARE NO ITEMS CLOSE THE DROPDOWN
        if(!items.length){
            dropdown.classList.remove('is-active');
            return;
        }
        // RESET DROPDOWN
        resultsWrapper.innerHTML = '';
        dropdown.classList.add('is-active');
        // ITEM DISPLAY
        for(let item of items) {
            const option = document.createElement('a');
            option.classList.add('dropdown-item');
            option.innerHTML = renderOption(item);
            // CLICKED ITEM
            option.addEventListener('click', () => {
                dropdown.classList.remove('is-active');
                input.value = inputValue(item);
                onOptionSelect(item);
            })
            resultsWrapper.appendChild(option);
        }
    };
    // INPUT FUNCTIONALITY
    input.addEventListener('input', debounce(onInput, 500));
    // CLOSE DROPDOWN
    document.addEventListener('click', (event) => {
        if(!root.contains(event.target)){
            dropdown.classList.remove('is-active');
        }
    });
};