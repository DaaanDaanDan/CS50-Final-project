import NavBar from "./components/NavBar"
import './App.css';
import { toBeInvalid } from '@testing-library/jest-dom/matchers';

function App() {
  return (
    <div className="App">
      <header>
        <div style={{display:"flex", gap:"0px"}}>
          <img src={require("./Images/headerTest2.png")} alt="Header Logo" style={{display:"flex", margin:"-50px", marginRight:"-110px", scale:"50%"}}></img>
          <button style={{backgroundColor:"transparent", height:"40px", alignSelf:"center", border:"none", marginLeft:"50px"}} type="submit"><img src={require("./Images/searchButton.png")} alt="Search button" border="0px" style={{height:"45px"}}></img></button>
          <input placeholder="Search for anything..." style={{color:"white", outline:"none", background:"#424752", fontSize:"30px", borderRadius:"10px", border:"2px solid black", width:"300px", height:"50px", alignSelf:"center"}}></input>
        </div>
      </header>
      <NavBar />
    </div>
  );
}

export default App;
