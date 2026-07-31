function HotelRegisterForm({
  hotel,
  handleChange,
  handleImage,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>

      {/* Hotel Information */}
      <h5 className="fw-semibold border-bottom pb-2 mb-3">
        Hotel Information
      </h5>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label className="form-label">Hotel Name</label>
          <input
            type="text"
            name="hotelName"
            className="form-control"
            placeholder="Enter hotel name"
            value={hotel.hotelName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Hotel Email</label>
          <input
            type="email"
            name="hotelEmail"
            className="form-control"
            placeholder="hotel@example.com"
            value={hotel.hotelEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Hotel Phone</label>
          <input
            type="text"
            name="hotelPhone"
            className="form-control"
            placeholder="+91 XXXXX XXXXX"
            value={hotel.hotelPhone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Hotel Category</label>
          <select
            name="hotelCategory"
            className="form-select"
            value={hotel.hotelCategory}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="1 Star">1 Star</option>
            <option value="2 Star">2 Star</option>
            <option value="3 Star">3 Star</option>
            <option value="4 Star">4 Star</option>
            <option value="5 Star">5 Star</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

      </div>

      {/* Owner Information */}

      <h5 className="fw-semibold border-bottom pb-2 mt-3 mb-3">
        Owner Information
      </h5>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label className="form-label">Owner Name</label>
          <input
            type="text"
            name="ownerName"
            className="form-control"
            placeholder="Owner full name"
            value={hotel.ownerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Owner Email</label>
          <input
            type="email"
            name="ownerEmail"
            className="form-control"
            placeholder="owner@example.com"
            value={hotel.ownerEmail}
            onChange={handleChange}
            required
          />
        </div>

      </div>

      {/* Address */}

      <h5 className="fw-semibold border-bottom pb-2 mt-3 mb-3">
        Address
      </h5>

      <div className="mb-3">
        <label className="form-label">Hotel Address</label>
        <textarea
          rows="3"
          name="address"
          className="form-control"
          placeholder="Enter complete hotel address"
          value={hotel.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="row">

        <div className="col-md-4 mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            name="city"
            className="form-control"
            value={hotel.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">State</label>
          <input
            type="text"
            name="state"
            className="form-control"
            value={hotel.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Pincode</label>
          <input
            type="text"
            name="pincode"
            className="form-control"
            value={hotel.pincode}
            onChange={handleChange}
            required
          />
        </div>

      </div>

      {/* Documents */}

      <h5 className="fw-semibold border-bottom pb-2 mt-3 mb-3">
        Documents
      </h5>

      <div className="mb-3">
        <label className="form-label">Hotel Logo</label>
        <input
          type="file"
          className="form-control"
          onChange={handleImage}
        />
      </div>

      {/* Security */}

      <h5 className="fw-semibold border-bottom pb-2 mt-3 mb-3">
        Security
      </h5>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={hotel.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            value={hotel.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

      </div>

      <div className="form-check mt-2 mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="terms"
          required
        />
        <label className="form-check-label" htmlFor="terms">
          I agree to the Terms & Conditions
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-primary w-100 py-2"
      >
        Register Hotel
      </button>

    </form>
  );
}

export default HotelRegisterForm;