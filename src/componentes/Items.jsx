import PropType from "prop-type"

function Item({marca, lançamento}){
    return(
        <>
            <p>Item de uma lista</p>
            <li>{marca} - {lançamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropType.string,
    lançamento: PropType.number,
}

export default Item