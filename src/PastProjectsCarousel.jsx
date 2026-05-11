import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import "./PastProjectsCarousel.grey.css"

const projects = [
  {
    image: "/media/pastprojects/beatpacer.jpeg",
    alt: "Project 1",
    title: "BeatPacer",
    description:
      "Keep every stride in pace with a beat! Beat Pacer keeps you moving at the right speed, every step of the way. Fine-tuned to your run's specified goals, users can stay on pace and be alerted when off.",
    link: "https://devpost.com/software/beat-pacer",
  },
  {
    image: "/media/pastprojects/easycare.jpeg",
    alt: "Project 2",
    title: "EasyCare",
    description:
      "The app EasyCare is capable of assigning actions based on the brain waves of the patient.",
    link: "https://devpost.com/software/easylife#updates",
  },
  {
    image: "/media/pastprojects/heatseekingfan.jpg",
    alt: "Project 3",
    title: "Heatseeking Fan",
    description:
      "Heatseeking Fan uses sensors to detect the hottest spot in the room and points the fan directly at it with 360° coverage.",
    link: "https://devpost.com/software/heatseeking-fan",
  },
  {
    image: "/media/pastprojects/pantrypal.jpg",
    alt: "Project 4",
    title: "Pantry Pal 2.0",
    description:
      "Have you ever been at the grocery store, wondering if you finished those grapes? Pantry Pal 2.0 keeps a database of your fridge stock and adds a refreshing social media twist to your fridge!",
    link: "https://devpost.com/software/pantry-pal-2-0",
  },
  {
    image: "/media/pastprojects/waste_segregation.jpeg",
    alt: "Project 7",
    title: "Smart Waste Segregation and Gameification",
    description:
      "Our AI waste sorter automates recycling, cutting landfill waste and promoting sustainability. With an educational web game, it boosts awareness of proper waste disposal to fight climate change.",
    link: "https://devpost.com/software/smart-waste-segregation-8uxpir",
  },
  {
    image: "/media/pastprojects/diagnosteo.jpg",
    alt: "Project 8",
    title: "DiagnOsteo",
    description:
      "Featuring modular diagnostic tools for in-depth anomaly detection in muscuskeletal movement, DiagnOsteo works as your personal osteopathic physician accessible in the comfort of your own home.",
    link: "https://devpost.com/software/diagnosteo-personal-osteopathic-diagnostic-device",
  },
  {
    image: "/media/pastprojects/rolle.png",
    alt: "Project 9",
    title: "Roll-E",
    description:
      "ROLL-E is an autonomous vehicle that can follow and track down a given VHF signal. It uses software-defined radio in order to process the sound waves to deduce the location of the emitted signal.",
    link: "https://devpost.com/software/roll-e",
  },
]

function PastProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="faq-section">
      <h2 className="pastprojects-title">Past Projects</h2>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((project) => (
              <div className="embla__slide" key={project.title}>
                <div className="project-block">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="project-image"
                  />
                  <div className="project-text">
                    <h2>{project.title}</h2>
                    <p>
                      {project.description}
                      <br />
                      Read More at :{" "}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.link}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="embla__prev" onClick={scrollPrev} type="button">
          &#10094;
        </button>
        <button className="embla__next" onClick={scrollNext} type="button">
          &#10095;
        </button>
      </div>
    </section>
  )
}

export default PastProjectsCarousel
