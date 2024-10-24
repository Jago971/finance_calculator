import { useEffect, useState } from 'react'

function App() {

  const [submitted, setSubmitted] = useState(false)
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')

  function handleChange1(event) {
    let min = 0;
    let max = 8000;
    let value = event.target.value
    value = value == 0 ? '' : value
    if(value !== '') {
      value = (Math.max(Number(min), Math.min(Number(max), Number(value))))
      setInput1(value)
    } else {
      setInput1('')
    }
  }

  function handleChange2(event) {
    let min = 0;
    let max = 100000;
    let value = event.target.value
    value = value == 0 ? '' : value
    if(value !== '') {
      value = (Math.max(Number(min), Math.min(Number(max), Number(value))))
      setInput2(value)
    } else {
      setInput2('')
    }
  }

  function handleChange3(event) {
    let min = 0;
    let max = 100;
    let value = event.target.value
    value = value == 0 ? '' : value
    if(value !== '') {
      value = (Math.max(Number(min), Math.min(Number(max), Number(value))))
      setInput3(value)
    } else {
      setInput3('')
    }
  }

  function button() {
    if (!input1) {
      alert("please enter a loan amount")
    } else if (!input2) {
      alert("please enter your annual salary")
    } else if (!input3) {
      alert("please enter a percentage")
    } else if(submitted) {
      setInput1('')
      setInput2('')
      setInput3('')
      setSubmitted(!submitted)
    } else {
      setSubmitted(!submitted)
    }
  }
  
  function renderContent() {
    if(!submitted) {
      return (
        <>
        <div className='flex w-full justify-between'>
            <p className='p-2 self-center'>LOAN AMOUNT</p>
            <div className='border-2 flex w-1/2'>
              <p className='bg-gray-200 p-2'>£</p>
              <input type="number" className='w-full p-2' onChange={handleChange1} value={input1} placeholder='0'/>
              <p className='bg-gray-200 p-2'>.00</p>
            </div>
          </div>

          <div className='flex w-full justify-between'>
            <p className='p-2 self-center'>ANNUAL INCOME</p>
            <div className='border-2 flex w-1/2'>
              <p className='bg-gray-200 p-2'>£</p>
              <input type="number" className='w-full p-2' onChange={handleChange2} value={input2} placeholder='0'/>
              <p className='bg-gray-200 p-2'>.00</p>
            </div>
          </div>

          <div className='flex w-full justify-between'>
            <p className='p-2 self-center'>MONTH REPAYMENT</p>
            <div className='border-2 flex w-1/2'>
              <input type="number" className='w-full p-2' onChange={handleChange3} value={input3} placeholder='0'/>
              <p className='bg-gray-200 p-2'>%</p>
            </div>
          </div>
          </>
      )
    } else {
      let loan = Number(input1);
      let admin = input1*0.05;
      let fees = loan >= 7200 ? 1000 : loan >= 6400 ? 500 : 0;
      let total = loan + admin + fees
      let salary = Number(input2);
      let percentage = input3;
      let monthsToPay = Math.ceil(total / (salary * percentage / 100 / 12))
      let finalPayment = (total % (salary * percentage / 100 / 12)).toFixed(2)
      return (
        <>
        <p>borrow-amount: <span className='font-bold'>£{loan.toFixed(2)}</span></p>
        {fees ? (<p>fees: <span className='font-bold'>£{fees.toFixed(2)}</span></p>) : ''}
        <p>admin:  <span className='font-bold'>£{admin.toFixed(2)}</span></p>
        <p>total:  <span className='font-bold'>£{total.toFixed(2)}</span></p>
        <p>time to pay back:  <span className='font-bold'>{Math.floor(monthsToPay/12)} years and {monthsToPay%12} months</span></p>
        {finalPayment ? (<p>final payment:  <span className='font-bold'>£{finalPayment}</span></p>) : ''}
        </>
      )
    }
  }

   return (
    <div className='h-screen w-screen flex items-center bg-gray-200 justify-center'>
      <div className='h-3/4 w-3/4 max-w-md bg-white rounded-xl shadow-xl flex flex-col p-4'>
        <div className='bg-gray-500 h-1/3 rounded-md p-4 flex flex-col justify-between text-white'>
        <p>Maximum loan - £8000</p>
        <p>Loans greater than £6400 - £500 additonal charge</p>
        <p>Loans greater than £7200 - £1000 additonal charge</p>
        <p>Admin charge - 5%</p>
        </div>
        <div className='grow flex flex-col justify-evenly'>
          {renderContent()}
        </div>
        <button onClick={button} className='w-full p-2 bg-gray-200 rounded-md text-gray-500 text-xl'>{!submitted ? 'SUBMIT' : 'RESET'}</button>
      </div>
    </div>
   )
}
export default App
