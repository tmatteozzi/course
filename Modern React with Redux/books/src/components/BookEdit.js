import { useState } from 'react';
import { useContext } from 'react';
import BooksContext from '../context/books';

function BookEdit({ book, onSubmit }) {
    // GET EDIT FROM CONTEXT
    const { editBookById } = useContext(BooksContext);

    // STATE
    const [title, setTitle] = useState(book.title);

    // HANDLERS
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // CLOSE THE FORM
        onSubmit();
        // EDIT
        editBookById(book.id, title);
    };

    // JSX RETURN
    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input
                className="input"
                value={title}
                onChange={handleChange}
            ></input>
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;
