import React from 'react';

const CreditHour = ({addCredit}) => {
    console.log(addCredit)
    return (
        <div>
            <div className="px-4  w-56 rounded-lg bg-base-100 ml-5 shadow-xl">
             <h2 className="my-3 card-title text-start text-blue-800 font-bold">Credit Hour Remaining: {addCredit.length} </h2>
        <div className=" items-center text-center">
         
          <div className='border border-solid border-slate-300'></div>
          <div className='my-3 text-start'>
          <p className='font-bold text-lg'>Course Name</p>
        
          {
            addCredit.map((add) =>(      
            <>
            <ul>
            <li className='text-slate-500'>{add.id}. {add.name}</li>
            </ul>
            </>
            ))
          }
          
          </div>
          <div className='border border-solid border-slate-300'></div>
         <p className='my-3'>Total Credit Hour: {}</p>
        </div>
      </div>
        </div>
      
    );
};

export default CreditHour;