/* eslint-disable no-lone-blocks */
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/layouts/components/Popper/Menu';
import { USER_MENU, MENU_ITEMS } from '~/constants';
import { InboxIcon, MessageIcon, UploadIcon } from '~/assets/icons';
import Image from '~/components/Image';
import userIcon from '~/assets/images/userIcon.png';
import Search from '~/layouts/components/Search';
import config from '~/configs';

function Header() {
    const currentUser = true;

    const handleOnChange = (item) => {
        switch (item.type) {
            case 'language':
                {
                    console.log(`Cho xu ly chuyen doi ngon ngu`);
                }
                break;
            default:
        }
    };
    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <Link to={config.routes.home} className={clsx(styles.logoLink)}>
                    <img src={images.logo} alt="logo" />
                </Link>
                <Search />
                <div className={clsx(styles.actions)}>
                    {currentUser ? (
                        <>
                            {/* <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={clsx(styles.actionBtn)}>
                                    <UploadIcon />
                                </button>
                            </Tippy> */}
                            <Button className={clsx(styles.uploadBtn)} leftIcon={<FontAwesomeIcon icon={faPlusSquare}/>} text>Upload</Button>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={clsx(styles.actionBtn)}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={clsx(styles.actionBtn)}>
                                    <InboxIcon />
                                    <span className={clsx(styles.badge)}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlusSquare} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleOnChange}>
                        {currentUser ? (
                            <Image className={clsx(styles.userAvatar)} src={userIcon} alt="Nguyen Van A" />
                        ) : (
                            <button className={clsx(styles.menuBtn)}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
