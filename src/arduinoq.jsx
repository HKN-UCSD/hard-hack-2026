import "./arduinoq.css";

function ArduinoUnoQ() {
  return (
    <section className="arduinoq-section">
      <h2 className="faq-title">About Arduino Uno Q</h2>

      <p className="about-arduinoq">
        We are grateful for Qualcomm’s donation of Arduino Uno Q boards for this
        year’s event. The Arduino Uno Q uniquely combines a Linux-capable
        processor with a microcontroller, enabling participants to run full
        programs while directly interfacing with hardware. Equipped with
        onboard Wi-Fi, Bluetooth, and ample storage, the board provides an
        excellent platform for rapid experimentation and innovative project
        development. Select participants will receive an Arduino Uno Q, giving
        them the opportunity to work hands-on with cutting-edge technology and
        push their creativity even further.
      </p>

      <div className="project-block">
        <img
          src="/media/arduinounoq/Background-features-2.jpeg"
          alt="Arduino Uno Q performance and features"
          className="project-image"
        />
        <div className="project-text">
          <h3>Performance & Power</h3>
          <p>
            The Arduino Uno Q features a Qualcomm Dragonwing QRB2210 SoC with a
            quad-core Arm Cortex-A53 at 2.0 GHz and an integrated Adreno GPU,
            running Debian Linux for high-level computing. It’s paired with an
            STM32U585 Cortex-M33 microcontroller for real-time control. With
            16 GB eMMC storage and dual ISPs supporting up to 25 MP at 30 fps,
            the platform is well-suited for AI vision, audio processing, smart
            cameras, voice assistants, and advanced robotics.
          </p>
        </div>
      </div>

      <div className="project-block reverse">
        <img
          src="/media/arduinounoq/App-Lab-image.png"
          alt="Arduino App Lab workflow"
          className="project-image"
        />
        <div className="project-text">
          <h3>Hybrid Development with Arduino App Lab</h3>
          <p>
            The Uno Q introduces a new approach to embedded development through
            Arduino App Lab, bringing Python applications, Arduino sketches,
            and AI models together in a unified workflow. Developers can mix
            Arduino code, Python, and other tools in one environment, choosing
            the right tool for each task. With built-in Wi-Fi and Bluetooth, the
            board supports IoT devices, remote monitoring, and intelligent
            wireless systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ArduinoUnoQ;
