import {useState} from 'react'
function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    
    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email)
    
    }
    function limparEmail(){
        setUserEmail('')
    
    }
    
    return(
        <div>
        <h2>Cadastre o seu E-mail.</h2>
        <form>
            <input type='email' name='email' placeholder='DIgite o seu email' onChange={(e) => setEmail(e.target.value)}/>
            <button type='submit' onClick={enviarEmail}>Enviar E-mail</button>
         {userEmail && (
            <div>
                <p>O email do usuário é: {userEmail}</p>
                <button onClick={limparEmail}>limpar</button>
            </div>
         )}
        </form>

        </div>
    )
}

export default Condicional;