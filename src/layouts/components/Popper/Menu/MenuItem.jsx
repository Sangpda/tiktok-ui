import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

function MenuItem({ data, onClick }) {
    return (
        <Button
            className={clsx(styles.menuItem, {
                [styles.separate]: data.separate,
            })}
            leftIcon={data.leftIcon}
            to={data.to}
            rightIcon={data.rightIcon}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
}
export default MenuItem;
