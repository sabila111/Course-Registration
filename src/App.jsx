
import './App.css'
import Course from './component/Course/Course'
import CreditHour from './component/creditHour/CreditHour'


function App() {
 

  return (
   <div className='max-w-6xl mx-auto '>
     <div className='flex justify-between'>
      
      <Course></Course>
      <CreditHour></CreditHour>
         
       </div>
   </div>
  )
}

export default App
