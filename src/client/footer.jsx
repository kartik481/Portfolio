import navIcon1 from './assets/github-mark-white.png';
import navIcon2 from './assets/reshot-icon-twitter-4EAXDHGYM5.svg';
import navIcon3 from './assets/iconmonstr-linkedin-3.svg';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer bg-dark py-4 mt-auto">
      <div className="text-center text-lg-start text-white" style={{ background: 'linear-gradient(90.21deg, rgba(197, 172, 28, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)' }}>
        <section className="py-4 mb-auto">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col">
                <h6 className="text-uppercase fw-bold" style={{justifyContent:'center'}}>Kartik</h6>
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
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div className="text-center">
                  <div style={{ display: 'inline-block', marginRight: '40px' }}>
                    <a href="https://github.com/kartik481"><img src={navIcon1} alt="github" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></a>
                  </div>
                  <div style={{ display: 'inline-block', marginRight: '40px' }}>
                    <a href="https://twitter.com/kartikk__"><img src={navIcon2} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></a>
                  </div>
                  <div style={{ display: 'inline-block' }}>
                    <a href="https://www.linkedin.com/in/kartik-kk/"><img src={navIcon3} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          Kartik © {currentYear}&nbsp;
          <a className="text-reset fw-bold" href="">Portfolio</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
