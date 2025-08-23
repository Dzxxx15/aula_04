import Item from "./Items"

function Lista(){
    return(
        <>
            <h2>Minha Lista</h2>
                <ul>
                    <Item marca="DELL" lançamento={2023}/>
                    <Item marca="Lenovo" lançamento={2021}/>
                </ul>
        </>
    )
}

export default Lista