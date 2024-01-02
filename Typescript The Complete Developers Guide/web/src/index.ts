import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'NAME', age: 20 });

const root = document.getElementById('root');

if (root) {
    const userform = new UserForm(root, user);
    userform.render();
} else {
    throw new Error('Root element not found');
}
