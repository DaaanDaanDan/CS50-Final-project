import NavBar from "./components/NavBar"
import './App.css';
import Footer from "./components/Footer"
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate, Link} from 'react-router-dom';
import Characters from "./pages/Characters";
import { CookiesProvider, useCookies } from 'react-cookie';

function App() {

  const [characterInfo, setCharacterInfo] = useState({})
  const [cookies, setCookie] = useCookies(['characterInfo']);

  useEffect(() => {
    console.log('characterInfo:', characterInfo);
    setCookie('characterInfo', characterInfo, {path:'/'});
  }, [characterInfo])

  function updateCharacterInfo(newInfo){
    setCharacterInfo({...characterInfo, ...newInfo})
  }

  const handleNavigateToCharacters = () => {
    window.location.href = '/characters';}

  const handleNavigateToIndex = () => {
    window.location.href = '/';}

  return (
    <div style={{display:"flex", flexDirection:"column", minHeight:"100vh", justifyContent:"space-between"}} className="App">
      <div>
        <header>
        <link rel="stylesheet" href="https://use.typekit.net/xde8epr.css"></link>
          <div style={{display:"flex", justifyContent:'space-between', height:'130px', alignItems:'center', padding:'10px'}}>
            <img onClick={handleNavigateToIndex} src={require("./Images/headerTest2.png")} alt="Header Logo" style={{cursor:'pointer', scale:'60%'}}></img>
            <div onClick={handleNavigateToCharacters} style={{cursor:'pointer', display:'flex', backgroundColor:'#333435', width:'200px', height:'45px', justifyContent:'center', alignItems:'center', marginRight:'70px'}}>
              <a style={{color:'white', fontFamily:'"pf-fuel-grime", sans-serif', fontWeight:'400', fontStyle:'normal', fontSize:'25px', marginTop:'6px'}}>MEUS PERSONAGENS</a>
            </div>
          </div>
        </header>
        <NavBar updateCharacterInfo={updateCharacterInfo} characterInfo={characterInfo}/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
