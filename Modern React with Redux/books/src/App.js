import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    // STATE
    const [books, setBooks] = useState([]);

    // HANDLERS
    const createBook = (title) => {
        setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
    };

    const deleteBookById = (id) => {
        setBooks(
            books.filter((book) => {
                return book.id !== id;
            })
        );
    };

    const editBookById = (id, newTitle) => {
        setBooks(
            books.map((book) => {
                if (book.id === id) {
                    return { ...book, title: newTitle };
                }
                return book;
            })
        );
    };

    // JSX RETURN
    return (
        <div className="app">
            <BookList
                books={books}
                onDelete={deleteBookById}
                onEdit={editBookById}
            />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
