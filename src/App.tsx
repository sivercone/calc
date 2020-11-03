import React from 'react';
import { Button } from './components/Button';

const arrButtons: string[] = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

function App() {
   const [value, setValue] = React.useState<string>('0');
   const [preValue, setPreValue] = React.useState<number>(0);
   const [operator, setOperator] = React.useState<string>('');
   const [memory, setMemory] = React.useState<any>(0);

   const mIncrease = () => {
      setMemory(memory + parseFloat(value));
   };

   const mDecrease = () => {
      setMemory(memory - parseFloat(value));
   };

   const mClear = () => {
      setMemory(0);
   };

   const mRead = () => {
      setValue(memory);
   };

   const buttonClick = (content: string) => {
      const numValue = parseFloat(value);

      if (content === 'AC') {
         setPreValue(0);
         setOperator('');
         return setValue('0');
      }

      if (content === '+/-') {
         return setValue((numValue * -1).toString());
      }

      if (content === '%') {
         setPreValue(0);
         setOperator('');
         return setValue((numValue / 100).toString());
      }

      if (content === '.') {
         if (value.includes('.')) {
            return;
         }

         return setValue(value + '.');
      }

      if (content === '+') {
         setPreValue(parseFloat(value));
         setOperator('+');
         return setValue('0');
      }

      if (content === '-') {
         setPreValue(parseFloat(value));
         setOperator('-');
         return setValue('0');
      }

      if (content === '/') {
         setPreValue(parseFloat(value));
         setOperator('/');
         return setValue('0');
      }

      if (content === 'x') {
         setPreValue(parseFloat(value));
         setOperator('x');
         return setValue('0');
      }

      if (content === '=') {
         if (!operator) {
            return;
         }

         if (operator === '+') {
            setValue((preValue + parseFloat(value)).toString());
         } else if (operator === '-') {
            setValue((preValue - parseFloat(value)).toString());
         } else if (operator === '/') {
            setValue((preValue / parseFloat(value)).toString());
         } else if (operator === 'x') {
            setValue((preValue * parseFloat(value)).toString());
         }

         setPreValue(0);
         setOperator('');
         return;
      }

      if (value[value.length - 1] === '.') {
         setValue(value + content);
      } else {
         setValue(parseFloat(value + content).toString());
      }
   };

   return (
      <div className="wrapper">
         <div className="container">
            <section className="count">
               <h2>{value}</h2>
            </section>
            <section className="box">
               <button onClick={mClear} className="circle">
                  mc
               </button>
               <button onClick={mRead} className="circle">
                  mr
               </button>
               <button onClick={mDecrease} className="circle">
                  m-
               </button>
               <button onClick={mIncrease} className="circle">
                  m+
               </button>
               {arrButtons.map((content: string, index: number) => (
                  <Button key={index} content={content} buttonClick={buttonClick} />
               ))}
            </section>
         </div>
      </div>
   );
}

export default App;
