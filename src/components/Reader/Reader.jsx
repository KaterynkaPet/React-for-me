import { useState, useEffect } from 'react';
import css from './Reader.module.css'
import Progress from '../Progress/Progress';

const getInitialIndex = () => {
    const savedIndex = localStorage.getItem('article-index');
    if (savedIndex !== null) {
        return JSON.parse(savedIndex);
    }
    
    return 0;
};


export default function Reader({items}) {
    const [index, setIndex] = useState(getInitialIndex);

    const handlePrev = () => {        
        setIndex(index - 1);
    };

    const handleNext = () => {
        setIndex(index + 1);
    };

    const isFirst = index === 0;
    const isLast = index === items.length - 1;
    const currentArticle = items[index];

    useEffect(() => {
localStorage.setItem('article-index', index)
    }, [index])
           
    return <div className={css.container}>
        <header className={css.header}>
            <div className={css.btnSection}>
                <button className={css.btn} onClick={handlePrev} disabled={isFirst}>Prev</button>
                <button className={css.btn} onClick={handleNext} disabled={isLast}>Next</button>
            </div>
            <Progress current={ index+1 } total={items.length} />
        </header>

        <article>
            <h2>{currentArticle.topic}</h2>
            <p>{currentArticle.text}</p>
        </article>
        </div>;
}