function Saudacao( { nome } ){

    function textoSaudacao(algumNome){
        return `Olá, ${algumNome}, tudo bem?`
    }


    return(
        <>
        {nome && <p>{textoSaudacao(nome)}</p>}
        </>
        
    )
}

export default Saudacao;