import clsx from 'clsx';
import { HomeActiveIcon, HomeIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/assets/icons';
import { useState } from 'react';
import { useEffect } from 'react';

import Button from '~/components/Button';
import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu';
import config from '~/configs';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/layouts/components/Sidebar/SuggestedAccounts';
import * as userServices from '~/services/userServices';

function Sidebar() {
    const [user, setUser] = useState(true);
    const [suggestAccounts, setSuggestAccounts] = useState([]);
    useEffect(() => {
        userServices
            .getUser(1, 5)
            .then((data) => setSuggestAccounts(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <aside className={clsx(styles.wrapper)}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            {!user && (
                <div className={clsx(styles.loginBlock)}>
                    <p className={clsx(styles.desc)}>Log in to follow creators, like videos, and view comments.</p>
                    <Button outline full>
                        Log in
                    </Button>
                </div>
            )}
            <SuggestedAccounts title="Suggested accounts" data={suggestAccounts} />
            {user && <SuggestedAccounts title="Following accounts" data={suggestAccounts}/>}
        </aside>
    );
}

export default Sidebar;
