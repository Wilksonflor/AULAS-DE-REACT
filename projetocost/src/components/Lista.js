import Item from './Item';
function Lista() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari"/>
        <Item marca="Renault"/>   
        <Item marca="VW"/>   
      </ul>
    </>
  );
}

export default Lista;
