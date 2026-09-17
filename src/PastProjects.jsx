import "./PastProjects.css"
const projects = [
  {
    name: "BeatPacer",
    image: "/media/pastprojects/beatpacer.jpeg",
    description:
      "Keep every stride in pace with a beat! Beat Pacer keeps you moving at the right speed, every step of the way. Fine-tuned to your run's specified goals, users can stay on pace and be alerted when off.",
    devpost: "https://devpost.com/software/beat-pacer",
  },
  {
    name: "EasyCare",
    image: "/media/pastprojects/easycare.jpeg",
    description:
      "The app EasyCare is capable of assigning actions based on the brain waves of the patient.",
    devpost: "https://devpost.com/software/easylife#updates",
  },
  {
    name: "Heatseeking Fan",
    image: "/media/pastprojects/heatseekingfan.jpg",
    description:
      "Heatseeking Fan uses sensors to detect the hottest spot in the room and points the fan directly at it with 360° coverage.",
    devpost: "https://devpost.com/software/heatseeking-fan",
  },
  {
    name: "Pantry Pal 2.0",
    image: "/media/pastprojects/pantrypal.jpg",
    description:
      "Have you ever been at the grocery store, wondering if you finished those grapes? Pantry Pal 2.0 keeps a database of your fridge stock and adds a refreshing social media twist to your fridge!",
    devpost: "https://devpost.com/software/pantry-pal-2-0",
  },
  {
    name: "Smart Waste Segregation and Gameification",
    image: "/media/pastprojects/waste_segregation.jpeg",
    description:
      "Our AI waste sorter automates recycling, cutting landfill waste and promoting sustainability. With an educational web game, it boosts awareness of proper waste disposal to fight climate change.",
    devpost: "https://devpost.com/software/smart-waste-segregation-8uxpir",
  },
  {
    name: "DiagnOsteo",
    image: "/media/pastprojects/diagnosteo.jpg",
    description:
      "Featuring modular diagnostic tools for in-depth anomaly detection in muscuskeletal movement, DiagnOsteo works as your personal osteopathic physician accessible in the comfort of your own home.",
    devpost:
      "https://devpost.com/software/diagnosteo-personal-osteopathic-diagnostic-device",
  },
  {
    name: "Roll-E",
    image: "/media/pastprojects/rolle.png",
    description:
      "ROLL-E is an autonomous vehicle that can follow and track down a given VHF signal. It uses software-defined radio in order to process the sound waves to deduce the location of the emitted signal.",
    devpost: "https://devpost.com/software/roll-e",
  },
]

function PastProjects() {
  return (
    <section className="faq-section">
      <h2 className="pastprojects-title">Past Projects</h2>

      <div className="past-projects-list">
        {projects.map((project) => (
          <div className="project-block" key={project.name}>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />

            <div className="project-text">
              <h2>{project.name}</h2>

              <p>
                {project.description}
                <br />
                Read More at :{" "}
                <a
                  href={project.devpost}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.devpost}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PastProjects
