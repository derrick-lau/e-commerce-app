import React from 'react'
import styles from './index.module.css'
import Review from '../Review';
import IreviewTable from '../../../abstractions/IreviewTable';


const ReviewTable: React.FC<IreviewTable> = ({reviews}) => {

    return (
        <section className={styles.ReviewTable}>
            <p style={{fontSize:"5.5vmin"}}>Product reviews</p>
            {reviews&& reviews.length > 0?
                reviews.map(({...props}) => (
                    <Review key={props.id} {...props}/>
                ))
            :
                <>NO REVIEWS FOUND</>
            }
        </section>
    )
}



export default ReviewTable;
