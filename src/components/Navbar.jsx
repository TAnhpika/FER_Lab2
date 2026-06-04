function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
  
          <a className="navbar-brand fw-bold" href="#">
            Pizza House
          </a>
  
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="menu">
  
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
  
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
  
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
  
            <form className="d-flex">
              <input
                className="form-control me-2"
                placeholder="Search"
              />
              <button className="btn btn-danger">
                Search
              </button>
            </form>
  
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar