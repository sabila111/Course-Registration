import React from 'react';

const CreditHour = ({addCredit}) => {
    console.log(addCredit)
    return (
        <div>
            <div className="px-4 py-5 w-56 rounded-lg bg-base-100 ml-5 shadow-xl">
             <h2 className="my-3 card-title text-start">Credit Hour Remaining: {addCredit.length} </h2>
        <div className=" items-center text-center">
         
          <div className='border border-solid border-slate-300'></div>
          <div className='my-3 text-start'>
          <p className='font-bold text-lg'>Course Name</p>
          {
            addCredit.map((add) =>(
                
            <>
            <li>{add.name}</li>
            </>
        
            ))
          }
          </div>
          <div className='border border-solid border-slate-300'></div>
         <p className='my-3'>Total Credit Hour: {addCredit.credit}</p>
        </div>
      </div>
        </div>
      
    );
};

export default CreditHour;