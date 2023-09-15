import { data } from './data'
import { useState } from 'react';
import ImcCalc from './componets/ImcCalc';
import './App.css';
import ImcTable from './componets/ImcTable';


function App() {

  const calcImc = (e, heigh, weigh) => {
    e.preventDefault();

    if(!weigh || !heigh) return;

    const weighFloat = +weigh.replace(",", ".");
    const heighFloat = +heigh.replace(",", ".");

    const imcResult = (weighFloat /(heighFloat * heighFloat)).toFixed(1);

    setImc(imcResult);

    data.forEach((item) =>{
    if(imcResult >= item.min && imcResult <= item.max){
    setInfo(item.info);
    setInfoClass(item.infoClass);
    }
  });

  if (!info) return;

  };

  const resetCalc = (e) => {
    e.preventDefault()

    setImc("");
    setInfo("");
    setInfoClass("");
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("")

  return (
    <div className="container">      
      {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>}
    </div>
    
  )
}

export default App
