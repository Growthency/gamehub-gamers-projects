import React from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
    e.target.reset();
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2>Subscribe to our Newsletter</h2>
        <p>Get the latest updates on new games and special offers.</p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input type="email" placeholder="your-email@example.com" required />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
