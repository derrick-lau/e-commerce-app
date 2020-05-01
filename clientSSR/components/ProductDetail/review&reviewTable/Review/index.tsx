import React from 'react'
import Ireview from '../../../abstractions/Ireview';

const Review: React.FC<Ireview> = ({rate, content}) => {

    return (
        <div>
            <p>{rate}</p>
            <p>{content}</p>
        </div>
    ) 
}



export default Review;
