import React, { useEffect, useState } from 'react';
import Credit from '../credit/Credit';


const Course = ({handleClick}) => {

const [cridit, setCredit] = useState([]);

useEffect(() => {
    fetch('./fake.json')
    .then(res => res.json())
    .then(data => setCredit(data))
},[])

    return (
    
       
         <div className='grid grid-cols-3 gap-10'>
            
            {
                cridit.map(credits =><Credit key={credits.id} credits={credits} handleClick={handleClick}></Credit> )
            }
        </div>

    );
};

export default Course;