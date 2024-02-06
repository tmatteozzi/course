import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ book, onSubmit }) {
    // GET EDIT FROM CONTEXT
    const { editBookById } = useBooksContext();

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
