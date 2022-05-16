import {useState} from 'react';


const useInput = (validateValue) =>{
    
    const [enteredValue,setEnteredValue] = useState('');
    const [isTouched,setIsTouched] = useState(false);
    const valueIsValid = validateValue(enteredValue); 
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event =>{
        setEnteredValue(event.target.value);
        
      }

    const valueBlurHandler = event =>{
      setIsTouched(true);
    }

    const rest = () =>{
      setEnteredValue('');
      setIsTouched('');
    }
    
return {
    value:enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    rest
}

}

export default useInput;