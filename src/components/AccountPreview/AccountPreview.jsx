import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import PropTypes from 'prop-types'

import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './AccountPreview.module.scss';

function AccountPreview({ data={} }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.header)}>
                <Image className={clsx(styles.avatar)} src={data.avatar} alt={data.nickname} />
                <Button className={clsx(styles.followBtn)} primary>
                    Follow
                </Button>
            </div>
            <div className={clsx(styles.body)}>
                <p className={clsx(styles.nickname)}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />}
                </p>
                <p className={clsx(styles.name)}>{`${data.last_name} ${data.first_name}`}</p>
                <p className={clsx(styles.analytics)}>
                    <strong className={clsx(styles.value)}>
                        {data.followers_count >= 1000 ? `${data.followers_count / 1000}M` : data.followers_count}{' '}
                    </strong>
                    <span className={clsx(styles.label)}>Followers</span>
                    <strong className={clsx(styles.value)}>
                        {data.followings_count >= 1000 ? `${data.followings_count / 1000}M` : data.followings_count}{' '}
                    </strong>
                    <span className={clsx(styles.label)}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object
};

export default AccountPreview;
