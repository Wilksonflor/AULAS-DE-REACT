import {useState} from 'react'
function Condicional(){
    const [email, setEmail] = useState()
    
    function enviarEmail(e){
        e.preventDefault();
        console.log('testando 1,2,3...')
    }

    return(
        <div>
        <h2>Cadastre o seu E-mail.</h2>
        <form>
            <input type='email' name='email' placeholder='DIgite o seu email' onChange={(e) => setEmail(e.target.value)}/>
            <button type='submit' onClick={enviarEmail}>Enviar E-mail</button>
        </form>

        </div>
    )
}

export default Condicional;