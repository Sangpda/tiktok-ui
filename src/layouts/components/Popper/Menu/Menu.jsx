import HeadlessTippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Wrapper from '~/layouts/components/Popper/Wrapper';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

function Menu({ children, items = [], hideOnClick = false, onChange = () => {} }) {
    const [menuItemsState, setMenuItemsState] = useState([{ data: items }]);
    const currentData = menuItemsState[menuItemsState.length - 1];

    const renderItem = () =>
        currentData.data.map((item, index) => {
            const isParent = !!item.children;
            const onClick = () => {
                if (isParent) {
                    setMenuItemsState((priv) => [...priv, item.children]);
                } else {
                    onChange(item);
                }
            };
            return <MenuItem key={index} data={item} onClick={onClick} />;
        });
    const handleBack = () => {
        setMenuItemsState((priv) => priv.slice(0, -1));
    };
    const handleHide = () => setMenuItemsState((priv) => priv.slice(0, 1));
    return (
        <HeadlessTippy
            // visible
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={clsx(styles.menuList)} tabIndex="-1" {...attrs}>
                    <Wrapper className={clsx(styles.menuPopper)}>
                        {menuItemsState.length > 1 && <Header title={currentData.title} onBack={handleBack} />}
                        <div className={clsx(styles.menuBody)}>{renderItem()}</div>
                    </Wrapper>
                </div>
            )}
            onHide={handleHide}
        >
            {children}
        </HeadlessTippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
