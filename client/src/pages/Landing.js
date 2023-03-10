import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      <Wrapper>
        {user && <Navigate to='/' />}
        <nav>
          <Logo />
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
              job applications in one place, receive real-time updates, and
              never miss an opportunity. Say goodbye to scattered job
              applications and never-ending email threads. Start your job search
              journey with confidence today and land your dream job.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login / Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
