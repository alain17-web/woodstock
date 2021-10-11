import React from 'react'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  ms-auto me-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2">
                        <a className="nav-link active" aria-current="page" href="#">WOOD</a>
                        </li>
                        <li className="nav-item px-2">
                        <a className="nav-link active fs-6" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item px-2 fs-6">
                        <a className="nav-link active" href="#">Furnitures</a>
                        </li>
                        <li className="nav-item px-2 fs-6">
                        <a className="nav-link active" href="#">Shop</a>
                        </li>
                        <li className="nav-item px-2 fs-6">
                        <a className="nav-link active" href="#">Contact</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}




export default Navbar


