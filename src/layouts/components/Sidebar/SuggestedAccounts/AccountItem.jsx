import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import PropTypes from 'prop-types'

import AccountPreview from '~/components/AccountPreview';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/layouts/components/Popper';
import styles from './SuggestedAccounts.module.scss';

function AccountItem({ data = {} }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={clsx(styles.accountItem)}>
                    <Image className={clsx(styles.userIcon)} src={data.avatar} alt={data.nickname} />
                    <div className={clsx(styles.info)}>
                        <h4 className={clsx(styles.user)}>
                            <strong>
                                {data.nickname}{' '}
                                {data.check && <FontAwesomeIcon className={clsx(styles.tick)} icon={faCheckCircle} />}
                            </strong>
                        </h4>
                        <p className={clsx(styles.name)}>{`${data.last_name} ${data.first_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object
};
export default AccountItem;
