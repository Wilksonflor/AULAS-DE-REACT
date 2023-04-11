function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista de coisas:</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Não há nada cadastrado.</p>
      )}
    </>
  );
}
// Para usar a lógica(if) é começando {}
export default OutraLista;
