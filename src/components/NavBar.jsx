import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Stats from '../pages/Stats';
import Home from '../pages/Home';
import Origin from "../pages/Origin";
import { useState } from 'react';

function NavBar() {

  const [visibleButtons, setVisibleButtons] = useState({
    home: true,
    attributeSelection: true,
    originSelection: true
  })

  return (
    <Router>
    <nav style={{border:"1px solid black"}}>
      <ul className="unorderedListHome">
        {visibleButtons.home && (
          <li className="listHome">
          <NavLink to="/" style={{ textDecoration: "none"}} activeClassName="activeNav">Home</NavLink>
          </li>
        )}
        {visibleButtons.attributeSelection && (
        <li className="listHome">
        <NavLink to="/stats" style={{ textDecoration: "none"}} activeClassName="activeNav"> Attribute selection</NavLink>
        </li>
        )}
        {visibleButtons.originSelection && (
        <li className="listHome">
        <NavLink to="/origin" style={{ textDecoration: "none"}} activeClassName="activeNav"> Origin selection</NavLink>
        </li>
        )}
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/origin" element={<Origin />} />
    </Routes>
  </Router>
  )
}


export default NavBar
      
