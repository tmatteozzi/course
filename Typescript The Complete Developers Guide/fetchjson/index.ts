import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// DEFINE TODO OBJECT
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// USE AXIOS TO MAKE A REQUEST TO THE URL
axios.get(url).then(response => {
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed);
});


// CONSOLE LOG TODOs
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished?: ${completed}
    `);
};