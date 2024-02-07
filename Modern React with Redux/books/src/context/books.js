import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    // STATE
    const [books, setBooks] = useState([]);

    // APP STARTING FUNCTION TO GET ALL BOOKS (USECALLBACK TO MAKE IT STABLE)
    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }, []);

    // HANDLERS
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        setBooks([...books, response.data]);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

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

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        deleteBookById,
        editBookById
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;
