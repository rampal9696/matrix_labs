import React from 'react'
import Canine_master from '../images/canine_master.png'
import Canine_master1 from '../images/canine_master1.png'
import come_soon from '../images/come_soon.png'
import Rewards from '../images/chest.png'

const CanineMaster = () => {
  return (
    <section className='main'>
       <div className='gray-bg'>
         

        <div className='grey-bg-left'>
            
            <img src={Canine_master1} alt='canine-master' className='left-canine-master'/> 
 
            <div className='grey-bg-left-content text-align-center'>
              <div className='btn-wrapper text-align-center'>
               <button className='btn text-align-center white-color'>
               <div className='before-div'></div>
               <i className="fa fa-shopping-cart"></i>Buy Now
               <div className='after-div'></div>
               </button><br/> 
               <button className='btn text-align-center white-color'>
               <div className='before-div'></div>
               <i className="fa fa-pie-chart"></i>Chat
               <div className='after-div'></div>
               </button><br/> 
               <button className='btn text-align-center white-color'>
               <div className='before-div'></div>
               <i className="fa fa-file-contract"></i>Contract
               <div className='after-div'></div>
               </button><br/> 
               </div>
               
               <p className='text-align-center white-color'>Tokenomics</p>
             
             </div>
 
             <div className='container'>
                  <div className='rewards-wrapper'>
                  <div className='rewards'>
                   <div className='reward-img-div text-align-center'>
                     <img src={Rewards} alt='rewards' /> 
                     <p className='text-align-center white-color'>10% <span> team lock</span></p>
                   </div>
                   <div className='reward-img-div text-align-center'>
                     <img src={Rewards} alt='rewards' /> 
                     <p className='text-align-center white-color'>20% <span> staking rewards</span></p>
                   </div>
                   <div className='reward-img-div text-align-center'>
                     <img src={Rewards} alt='rewards' /> 
                     <p className='text-align-center white-color'>30% <span> liquidity</span></p>
                   </div>
                   <div className='reward-img-div text-align-center'>
                     <img src={Rewards} alt='rewards' /> 
                     <p className='text-align-center white-color'>40% <span> fair launch</span></p>
                   </div>
                  </div>
                   
                  </div>
                  <div className='footer-content'>
                       <p className='text-align-center p-text white-color'>tax</p>
                       <div className='footer-inner-text'>
                         <div className='left-div text-align-center'>
                             <h1 className='text-align-center '>3% Buy Tax</h1>
                             <h2 className='text-align-center white-color'> 2% Reserve </h2>
                             <h3 className='text-align-center white-color'>1% Burn</h3>
                         </div>
 
                         <hr></hr>
 
                         <div className='right-div text-align-center'>
                             <h1 className='text-align-center'>7% Sell Tax</h1>
                              <h2 className='text-align-center white-color'>6% Marketing</h2>
                              <h3 className='text-align-center white-color'> 1% Burn</h3>
                         </div>
                       </div>
                  </div>
           </div>
            
         
        </div>
        <div className='grey-bg-right'>
          
        <img src={Canine_master} alt='canine-master' className='right-canine-master'/>

         <div className='grey-bg-right-content text-align-center'>
         
         <img src={come_soon}  alt='come-soon' className='come-soon' /> 
         <p className='text-align-center'>
         This is a strict Whitelist Presale Allocations for the Kuppy  
         Clans Community, to whitelist for this Pre-Sale, we encourage   
         you to stake 100,000 Canine Master $CM for90 days. 10% of raised 
          BUSDs would be used to Buy Back $CM.
          </p>
         </div>
          
         
        </div>
       </div>
    </section>
  )
}

export default CanineMaster