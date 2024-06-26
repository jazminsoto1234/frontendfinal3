import React from 'react';
import Shop from '../Shop';
import App from '../App';


export default function Menu() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand text-success logo h1 align-self-center" href="index.html">
            OECME
          </a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="principal.htmltemplatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/shop">Shop</a>
              </li>
                  </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div className="input-group">
                  <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                  <div className="input-group-text">
                    <i className="fa fa-fw fa-search"></i>
                  </div>
                </div>
              </div>
              
              <a className="nav-icon d-none d-lg-inline" href="principal.html" data-bs-toggle="modal" data-bs-target="templatemo_search">
                <i className="fa fa-fw fa-search text-dark mr-2"></i>
              </a>
              <a className="nav-icon position-relative text-decoration-none" href="login.html">
                <i className="fa fa-fw fa-user text-dark mr-3"></i>
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
