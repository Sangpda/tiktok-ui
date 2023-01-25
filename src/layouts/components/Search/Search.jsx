import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/layouts/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/assets/icons';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchServices';

function Search() {
    const [showResults, setShowResults] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showLoading, setShowLoading] = useState(false);
    const debounceValue = useDebounce(inputValue, 600);

    const inputRef = useRef();
    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResults([]);
            return;
        }
        const fetchAPI = async (q, type) => {
            setShowLoading(true);
            const results = await searchServices.search(q, type);
            setSearchResults(results);
            setShowLoading(false);
        };
        fetchAPI(debounceValue);
    }, [debounceValue]);
    const onChangeInputValue = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setInputValue(searchValue);
        }
    };
    const onClickClearBtn = () => {
        setInputValue('');
        inputRef.current.focus();
        setSearchResults([]);
    };
    const onClickAccountItem = () => {
        setSearchResults([]);
        setInputValue('');
    };
    return (
        //fix Tippy warning by div element parent
        <div>
            <HeadlessTippy
                interactive
                visible={showResults && searchResults.length > 0}
                render={(attrs) => (
                    <div className={clsx(styles.searchResult)} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={clsx(styles.searchTitle)}>Accounts</h4>
                            {searchResults.map((result) => (
                                <AccountItem key={result.id} data={result} onClick={onClickAccountItem} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => {
                    setShowResults(false);
                }}
            >
                <div className={clsx(styles.search)}>
                    <input
                        ref={inputRef}
                        value={inputValue}
                        placeholder="Search account or video"
                        spellCheck={false}
                        onChange={onChangeInputValue}
                        onFocus={() => {
                            setShowResults(true);
                        }}
                    />
                    {!!inputValue && !showLoading && (
                        <button className={clsx(styles.clear)} onClick={onClickClearBtn}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {showLoading && <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} />}
                    <button className={clsx(styles.searchBtn)} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
