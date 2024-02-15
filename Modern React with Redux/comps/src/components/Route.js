import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Route({ path, children }) {
    const { currentPath } = useContext(NavigationContext);

    if (path === currentPath) {
        return children;
    }
    // IF PATH & C.PATH ARENT EQUAL DONT RENDER ANYTHING
    return null;
}

export default Route;
