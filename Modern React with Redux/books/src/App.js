import { useContext, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
    const { fetchBooks } = useContext(BooksContext);

    // CALL FETCHBOOKS AS SOON AS THE APP STARTS
    useEffect(() => {
        fetchBooks();
    }, []);

    // JSX RETURN
    return (
        <div className="app">
            <h1>Reading list</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;
