function Eventos({numero}){
    
    function meuEvento(){
        console.log(`fui ativado o numero ${numero}`)
    }
   
    return(
        <div>
        <p>Clique aqui para ativar evento:</p>
       
        <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Eventos