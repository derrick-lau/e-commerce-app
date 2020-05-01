import React from 'react'
import styles from './index.module.css'
import Review from '../Review';
import IreviewTable from '../../../abstractions/IreviewTable';


const ReviewTable: React.FC<IreviewTable> = ({reviews}) => {

    return (
            <section className={styles.products}>
                {reviews.map(({...props}) => (
                    <Review key={props.id} {...props}/>
                ))}
            </section>

    )
}



export default ReviewTable;
