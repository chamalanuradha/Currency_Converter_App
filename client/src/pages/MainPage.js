import React, {useState} from 'react'

const MainPage = () => {

    const [date, setDate] = useState('');
    const [sourceCurrency, setSourseCurrency] = useState('');
    const [targetCurrency, setTargetCurrency] = useState('');
    const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
    const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            date,
            sourceCurrency,
            targetCurrency,
            amountInSourceCurrency,
        )
    }
  return (
    <div>
      <h1 className='lg:mx-32  text-5xl font-bold text-green-600'>Currency Convert Today</h1>
      <p className='lg:mx-32 opacity-40 py-16 text-justify'>"Currency Convert Today" could be a service or tool designed to provide real-time exchange rate conversions for various currencies. It allows users to quickly check the value of one currency in relation to another, making it easier for individuals and businesses to manage international transactions, travel expenses, or investments. By offering up-to-date rates, "Currency Convert Today" ensures accurate conversions based on current market conditions, giving users a reliable resource for financial planning and decision-making in a global economy.</p>
      <div className='mt-5 flex items-center justify-center flex-col'>
      <section className='w-full lg:w-1/2'> 
<form onSubmit={handleSubmit}>
        <div className="mb-4">
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <input type="date" 
            name={date}  
            id={date} 
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"   
            required 
            onChange={(e)=>setDate(e.target.value)}
            />
        </div>
        <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
           <select  
           name={sourceCurrency}
           id={sourceCurrency}
           className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
           onChange={(e)=>setSourseCurrency(e.target.value)}
           >
            <option value="">Select Source Currency</option>
           </select>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
            <select  
            name={targetCurrency}  
            id={targetCurrency} 
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            onChange={(e)=>setTargetCurrency(e.target.value)}
            >
            <option value="">Select Target Currency</option>
           </select>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount In Source Currency</label>
            <input 
            type="number" 
            name={amountInSourceCurrency}  
            id={amountInSourceCurrency} 
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
            placeholder="Amount in source currency....."  
            required 
            onChange={(e)=> setAmountInSourceCurrency(e.target.value)}
            />
        </div>

    </div>
    <button className="text-white bg-green-700 hover:bg-green-800 py-2 px-4 rounded-md">Convert to Target Currency</button>
</form>

    </section>
    </div>  
    </div>
  )
}

export default MainPage 
