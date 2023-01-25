import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Image from '~/components/Image';

import styles from './AccountItem.module.scss';
function AccountItem({data, onClick}) {
    return ( 
        <Link to={`/user/:${data.nickname}`} className={clsx(styles.wrapper)} onClick={onClick}>
            <Image
                className={clsx(styles.avatar)}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={clsx(styles.info)}>
                <h4 className={clsx(styles.name)}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />}
                </h4>
                <span className={clsx(styles.username)}>{data.nickname}</span>
            </div>
        </Link>
     );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired, 
    onClick: PropTypes.func,
}
export default AccountItem;