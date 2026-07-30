function HotelRegisterForm() {
    return (

                <form>

                    {/* Hotel Information */}
                    <h5 className="fw-semibold border-bottom pb-2 mb-3">
                        Hotel Information
                    </h5>

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Hotel Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter hotel name"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Hotel Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="hotel@example.com"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Hotel Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="+91 XXXXX XXXXX"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Hotel Category</label>
                            <select className="form-select">
                                <option>Select Category</option>
                                <option>1 Star</option>
                                <option>2 Star</option>
                                <option>3 Star</option>
                                <option>4 Star</option>
                                <option>5 Star</option>
                                <option>Luxury</option>
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
                                className="form-control"
                                placeholder="Owner full name"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Owner Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="owner@example.com"
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
                            className="form-control"
                            placeholder="Enter complete hotel address"
                        ></textarea>
                    </div>

                    <div className="row">

                        <div className="col-md-4 mb-3">
                            <label className="form-label">City</label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">State</label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">Pincode</label>
                            <input
                                type="text"
                                className="form-control"
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
                                className="form-control"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                            />
                        </div>

                    </div>

                    <div className="form-check mt-2 mb-4">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="terms"
                        />

                        <label
                            className="form-check-label"
                            htmlFor="terms"
                        >
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

    )
}
export default HotelRegisterForm;