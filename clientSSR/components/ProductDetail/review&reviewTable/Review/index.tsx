import React from 'react'
import Ireview from '../../../abstractions/Ireview';
import styles from './index.module.css'

const Review: React.FC<Ireview> = ({rate, content, name}) => {

    return (
        <div className={styles.review}>
            <p>User: {name}</p>
            <p>Rate: {rate}/5</p>
            <p>Comment: {content}</p>
        </div>
    ) 
}



export default Review;
