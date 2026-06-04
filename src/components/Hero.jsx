function Hero() {
  return (
    <div
      id="pizzaCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#pizzaCarousel"
          data-bs-slide-to="0"
          className="active"
        ></button>

        <button
          type="button"
          data-bs-target="#pizzaCarousel"
          data-bs-slide-to="1"
        ></button>

        <button
          type="button"
          data-bs-target="#pizzaCarousel"
          data-bs-slide-to="2"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
            className="d-block w-100 hero-img"
            alt="Pizza 1"
          />
          <div className="carousel-caption">
            <h2>Neapolitan Pizza</h2>
            <p>
              Traditional Italian pizza with fresh ingredients.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
            className="d-block w-100 hero-img"
            alt="Pizza 2"
          />
          <div className="carousel-caption">
            <h2>Mushroom Pizza</h2>
            <p>
              Rich flavor with fresh mushrooms and cheese.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
            className="d-block w-100 hero-img"
            alt="Pizza 3"
          />
          <div className="carousel-caption">
            <h2>Pesto Pizza</h2>
            <p>
              Fresh basil pesto and premium mozzarella cheese.
            </p>
          </div>
        </div>

      </div>

      {/* Previous */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#pizzaCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      {/* Next */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#pizzaCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Hero;