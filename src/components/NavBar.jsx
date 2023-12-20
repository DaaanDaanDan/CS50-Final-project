import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate} from 'react-router-dom';
import Stats from '../pages/Stats';
import Background from '../pages/Background';
import Origin from "../pages/Origin";
import Class from "../pages/Class";
import Index from "../pages/Index";
import { useState } from 'react';
import Perks from '../pages/Perks';
import Sheet from '../pages/Sheet';

function NavBar({updateCharacterInfo, characterInfo}) {

  const [visibleButtons, setVisibleButtons] = useState({
    home: true,
    background: false,
    attribute: false,
    origin: false,
    class: false,
    perks: false,
    sheet: false
  })

  function handleNextTab(tabName){
    setVisibleButtons({...visibleButtons, [tabName]: true})
  }

  return (
    <Router>
    <nav style={{border:"1px solid black"}}>
      <ul className="unorderedListHome">
        {visibleButtons.home && (
          <li>
          <NavLink to="/" style={{ textDecoration: "none"}} className="listHome">Início</NavLink>
          </li>
        )}
        {visibleButtons.background && (
          <li>
          <NavLink to="/background" style={{ textDecoration: "none"}} className="listHome">Background</NavLink>
          </li>
        )}
        {visibleButtons.attribute && (
          <li>
          <NavLink to="/attribute" style={{ textDecoration: "none"}} className="listHome">Seleção de atributos</NavLink>
          </li>
        )}
        {visibleButtons.origin && (
          <li>
          <NavLink to="/origin" style={{ textDecoration: "none"}} className="listHome">Seleção de origem</NavLink>
          </li>
        )}
        {visibleButtons.class && (
        <li>
        <NavLink to="/class" style={{ textDecoration: "none"}} className="listHome">Seleção de classe</NavLink>
        </li>
        )}
        {visibleButtons.perks && (
        <li>
        <NavLink to="/perks" style={{ textDecoration: "none"}} className="listHome">Seleção de perícias</NavLink>
        </li>
        )}
        {visibleButtons.perks && (
        <li>
        <NavLink to="/sheet" style={{ textDecoration: "none"}} className="listHome">Ficha</NavLink>
        </li>
        )}
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Index handleShowTab={handleNextTab} updateCharacterInfo={updateCharacterInfo}/>} />
      <Route path="/background" element={<Background handleShowTab={handleNextTab} updateCharacterInfo={updateCharacterInfo}/>} />
      <Route path="/attribute" element={<Stats handleShowTab={handleNextTab} updateCharacterInfo={updateCharacterInfo}/>} />
      <Route path="/origin" element={<Origin handleShowTab={handleNextTab} updateCharacterInfo={updateCharacterInfo}/>} />
      <Route path="/class" element={<Class handleShowTab={handleNextTab} updateCharacterInfo={updateCharacterInfo}/>} />
      <Route path="/perks" element={<Perks handleShowTab={handleNextTab} updateCharacterInfo={updateCharacterInfo} characterInfo={characterInfo}/>} />
      <Route path="/sheet" element={<Sheet handleShowTab={handleNextTab} updateCharacterInfo={updateCharacterInfo} characterInfo={characterInfo}/>} />
    </Routes>
  </Router>
  )
}


export default NavBar
      
