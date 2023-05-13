import logo from './Holberton logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';


function App() {
  return (
    <div>
        <header className="App-header">
          <img src={logo} alt='holberton logo'/>
          <h1>School dashboard</h1>
        </header>
        <hr/>
        <main role="main" className="App-body">
          <p>Login to access the full dashboard:</p>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" />
          <button type="button">OK</button>
        </main>
       
        <footer className="App-footer">
        <hr/>
          <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
        </footer>
    </div>
  );
}

export default App;
