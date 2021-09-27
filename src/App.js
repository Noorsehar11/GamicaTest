import './App.css';
import Header from './components/header/header';
import Balance from './components/balance/balance';

function App() {
return(
  <div className= 'app'>
    <Header/>
    <div className='container'>
      <Balance/>
    </div>
  </div>
);
}

export default App;
