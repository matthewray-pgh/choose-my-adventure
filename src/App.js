import logo from './assets/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Choose my own adventure game
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
        >
          Enter if you dare
        </a>
      </header>
    </div>
  );
}

export default App;
