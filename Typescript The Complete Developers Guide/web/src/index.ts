import { User, UserProps } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';

const user = User.buildUser({ name: 'NAME', age: 20 });

const root = document.getElementById('root');

if (root) {
    const userEdit = new UserEdit(root, user);
    userEdit.render();
    console.log(userEdit);
} else {
    throw new Error('Root element not found');
}

const users = new Collection(
    'http://localhost:3000/users',
    (json: UserProps) => {
        return User.buildUser(json);
    }
);

users.on('change', () => {
    const results = document.getElementById('results');
    if (results) {
        new UserList(results, users).render();
    }
});

users.fetch();
