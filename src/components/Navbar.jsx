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
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarMenu">
  
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#pizzaCarousel">Home</a>
              </li>
  
              <li className="nav-item">
                <a className="nav-link" href="#menu">Menu</a>
              </li>
  
              <li className="nav-item">
                <a className="nav-link" href="#booking">Contact</a>
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