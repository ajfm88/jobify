import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className='container page'>
        {/* Info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Find Your Next Career Opportunity with Jobify! Introducing the
            ultimate Job Application Tracking Website. Keep track of all your
            job applications in one place, receive real-time updates, and never
            miss an opportunity. Say goodbye to scattered job applications and
            never-ending email threads. Start your job search journey with
            confidence today and land your dream job.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
