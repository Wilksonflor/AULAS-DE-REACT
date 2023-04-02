import Item from './Item';
function Lista() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1985}/>
        <Item marca="Renault" ano_lancamento={1995}/>   
        <Item marca="VW" ano_lancamento={2005}/>   
      </ul>
    </>
  );
}

export default Lista;
