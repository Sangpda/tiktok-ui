import clsx from 'clsx'
import styles from './Content.module.scss'


function Content({children}) {
    return <div className={clsx(styles.wrapper)}>
        {children}
        </div>;
}

export default Content;