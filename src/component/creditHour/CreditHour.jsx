import React from 'react';

const CreditHour = ({addCredit,remaining,total}) => {
    console.log(addCredit)
    return (
        <div>
            <div className="px-4  w-56 rounded-lg bg-base-100 ml-5 shadow-xl">
             <h2 className="my-3 card-title text-start text-blue-800 font-bold">Credit Hour Remaining:{remaining} hr</h2>
        <div className=" items-center text-center">
         
          <div className='border border-solid border-slate-300'></div>
          <div className='my-3 text-start'>
          <p className='font-bold text-lg'>Course Name</p>
        
          {
            addCredit.map((add) =>(      
            <>
            <ul>
            <li className='text-slate-500' key={add.id}> {add.id}. {add.name}</li>
            </ul>
            </>
            ))
          }
          
          </div>
          <div className='border border-solid border-slate-300'></div>
         <p className='mt-3 pb-5 text-start font-bold'>Total Credit Hour:{total}</p>
        </div>
      </div>
        </div>
      
    );
};

export default CreditHour;