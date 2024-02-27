import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer bg-dark py-4 mt-auto">
      <div className="text-center text-lg-start text-white" style={{ background: 'linear-gradient(90.21deg, rgba(197, 172, 28, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)' }}>
        {/* Section: Social media */}
        <section>
          {/* Left */}
          {/* <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div> */}
          {/* Left */}

          {/* Right */}
          <div>
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">Kartik</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
                <p>
                  As someone passionate about tranforming hobbies into opportnities that empower others to achieve their dreams, I aspire to lend my support.
                </p>
                <p>
                  "While I can correct grammatical errors, ensuring the security of the website is paramount and cannot be compromised."
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Laravel</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> Edinburgh, Scotland</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  kumars.kartik@gmail.com
                </p>
                <p><i className="fas fa-phone me-3"></i> +44 7767976753</p>
                <p><i className="fas fa-print me-3"></i> +91 8219231659</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
         Kartik © {currentYear}&nbsp;
          <a className="text-reset fw-bold" href="">Portfolio</a>
        </div>
        {/* Copyright */}
      </div>
    </footer>
  );
}

export default Footer;
