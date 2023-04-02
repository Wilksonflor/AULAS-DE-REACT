import PropTypes from 'prop-types'
function Item({marca, ano_lancamento}){
    return(
        <>
        <li>{marca} - Ano de fabricação {ano_lancamento}</li>
        <p>Frase TEste</p>
        </>
    )
}
Item.prototypes ={
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}
export default Item