import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Find your next career opportunity with Jobify! Introducing the
              ultimate job application tracking website. Keep track of all your
              job applications in one place, receive real-time updates, and
              never miss an opportunity. Say goodbye to scattered job
              applications and never-ending email threads. Start your job search
              journey with confidence today and land your dream job.<br />
              There is also a demo account available for testing purposes. 
              In the login screen, just click on the "Demo App" button to test
              the application using that demo account.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
