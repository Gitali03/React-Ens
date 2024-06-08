import React, {useState} from 'react'
import '../css/Currency.css'
import { BiSolidRightArrowSquare } from "react-icons/bi";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "cur_live_4j9evw2tTW6OuZSjGlbgInjMpehGVLsVz7Omf1nV"


function Currency() {
  const[amount,setAmount]= useState(0);
  const[fromCurrency, setFromCurrency]= useState('USD');
  const[toCurrency, setToCurrency]=useState('TRY');
  const[result, setResult]= useState(0);
  
  const exchange = async ()=>{
   
   const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
   const result = (response.data.data[toCurrency] * amount).toFixed(2);
   setResult(result)
  }

  return (
    <div className='currency-div' style= {{marginTop:'70px', fontFamily:'arial', backgroundColor:'green', color:'white', width:'70%', textAlign:'center'}}>
        <div>
            <h3 >EXCHANGE RATES</h3>
        </div>
       <input
       value={amount}
       onChange={(e)=> setAmount(e.target.value)}
        type="number" className='amount' /> 
       <select onChange={(e)=> setFromCurrency(e.target.value)} className='from-currency'>
        <option>USD</option>
        <option >EURO</option>
        <option >TRY</option>
       </select>
       <BiSolidRightArrowSquare style={{fontSize: '25px', marginRight:'10px'}} />

       <select onChange={(e)=> setToCurrency(e.target.value)} className='to-currency'>
        <option>TRY</option>
        <option >USD</option>
        <option >EURO</option>
       </select>

       <input value={result} onChange={(e)=>setResult(e.target.value)} type="number" className='result' />
       <div >
        <button onClick={exchange} className='exchange-button'>EXCHANGE</button>
       </div>
    </div>
    
  )
}

export default Currency
