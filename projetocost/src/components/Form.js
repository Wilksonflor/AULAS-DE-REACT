function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Cadastrou')
    }
    return(
        <div>
        <h1>meu Form</h1>
        <form onSubmit={cadastrarUsuario}>
            <input type='text' placeholder = "Digite o seu nome"/>

        </form>
        <div>
            <input type='submit' value="cadastrar"/>
        </div>
        </div>
    )
}

export default Form