import { useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBooksContext from './hooks/use-books-context';

function App() {
    // GET FETCH BOOKS FROM CONTEXT
    const { fetchBooks } = useBooksContext();

    // CALL FETCHBOOKS AS SOON AS THE APP STARTS
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

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
