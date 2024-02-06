import { useContext, useState } from 'react';
import BooksContext from '../context/books';

function BookCreate() {
    // GET CREATE BOOK FROM CONTEXT
    const { createBook } = useContext(BooksContext);

    // STATE
    const [title, setTitle] = useState('');

    // HANDLERS
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
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
