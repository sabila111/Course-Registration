
import { useState } from 'react'
import './App.css'
import Course from './component/Course/Course'
import CreditHour from './component/creditHour/CreditHour'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
 
   const[addCredit, setAddCredit] = useState([])

  const handleClick= credits=>{
    
    const isExit = addCredit.find((item) => item.id == credits.id)
     if(isExit){
      return toast('Already Added This Course')
     }
     else{
      setAddCredit([...addCredit, credits])
     }
   
  }
  // console.log(setAddCredit)

  return (
   <div>
    <h2 className='font-bold text-center text-4xl mt-10'>Course Registration</h2>
     <div className='flex justify-between gap-5'>
      
      <div>
      <Course handleClick={handleClick}></Course>
      </div>
      <div>
      <CreditHour addCredit={addCredit}></CreditHour>
      </div>
         
       </div>
       <ToastContainer></ToastContainer>
   </div>
  )
}

export default App
