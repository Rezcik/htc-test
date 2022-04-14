import React, {useEffect, useRef, useState} from "react";
import styles from './pagination.module.css';
import { ReactComponent as Arrow } from '../../assets/icon/arrow.svg';
import classNames from "classnames";

export function Pagination({data, setCurrentPage, currentPage}) {
    const [active, setActive] = useState(1);
    const [disabled, setDisabled] = useState(false);
    let currentPageRef = useRef(currentPage);

    useEffect(() => {
        if(active === 1) {
            setDisabled(true)
        }
        if (active === data.info?.pages) {
            setDisabled(true)
        }
        else {setDisabled(false)}
    });

    return (
        <div className={styles.pagination}>
            <MoveButton style={styles.prev}
                        setCurrentPage={setCurrentPage}
                        active={active - 1}
                        setActive={setActive}
                        text={'Предыдущая'}
                        url={data.info?.prev}
                        disabled={disabled}
            />

            <div className={styles.pages}>
                <NumberButtons pages={data.info?.pages}
                               currentPageRef={currentPageRef}
                               setCurrentPage={setCurrentPage}
                               active={active}
                               setActive={setActive}
                />
            </div>

            <MoveButton style={styles.next}
                        setCurrentPage={setCurrentPage}
                        active={active + 1}
                        setActive={setActive}
                        text={'Следующая'}
                        url={data.info?.next}
                        disabled={disabled}
            />
        </div>
    );
}

function NumberButtons({pages, setCurrentPage, currentPageRef, active, setActive}) {
    let pageButtons = [];
    let prev = 3;
    let next = 2;
    let moveLeft;
    let moveRight;
    for (let num = 1; num <= pages; num++) {
        pageButtons.push(
            <button key={num}
                    className={classNames((active === num) ? styles.active : '', styles.numberButton)}
                    onClick={() => {
                        setCurrentPage(`${currentPageRef.current}page=${num}`);
                        setActive(num);
                    }}>
                {num}
            </button>
        )
    }
    if (active <= 3) {
        moveLeft = 0;
        moveRight = 5;
    }
    if (active >= pages - 2) {
        moveLeft = pages - 5;
        moveRight = pages;
    }
    if(active > 3 && active < pages - next) {
        moveLeft = active - prev;
        moveRight = active + next;
    }
    return (
        pageButtons.slice(moveLeft, moveRight)
    );
}

function MoveButton({url, style, setCurrentPage, setActive, active, text}) {
    const [disabled, setDisabled] = useState(false);
    useEffect(() => {
        if(url === null) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    });
    return (
        <button className={classNames(disabled? style.disabled : '', style)}
                disabled={disabled}
                onClick={() => {
                    setCurrentPage(url);
                    setActive(active);
                }}>
            <span>
                {text}
            </span>
            <Arrow/>
        </button>
    );
}
