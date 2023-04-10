import Button from './evento/Button';
function Eventos({numero}){
    
    function meuEvento(){
        console.log(`Ativando o primeiro evento!`)
    }
    
    function meuSegundoEvento(){
        console.log('Ativando o meu segundo Evento')
    }

    return(
        <div>
        <p>Clique aqui para ativar evento:</p>
        <Button event={meuEvento} text="Primeiro evento"/>
        <Button event={meuSegundoEvento} text="Segundo evento"/>
        </div>
    )
}

export default Eventos