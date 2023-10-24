
import { useState } from 'react'
import './App.css'
import Course from './component/Course/Course'
import CreditHour from './component/creditHour/CreditHour'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
 
   const[addCredit, setAddCredit] = useState([])
   const [total, setTotal] = useState(0)
   const [remaining, setRemaining]= useState(0)

  const handleClick= credits=>{

    const isExit = addCredit.find((item) => item.id == credits.id)
    let count =credits.credit
     if(isExit){
      return toast('Already Added This Course')
     }
     else{
      addCredit.forEach((item)=> {
        count = count + item.credit
      })
      const totalRemaining = 20- count
     

     if(total > 16){
      toast("Can't add more then 20 credit")
     }
     else{
      setTotal(count)
      setRemaining(totalRemaining)
      setAddCredit([...addCredit, credits])
     }

     
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
      <CreditHour addCredit={addCredit} remaining={remaining} total={total}></CreditHour>
      </div>
         
       </div>
       <ToastContainer></ToastContainer>
   </div>
  )
}

export default App
