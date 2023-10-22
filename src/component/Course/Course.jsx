import React, { useEffect, useState } from 'react';
import Credit from '../credit/Credit';


const Course = () => {

const [credit, setCredit] = useState([]);

useEffect(() => {
    fetch('./fake.json')
    .then(res => res.json())
    .then(data => setCredit(data))
},[])

    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                credit.map(credits =><Credit key={credit} credits={credits}></Credit> )
            }
        </div>
    );
};

export default Course;