
import "./arduinoq.css";


function ArduinoUnoQ() {
  return (
    <section className="arduinoq-section" style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 0' }}>
      <h2 className="faq-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>About Arduino Uno Q</h2>
      <p className="about-arduinoq" style={{ color: '#2d535e', marginBottom: '2.5rem', textAlign: 'center' }}>
        We’re very grateful for Qualcomm’s long-time support of Hard Hack and their donation of 10 Arduino Uno Q boards for this year’s event. The Arduino Uno Q brings together a Linux-capable processor and a microcontroller, letting you run programs and control hardware at the same time. With Wi-Fi, Bluetooth, and plenty of storage, it’s a great board for trying out new ideas and building cool projects. Thanks to Qualcomm, our hackers get to use the latest tech and push their creativity even further.
      </p>

      {/* Feature 1: AI in a Blink */}
      <div className="project-block" style={{ marginBottom: '3rem' }}>
        <img
          src="/media/arduinounoq/arduinounoq-chip.avif"
          alt="AI in a blink - Arduino Uno Q"
          className="project-image"
          style={{ maxWidth: 320, width: '100%', height: 'auto', marginRight: 24 }}
        />
        <div className="project-text">
          <h3>AI in a Blink</h3>
          <p>
            Thanks to Qualcomm, our teams can experiment with vision and sound projects that respond to the world around them. The Uno Q lets you do things like image recognition and audio processing right on the board, without needing to connect to the cloud. We can’t wait to see what everyone comes up with using these boards!
          </p>
        </div>
      </div>

      {/* Feature 2: Quick Start Apps */}
      <div className="project-block" style={{ flexDirection: 'row-reverse' }}>
        <img
          src="/media/arduinounoq/arduinounoq-view.jpg"
          alt="Quick start apps - Arduino Uno Q"
          className="project-image"
          style={{ maxWidth: 320, width: '100%', height: 'auto', marginLeft: 24 }}
        />
        <div className="project-text">
          <h3>Quick Start Apps</h3>
          <p>
            The Uno Q comes with Arduino App Lab, so you can get started quickly with lots of examples and templates. You can mix Arduino code, Python, and more, all in one place. Whether you’re new or experienced, you’ll be able to build and test your ideas faster at Hard Hack, thanks to Qualcomm’s donation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ArduinoUnoQ;
