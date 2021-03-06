import React from 'react';
import { Store } from '../common/Store';
import CLLogo from "./../img/chainlink.png";
import LoomLogo from "./../img/loom.png";



export default function Header() {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
       <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="/"><p><img className="logo" src={CLLogo}/> plasmaLink  <img className="logo" src={LoomLogo}/></p></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarResponsive">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
             
                <li className="nav-item">
                  <a className="nav-link" href="/demo">demo</a>
                </li>
              
              </ul>
            </div>
        </nav>
    </React.Fragment>
  )
}
