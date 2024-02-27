
import Card from './Card';

export default function Project() {
    return (
        <section className='mt-auto px-3 py-3 mb-auto' id='projects'>
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
                        title="Anomaly detection using VAEs"
                        cardText="Dissertation Presented for the Degree of MSc in Statistics with Data Science(June 2023). Used VAEs to detect anomalies in Networks with 99% accuracy"
                        linkto= "https://github.com/kartik481/Anomaly-detection-using-AE-and-VAEs"
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
        </div>
        </section>  
    );
}
