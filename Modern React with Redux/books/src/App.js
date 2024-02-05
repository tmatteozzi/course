import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
    // STATE
    const [books, setBooks] = useState([]);

    // APP STARTING FUNCTION TO GET ALL BOOKS
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };

    // CALL FETCHBOOKS AS SOON AS THE APP STARTS
    useEffect(() => {
        fetchBooks();
    }, []);

    // HANDLERS
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        setBooks([...books, response.data]);
    };

    const deleteBookById = async (id) => {
        const response = await axios.delete(
            `http://localhost:3001/books/${id}`
        );

        setBooks(
            books.filter((book) => {
                return book.id !== id;
            })
        );
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        setBooks(
            books.map((book) => {
                if (book.id === id) {
                    return { ...book, ...response.data };
                }
                return book;
            })
        );
    };

    // JSX RETURN
    return (
        <div className="app">
            <h1>Reading list</h1>
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
