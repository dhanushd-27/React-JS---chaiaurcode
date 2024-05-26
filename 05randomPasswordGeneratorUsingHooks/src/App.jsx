import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [isCharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let setStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(isNumberAllowed) setStr += "0123456789";
    if(isCharAllowed) setStr += "!@#$%^&*)(_+}{}][;:,./?|";

    for (let i = 0; i < length; i++) {
      let selChar = Math.floor(Math.random() * setStr.length);
      pass += setStr.charAt(selChar); 
    }

    setPassword(pass);
  }, [length, isNumberAllowed, isCharAllowed, setPassword]);

  useEffect(() => {
      passwordGenerator();
    }
  ,
    [length, isCharAllowed, isNumberAllowed, setCharAllowed]
  );

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }

  return(
      <div className='w-screen h-screen bg-black p-10 flex justify-center items-start'>
        <div className='w-max rounded-3xl h-auto bg-slate-500 font-bold px-10 py-8' >
          <h1 className='font-bold text-center text-xl m-4'>Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
                type="text"
                value={ password }
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
                readOnly
                ref={ passwordRef }
            />
            <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={ copyPasswordToClipboard }
            >copy</button>
          </div>
          <input type="range" id='length' value={length} min={6} max={20}  className='cursor-pointer w-24 my-5' onChange={(e) => {setLength(e.target.value)}}/>
          <label htmlFor="length" className='text-white'> { length }</label>

          <input type="checkbox" defaultChecked={ isNumberAllowed } id='number' className='ml-3 my-5' onChange={() => {
            setNumberAllowed((isNumberAllowed) => !isNumberAllowed);
          }}/>
          <label htmlFor="number" className='text-white'> Add Numbers</label>

          <input type="checkbox" defaultChecked={ isCharAllowed } id='charr' className='ml-3 my-5' 
            onChange={ () => {
                setCharAllowed((isCharAllowed) => !isCharAllowed);
              }
            }/>
          <label htmlFor="charr" className='text-white'> Add Char</label>
        </div>
      </div>
  )
}

export default App
