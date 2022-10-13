import { languages } from './helper/data.js'
import reactsvg from './assets/react.svg'
import "./App.css";

function App() {
  return (
    <>
    <img className='reactLogo' src={reactsvg} alt="reactlogo" />
    <div className='App'>
      <h2 className='top-h2'>Languages</h2>
      <div className='main-container'>
          
      </div>
    </div>
    </>
  );
}

export default App;
