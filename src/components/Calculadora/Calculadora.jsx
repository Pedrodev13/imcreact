import { useState } from "react"

const Calculadora = () => {
    const [ altura, setAltura ] = useState(0)
    const [ peso, setPeso ] = useState(0)

    
    

    const calculoImc = () => {
        const soma = (altura * altura);
        const media = (peso / soma).toFixed(2);

        if(soma < 17) {
            return (
                <p>Sua média foi {media}. Você está muito abaixo do peso!</p>
            )
        } else if (media > 17 && media < 18.49){
            return (
                <p>Sua média foi {media}. Você esta abaixo do peso!</p>
            )
        } else if (media > 18,50 && media < 24.99){
            return (
                <p>Sua média foi {media}. Você esta com peso normal!</p>
            )
        } else if (media > 25 && media < 29.99){
            return (
                <p>Sua média foi {media}. Você esta acima do peso normal!</p>
            )
        } else if (media > 30 && media < 34.99){
            return (
                <p>Sua média foi {media}. Você esta com obesidade!</p>
            )
        } else if (media > 35 && media < 39.99){
            return (
                <p>Sua média foi {media}. Você esta com obesidade II (severa)</p>
            )
        } else if (media > 40){
            return (
                <p>Sua média foi {media}. Você esta com obesidade III (mórbida)</p>
            )
        } 
    }

    const calcula = () => {
        {calculoImc}
    }

    return (
        <form>
            <input type="number" placeholder="Sua altura" onChange={evento => setAltura(parseFloat(evento.target.value))}/>
            <input type="number" placeholder="Seu peso" onChange={evento => setPeso(parseFloat(evento.target.value))}/>
            {calculoImc()}
        </form>
        
    )
}

export default Calculadora