import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

function SuggestedAccounts({ title, data=[] }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.title)}>{title}</p>
            {data.map((data) => (
                <AccountItem key={data.id} data={data} />
            ))}

            <p className={clsx(styles.moreBtn)}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array
};

export default SuggestedAccounts;
