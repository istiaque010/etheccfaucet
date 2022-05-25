import React from 'react';

 
 
function Header() {
  return (
    <section className="navbar header">
       <div className="container">
          <div className="row">
           <div className="col-sm-12"> 
            <nav className="navbar navbar-expand-lg ">
              <a className="navbar-brand text-white" href="#">GIST-Infonet | ETH-ECC Faucet</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
 
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                    <a className="nav-link " href="#about">About<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#destinations">Destinations<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item dropdown">
                  <a className="nav-link" href="#places">Places<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#tourist">Resourecs</a>
                  </li>
                </ul>
                 
                 <button className='btn btn-danger connectButton' >Connect Wallet</button>
                 
              </div>
             </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}
export default Header;