
import './App.css';
import Pessoas from './components/Pessoas';
import Frase from './components/Frase';
import Lista from './components/Lista';


function App() {
  return (
    <div className="App">
    <Frase/>
    <Pessoas
      nome = "Wilkson"
      idade = "28"
      profissao = "Programador"
      foto = "https://via.placeholder.com/150"
    />
    <Lista/>
   
    </div>
  );
}

export default App;
