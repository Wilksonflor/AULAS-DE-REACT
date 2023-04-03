
import './App.css';
import Eventos from './components/Eventos';
import Form from './components/Form';



function App() {
  return (
    <div className="App">
    <h1>testando evento</h1>
    <Eventos numero={1}/>
    <Eventos numero={24}/>
    <Form />
    </div>
  );
}

export default App;
