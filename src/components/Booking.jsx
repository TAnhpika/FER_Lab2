function Booking() {
    return (
      <div className="container py-5">
  
        <h2 className="text-center text-white mb-4">
          Book Your Table
        </h2>
  
        <form>
  
          <div className="row">
  
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
  
            <div className="col-md-4">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
  
            <div className="col-md-4">
              <select className="form-select">
                <option>Select a Service</option>
                <option>Dine In</option>
                <option>Delivery</option>
              </select>
            </div>
  
          </div>
  
          <div className="mt-4">
  
            <textarea
              rows="5"
              className="form-control"
              placeholder="Please write your comment"
            />
  
          </div>
  
          <button className="btn btn-warning mt-4">
            Send Message
          </button>
  
        </form>
  
      </div>
    )
  }
  
  export default Booking