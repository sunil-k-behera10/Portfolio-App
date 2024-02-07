import React from 'react'

function Services() {
  return (
    <div className='px-4'>
      <h1  className='text-4xl font-bold bg-green-400'> What are Portfolio Management Services?</h1>
      <p className='text-justify py-2 bg-indigo-400 mt-2'>
     
        Investment portfolios usually consist of investments in a wide range of securities like stocks, bonds and cash equivalents. This combination depends on the investor's risk tolerance level, which affects the returns potential of the portfolio investments.

        But, establishing a strong investment can be challenging especially if you are an amateur investor. It requires extensive knowledge regarding the market and the securities, to calculate the RRR (Return Risk Ratio- a calculation of potential benefits against potential losses) accurately. This is where Portfolio Management Services or PMS come in.
        Once you opt for a PMS, a separate bank account and a Demat account (short for Dematerialized Account- an account that holds all the securities that you own in digital form) may be opened in your name. All investments must be made in your name, and the shares are held in your name in your Demat account. The bank account is also credited with any gains or dividend payouts from the investments.

        Your portfolio manager is given the power of attorney over this bank account and Demat account. However, you can access these accounts to check the status of your investments at any time.

        Unlike mutual funds where fund managers have the right to invest the fund however they want, provided they can meet the client's demand at the time of maturity, portfolio managers either offer suggestions or can be entirely responsible for the investments. Also, your portfolio manager has to give you a performance report at least every six months as per the guidelines of SEBI (Securities and Exchange Board of India).
      </p>
        <h1 className='text-2xl font-bold bg-yellow-400 mt-2'>
          Active vs Passive Management
        </h1>
        <p className=' text-justify py-2 bg-slate-200 mt-2'>Management of portfolios happens in two ways:</p>

        <h1 className='text-2xl font-bold bg-cyan-400 mt-2'>Active Investment Management:</h1>
        <p className=' bg-green-300 mt-2'>
          In this style, the primary objective is to beat the market index to generate higher returns for the investor. A specific index such as Nifty or Sensex is taken as the benchmark, and the investment managers make active decisions on the investments to outperform this market.

        </p>
        
        <h1 className='text-2xl font-bold bg-violet-400 mt-2'>Passive Investment Management:</h1>
        This style involves a passive style of decision making and investment tracking. The objective of this style is to match the performance of a particular index. The index could be a Nifty50 or BSE Sensex, and the investment managers increase or decrease the weightage of investments as per the index they follow.
      
    </div>
  )
}

export default Services