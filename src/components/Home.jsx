import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
    return (
    <div>
<section id="title-section">
<h1 className="title-line col-lg-6 col-md-10 col-sm-10">
  Custom <span className="stickers-font">Stickers</span>,<br />
  <span className="supreme-font">Supreme</span> Quality.
</h1>

    <a href="/products" type="button" class="btn btn-primary title-btn btn-lg">Get Started</a>
</section>

<section id="pain-point">
<h1 className="pp-question">Looking to promote your brand?</h1>
<h1 className="pp-answer">Let our stickers do it for you.</h1>
<img className="collage" src="/collage.png" alt="collage" />

</section>

<h1 className="benefits-header">The Benefits</h1>
<section id="benefits-and-success">

    <div class="benefit">
        <img className="benefit-pic" src="/visibility.png" alt="Visibility" />
        <h2 className="benefit-text">Brand Visibility</h2>
        <p className="benefit-text">Your brand gets noticed everywhere.</p>
    </div>
    <div class="benefit">
        <img className="benefit-pic" src="/marketing.png" alt="marketing-pic" />
        <h2 className="benefit-text">Effortless Marketing</h2>
        <p className="benefit-text">Boost your promotion with eye-catching stickers that speak for you.</p>
    </div>
    <div class="benefit">
        <img className="benefit-pic" src="ordering.png" alt="order-pic" />
        <h2 className="benefit-text">Fast, Easy Ordering</h2>
        <p className="benefit-text">Experience a seamless ordering process, so you can focus on what you do best—growing your brand.</p>
    </div>
</section>

<section id="how-it-works">
  <h1 className="hiw-header">How it Works</h1>
  <div className="steps-container">
    <div className="step-wrapper">
      <div className="step-card">
        <img className="hiw-pic" src="create.png" alt="create-pic" />
        <h3>Design Your Stickers</h3>
        <p>Upload your design or choose a template, then customize the details.</p>
      </div>
      <div className="divider"></div>
    </div>
    <div className="step-wrapper">
      <div className="step-card">
        <img className="hiw-pic" src="approve.png" alt="approve-pic" />
        <h3>Approve and Order</h3>
        <p>Preview your sticker, approve the design, and place your order with ease.</p>
      </div>
      <div className="divider"></div>
    </div>
    <div className="step-wrapper">
      <div className="step-card">
        <img className="hiw-pic" src="delivery.png" alt="delivery-pic" />
        <h3>Fast Delivery</h3>
        <p>Get fast delivery.</p>
      </div>
      <div className="divider"></div>
    </div>
    <div className="step-wrapper">
      <div className="step-card">
        <img className="hiw-pic" src="sharing.png" alt="sharing-pic" />
        <h3>Share Your Brand</h3>
        <p>Start promoting your brand everywhere.</p>
      </div>
    </div>
  </div>
</section>


<section id="testimonials">
<h1 className="test-header"></h1>
<img src="" alt="" />

</section>
    </div>
    );
    }


export default Home;