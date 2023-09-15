import { useState } from 'react';
import Button from './Button';
import './ImcCalc.css';

const ImcCalc = ({ calcImc }) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    
    const  clearForm = (e) => {
        e.preventDefault();
        setWeight("");
        setHeight("");
    };

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) => {
        const updateValue = validDigits(e.target.value)
        setHeight(updateValue);
    }

    const handleWeightChange = (e) => {
        const updateValue = validDigits(e.target.value)
        setWeight(updateValue);
    }

  return (
    <div id="calc-container">
        <h1>Calculadora de IMC</h1>
        <form id="imc-form">

            <div className="form-inputs">

                <div className="form-control">
                    <label htmlFor="height">Altura</label>
                    <input type="text" name="height" id="height" placeholder="Ex. 1,75" 
                    onChange={(e) => handleHeightChange(e)}
                    value={height}/>
                </div>

                <div className="form-control">
                    <label htmlFor="weight">Peso</label>
                    <input type="text" name="weight" id="weight" placeholder="Ex. 70.5" 
                    onChange={(e) => handleWeightChange(e)}
                    value={weight}/>
                </div>

            </div>

            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
                <Button id="clear-btn" text="Limpar" action={clearForm}/>
            </div>

            <footer>
                <p><div className="note">Projeto para fins de estudo <br />
                Professor: Matheus Battisti - Hora de Codar<br />
                Aluno: Fernando C. Pagani</div></p>
            </footer>

        </form>
    </div>
  )
}

export default ImcCalc