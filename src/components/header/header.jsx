import React from 'react'
// NavLink est similaire à Link, mais avec la possibilité d'ajouter des attributs de style supplémentaires à l'élément
import {Link, NavLink} from 'react-router-dom'
import PhotoProfil from '../../assets/images/photo-profil.png'
import './_header.scss'

function Header() {
    return (
      // afficher un <header> comprenant un logo et une barre de navigation
      //  avec 2 liens vers les pages "A propos" et "Accueil".
      

      <header className="header">
        <div className="header-content">            
            <Link to="/">
                <div className="header-photoProfil-name">
                    <div className="header-photoProfil">
                        <img className="header-photoProfil-img" src={PhotoProfil} alt="photodeprofil"></img>
                    </div>                
                    <span className="header-name">Jean-René JAOUEN</span>
                </div>
            </Link>    
        </div>

        <nav>
          <ul className="nav">
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/apropos">A Propos</NavLink>
            </li>
            <li>
              <NavLink to="/projets">Projets</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Header