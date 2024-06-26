import { useState, useEffect, useCallback } from 'react'
import InputBox from './components/InputBox.jsx';
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {
const [from, setFrom] = useState("usd");
const [to, setTo] = useState("inr");
const [amount, setAmount] = useState(0);
const [convertAmount, setConvertAmount] = useState(0);

const  currencyInfo = useCurrencyInfo(from);
const options = Object.keys(currencyInfo);

const convert = () => {
    setConvertAmount(amount * currencyInfo[to]);
}

const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(convertAmount)
}

    return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }} 
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={ amount }
                            currencyOptions={ options }
                            selectCurrency={ from }
                            onAmountChange={(amount) => setAmount(amount)}
                            onCurrencyChange={(currency) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={ swap }
                        >
                        swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            disableInput
                            currencyOptions={ options }
                            selectCurrency={ to }
                            onCurrencyChange={(currency) => setTo(currency)}
                            amount = { convertAmount }
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
