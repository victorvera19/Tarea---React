import './App.css'; 
import Listcards from './components/cards/listcards';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Listcards/>
    </div>
  );
}

export default App;
