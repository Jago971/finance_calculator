function Input( {changeHandler, text, value} ) {
    return (
        <div className='flex w-full justify-between'>
            <p className='p-2 self-center'>{text}</p>
            <div className='border-2 flex w-1/2'>
              {text != 'MONTH REPAYMENT' && <p className='bg-gray-200 p-2'>£</p>}
              <input type="number" className='w-full p-2' onChange={changeHandler} value={value} placeholder='0'/>
              <p className='bg-gray-200 p-2'>{text != 'MONTH REPAYMENT' ? '.00' : '%'}</p>
            </div>
        </div>
    )
}

export default Input;