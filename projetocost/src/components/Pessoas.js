function Pessoas({nome, idade, profissao, foto}){//struct para não precisar props em todos
    return(
        <div>
        <img src={foto} alt={nome}/>
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoas