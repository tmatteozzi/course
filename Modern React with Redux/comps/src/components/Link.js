import { useContext } from 'react';
import classNames from 'classnames';
import NavigationContext from '../context/navigation';

function Link({ to, children }) {
    const { navigate } = useContext(NavigationContext);

    const classes = classNames('text-blue-500');

    const handleClick = (event) => {
        // CTRL + LINK CLICK TO OPEN LINK ON A NEW TAB
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    };

    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>
    );
}

export default Link;
