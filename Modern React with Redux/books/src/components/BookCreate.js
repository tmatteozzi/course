import { useState } from 'react';

function BookCreate({ onCreate }) {
    // STATE
    const [title, setTitle] = useState('');

    // HANDLERS
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        // EMPTY OUT TEXT INPUT
        setTitle('');
    };

    // JSX RETURN
    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    className="input"
                    value={title}
                    onChange={handleChange}
                />
                <button className="button">Create</button>
            </form>
        </div>
    );
}

export default BookCreate;
