import "../Styles/style.css";
export default function Project() {
  return (
    <div>
      <div className="Navbar">
        <div className="Title"> sports Club</div>
        <div className="Navigation">
          <div className="Nav">Home</div>
          <div className="Nav">About</div>
          <div className="Nav">Services</div>
          <div className="Nav">Contact</div>
        </div>
      </div>

      <div className="Aboout">
        <div className="WebName">
          <h1>Welcome to sports Club</h1>
        </div>
        <div className="Paragraph">
          <p>
            A sports club is more than just a place to train; it is where
            discipline, dedication, and determination come together to shape
            champions. Every practice builds strength, every challenge develops
            resilience, and every team effort creates unity. Success is earned
            through hard work, consistency, and belief in oneself and the team.
            In this club, we push limits, support one another, and strive for
            excellence, knowing that true victory lies not only in winning, but
            in the courage to give our best every single day.
          </p>
        </div>
        <div className="AboutButton">
          <button className="GetStartedButton">Get started</button>
        </div>
      </div>

      <div className="services">
        <h1>Our services</h1>
        <div className="ServicesCard">
          <div className="card">
            <div>
              <h2>Professional Training Programs</h2>
            </div>
            <div className="CardInfo">
              <p>
                Expert coaching for different sports focusing on skill
                development, fitness, discipline, and performance improvement
                for beginners to advanced athletes.
              </p>
            </div>
            <div>
              <button className="CardButton">Get Started</button>
            </div>
          </div>
          <div className="card">
            <div>
              <h2>Fitness Sessions</h2>
            </div>
            <div className="CardInfo">
              <p>
                Strength training, endurance building, and injury-prevention
                workouts designed to improve overall physical fitness and
                athletic performance.
              </p>
            </div>
            <div>
              <button className="CardButton">Get Started</button>
            </div>
          </div>
          <div className="card">
            <div>
              <h2>Tournaments Management</h2>
            </div>
            <div className="CardInfo">
              <p>
                Organizing inter-club matches, tournaments, and sports events to
                give players real-world competitive experience and boost
                teamwork and confidence.
              </p>
            </div>
            <div>
              <button className="CardButton">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>© 2025 sports Club. All rights reserved.</p>
      </div>
    </div>
  );
}
