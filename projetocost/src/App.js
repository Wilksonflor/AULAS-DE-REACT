
import './App.css';

function App() {
  const name = "Wilkson"
  const newName = name.toUpperCase()

  function sum(a,b){
    return a + b;
  }

  const url = "https://via.placeholder.com/150"
  return (
    <div className="App">
     <h2>Olá, Mundo!</h2>
     <p>olá, {newName}</p>
     <p>soma: {sum(1,2)}</p>
     <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
