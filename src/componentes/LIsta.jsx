import Item from "./Items"

function Lista(){
    return(
        <>
            <h1>Minha Lista dos carros mais rapidos</h1>
                

                <ul>
                    <Item nome="Bugatti Bolide" marca="Bugatti" Anolançamento={2024} velocidade="311mph" valor="R$25,6 milhões"/>

                    <Item nome="Koenigsegg Jesko Absolut" marca="Koenigsegg" Anolançamento={2020} velocidade="310mph" valor="R$18milhões"/>

                    <Item nome="Bugatti Chiron Super Sport300+" marca="buggati" Anolançamento={2019} velocidade="304mph" valor="R$18,1 milhões"/>

                    <Item nome="SSC Tuatara" marca="SSC" Anolançamento={2020} velocidade="295mph" valor="R$11 milhões"/>

                    <Item nome="Bugatti Mistral" marca="Bugatti" Anolançamento={2024/2025} velocidade="282mph" valor="R$28 milhões"/>

                    <Item nome="Hennessey Venom F5" marca="Hennessey" Anolançamento={2022} velocidade="272mph" valor="R$12 milhões"/>

                    <Item nome="Bugatti Veyron 16.4 Super Sport" marca="Bugatti" Anolançamento={2010} velocidade="268mph" valor="R$4,5 milhões"/>

                    <Item nome="Rimac Nevera" marca="Rimac (Croácia, elétrico)" Anolançamento={2021} velocidade="258mph" valor="R$14 milhões"/>

                    <Item nome="McLaren Speedtail" marca="McLaren" Anolançamento={2020} velocidade="250mph" valor="R$40 milhões"/>

                    <Item nome="W Motors Fenyr Supersport" marca="W Motors" Anolançamento={2020} velocidade="250mph" valor="R$9,7 milhões"/>
                </ul>
        </>
    )
}

export default Lista