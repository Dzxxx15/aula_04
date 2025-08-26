import PropType from "prop-type"

function Item({marca, Anolançamento, nome, velocidade, valor}){
    return(
        <>
            <li>{nome} {marca} {Anolançamento}  {velocidade} {valor}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropType.string,
    lançamento: PropType.number,
}

export default Item