import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Take control of your job hunt with our comprehensive MERN stack
            application. Create your personalized profile and start logging job
            applications with detailed tracking for company, position, job type
            (full-time, part-time, contract), and location. Monitor your
            application status from pending to interview to offer, with
            automatic timestamps to track your progress over time.
          </p>
          <p>
            You can also click on our <span>Login / Demo User</span> button to
            test-drive the full application - no registration required. In the
            Login page, click on the <span>Explore The App</span> button to
            explore all features and see how <span>Jobify</span> can transform
            your job search experience.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
