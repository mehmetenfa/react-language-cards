import { languages } from "./helper/data.js";
import "./App.css";
import Card from "./components/Card.js";
import reactsvg from "./assets/react.svg";

function App() {
  return (
    <div className="bos-div">
      <img className="reactlogo" src={reactsvg} alt="react-logo" />
      <div className="down-container">
        <div>
          <h2>Languages</h2>
          <div className="main-container">
            {languages.map((language, index) => {
              return (
                <div className="container">
                  <Card key={index} {...language} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
   
export default App;
