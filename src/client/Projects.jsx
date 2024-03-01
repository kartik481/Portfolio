
import Card from './Card';

export default function Project() {
    return (
        <section className='mt-auto mb-auto py-4' id='projects'>
            <div className="project">
            <h2>Projects</h2>
            </div>

            
        <div className='container'>
          <div className="row">
              <div className="col-md-4 py-4">
                    <Card
                        st={"bg-dark text-white"}
                        title="Campsite"
                        cardText="Explore the Globe with this Fully Functional Website Powered by Bootstrap and Node.js - Your Ultimate Camping Companion"
                        linkto="https://github.com/kartik481/campsite" />
              </div>
              <div className="col-md-4 py-4">
                    <Card
                        st={"bg-dark text-white"}
                        title="Exploring the Birds Demographics"
                        cardText="Dissertation Presented for the Degree of MSc in Statistics with Data Science(August 2023)"
                        linkto= "https://github.com/kartik481/Birds"
                    />
                
              </div>
             <div className="col-md-4 py-4">
              
                    <Card
                        st={"bg-dark text-white"}
                        title="Your Project"
                        cardText="Get your project here :-). Feel free to deveop any website you want to develop with your fav tech-stack"
                        linkto= "https://www.google.com/"
                    />
                    </div>
             
          </div>
          <div className="row">
              <div className="col-md-4 py-4">
              
              <Card
                        st={"bg-dark text-white"}
                        title="Benchmarked anomaly detection techniques in Networks"
                        cardText="Dissertation Presented for the Degree of MSc in Statistics with Data Science(June 2023)"
                        linkto= "https://github.com/kartik481/Anomaly-detection-using-AE-and-VAEs"
                    />

              </div>
              <div className="col-md-4 py-4">
              <Card
  st={"bg-dark text-white"}
  title="Smoothing Basis function using penalties"
  cardText="R functions for smoothing x, y data. e.g. model is defined using the equation: y_i = f(x_i) + ε_i, for i = 1, ..., n; where x_i and y_i are observed, and f(x_i) is an unknown smooth function for which parameters are estimated"
  linkto="https://github.com/kartik481/Smoothing-Basis-function-using-penalties./blob/main/proj3.R" />
                    
                
              </div>
             <div className="col-md-4 py-4">
              
                    <Card
                        st={"bg-dark text-white"}
                        title="Your Project"
                        cardText="Get your project here :-). Feel free to deveop any website you want to develop with your fav tech-stack"
                        linkto= "https://www.google.com/"
                    />
                    </div>
             
          </div>
        </div>
        </section>  
    );
}
