import React from 'react'

const MainPage = () => {
  return (
    <div className='lg:mx-32'>
      <h1 className='  text-5xl font-bold text-green-600'>Currency Convert Today</h1>
      <p className=' opacity-40 py-16 text-justify'>"Currency Convert Today" could be a service or tool designed to provide real-time exchange rate conversions for various currencies. It allows users to quickly check the value of one currency in relation to another, making it easier for individuals and businesses to manage international transactions, travel expenses, or investments. By offering up-to-date rates, "Currency Convert Today" ensures accurate conversions based on current market conditions, giving users a reliable resource for financial planning and decision-making in a global economy.</p>
 <div>
    <section>
        
<form>
    <div class="  grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <input type="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        
  

    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

</form>

    </section>
    </div>  
    </div>
  )
}

export default MainPage 
