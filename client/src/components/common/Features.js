function Features() {
  return (
    <section className="container py-5">

      <h2 className="text-center fw-bold mb-5">
        Why Choose Us
      </h2>

      <div className="row g-4">

        <div className="col-md-3">
          <div className="card h-100 shadow-sm border-0 text-center p-4">
            <div className="display-4 mb-3">🏨</div>
            <h5 className="fw-bold">Luxury Hotels</h5>
            <p className="text-muted">
              Stay in premium hotels with world-class facilities and comfort.
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card h-100 shadow-sm border-0 text-center p-4">
            <div className="display-4 mb-3">🔒</div>
            <h5 className="fw-bold">Secure Booking</h5>
            <p className="text-muted">
              Your booking and payment information is safe and secure.
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card h-100 shadow-sm border-0 text-center p-4">
            <div className="display-4 mb-3">💰</div>
            <h5 className="fw-bold">Best Price</h5>
            <p className="text-muted">
              Get the best hotel deals and exclusive discounts every day.
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card h-100 shadow-sm border-0 text-center p-4">
            <div className="display-4 mb-3">📞</div>
            <h5 className="fw-bold">24/7 Support</h5>
            <p className="text-muted">
              Our support team is available anytime to help with your bookings.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Features;