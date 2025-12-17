import "./PastProjects.css"

function PastProjects() {
  return (
    <section className="faq-section">
      <h2 className="faq-title">Past Projects</h2>

      <div className="past-projects-list">

      <div className="project-block">
        <img
          src="/media/pastprojects/beatpacer.jpeg"
          alt="Project 1"
          className="project-image"
        />
        <div className="project-text">
          <h2>BeatPacer</h2>
          <p>
            Keep every stride in pace with a beat! Beat Pacer keeps you moving at the right speed, every step of the way. Fine-tuned to your run's specified goals, users can stay on pace and be alerted when off.
              <br />
              Read More at :{" "}
              <a
                href="https://devpost.com/software/beat-pacer"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://devpost.com/software/beat-pacer
              </a>
          </p>
        </div>
      </div>

      <div className="project-block">
        <img
          src="/media/pastprojects/easycare.jpeg"
          alt="Project 2"
          className="project-image"
        />
        <div className="project-text">
          <h2>EasyCare</h2>
          <p>
            The app EasyCare is capable of assigning actions based on the brain waves of the patient.
              <br />
              Read More at :{" "}
              <a
                href="https://devpost.com/software/easylife#updates"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://devpost.com/software/easylife#updates
              </a>
          </p>
        </div>
      </div>

      <div className="project-block">
        <img
          src="/media/pastprojects/heatseekingfan.jpg"
          alt="Project 3"
          className="project-image"
        />
        <div className="project-text">
          <h2>Heatseeking Fan</h2>
          <p>
            Heatseeking Fan uses sensors to detect the hottest spot in the room and points the fan directly at it with 360° coverage.
              <br />
              Read More at :{" "}
              <a
                href="https://devpost.com/software/heatseeking-fan"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://devpost.com/software/heatseeking-fan
              </a>
          </p>
        </div>
      </div>

      <div className="project-block">
        <img
          src="/media/pastprojects/pantrypal.jpg"
          alt="Project 4"
          className="project-image"
        />
        <div className="project-text">
          <h2>Pantry Pal 2.0</h2>
          <p>
            Have you ever been at the grocery store, wondering if you finished those grapes? Pantry Pal 2.0 keeps a database of your fridge stock and adds a refreshing social media twist to your fridge!
              <br />
              Read More at :{" "}
              <a
                href="https://devpost.com/software/pantry-pal-2-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://devpost.com/software/pantry-pal-2-0
              </a>
          </p>
        </div>
      </div>

      

      <div className="project-block">
        <img
          src="/media/pastprojects/waste_segregation.jpeg"
          alt="Project 7"
          className="project-image"
        />
        <div className="project-text">
          <h2>Smart Waste Segregation and Gameification</h2>
          <p>
            Our AI waste sorter automates recycling, cutting landfill waste and promoting sustainability. With an educational web game, it boosts awareness of proper waste disposal to fight climate change.
              <br />
              Read More at :{" "}
              <a
                href="https://devpost.com/software/smart-waste-segregation-8uxpir"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://devpost.com/software/smart-waste-segregation-8uxpir
              </a>
          </p>
        </div>
      </div>

       <div className="project-block">
        <img
          src="/media/pastprojects/diagnosteo.jpg"
          alt="Project 8"
          className="project-image"
        />
        <div className="project-text">
          <h2>DiagnOsteo</h2>
          <p>
            Featuring modular diagnostic tools for in-depth anomaly detection in muscuskeletal movement, DiagnOsteo works as your personal osteopathic physician accessible in the comfort of your own home.
              <br />
              Read More at :{" "}
              <a
                href="https://devpost.com/software/diagnosteo-personal-osteopathic-diagnostic-device"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://devpost.com/software/diagnosteo-personal-osteopathic-diagnostic-device
              </a>
          </p>
        </div>

        
        </div>
        <div className="project-block">
          <img
            src="/media/pastprojects/rolle.png"
            alt="Project 9"
            className="project-image"
          />
          <div className="project-text">
            <h2>Roll-E</h2>
            <p>
              ROLL-E is an autonomous vehicle that can follow and track down a given VHF signal. It uses software-defined radio in order to process the sound waves to deduce the location of the emitted signal.
                <br />
                Read More at :{" "}
                <a
                  href="https://devpost.com/software/roll-e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://devpost.com/software/roll-e
                </a>
            </p>
          </div>
      </div>
    </div>
    </section>
  )
}

export default PastProjects
