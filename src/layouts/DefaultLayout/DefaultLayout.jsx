import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './DefaultLayout.module.scss';

import { Header, Sidebar, Content, Footer } from '~/layouts/components';

function DefaultLayout({ children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.container)}>
                <Sidebar />
                <Content>{children}</Content>
            </div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout;
