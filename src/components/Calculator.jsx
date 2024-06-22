import { useState } from 'react'

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(null);

    const sum = () => setResult(num1+num2);
    const substract = () => setResult(num1-num2);
    const multiply = () => setResult(num1*num2);
    const divide = () => {
        if(num2 !==0){
            setResult(num1/num2)
        }else{
            setResult('Error: no se puede dividir entre 0')
        }
    };

    return(
        <div>
            <h1>Calculadora</h1>
            <input
                type='number'
                value={num1}
                onChange={(e)=> setNum1(parseFloat(e.target.value))}
                placeholder='Introduce el primer número'
            />
            <input
                type='number'
                value={num2}
                onChange={(e)=> setNum2(parseFloat(e.target.value))}
                placeholder='Introduce el segundo número'
            />
            <div>
                <button onClick={sum}>Sumar</button>
                <button onClick={substract}>Restar</button>
                <button onClick={multiply}>Multiplicar</button>
                <button onClick={divide}>Dividir</button>
            </div>
            <p>Resultado: {result}</p>
            
            
        </div>
    )
}

export default Calculator;