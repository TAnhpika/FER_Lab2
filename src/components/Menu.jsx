const pizzas = [
    {
      name: "Margherita Pizza",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },
    {
      name: "Mushroom Pizza",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
    },
    {
      name: "Hawaiian Pizza",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
    },
    {
      name: "Pesto Pizza",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
    }
  ]


  function Menu() {
    return (
      <div className="container py-5">
  
        <h2 className="text-white mb-4">
          Our Menu
        </h2>
  
        <div className="row">
  
          {pizzas.map((pizza, index) => (
            <div
              className="col-lg-3 col-md-6 mb-4"
              key={index}
            >
              <div className="card h-100">
  
                <img
                  src={pizza.image}
                  className="card-img-top"
                />
  
                <div className="card-body">
                  <h5>{pizza.name}</h5>
  
                  <p>${pizza.price}.00</p>
                </div>
  
                <div className="card-footer">
                  <button className="btn btn-dark w-100">
                    Buy
                  </button>
                </div>
  
              </div>
            </div>
          ))}
  
        </div>
  
      </div>
    )
  }
  
  export default Menu