import useNavigation from '../hooks/use-navigation';

function Route({ path, children }) {
    const { currentPath } = useNavigation();

    if (path === currentPath) {
        return children;
    }
    // IF PATH & C.PATH ARENT EQUAL DONT RENDER ANYTHING
    return null;
}

export default Route;
