import clsx from 'clsx';
import styles from './HeaderOnly.module.scss';

import { Header } from '~/layouts/components';
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default HeaderOnly;
