import clsx from 'clsx'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss'

function MenuItem({title, icon, activeIcon, to}) {
    return (
        <NavLink to={to} className={(nav) => clsx(styles.menuItem, {[styles.active]: nav.isActive})}>
            <span className={clsx(styles.icon)}>{icon}</span>
            <span className={clsx(styles.activeIcon)}>{activeIcon}</span>
            <span className={clsx(styles.title)}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
}

export default MenuItem;