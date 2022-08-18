
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import {Logo} from '../components';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo/>     
            </nav>
            <div className='container page'>
                {/* info  */}
                <div className='info'>
                    <h1>Job <span>Tracking</span> App</h1>
                    <p>
                    I'm baby etsy wolf normcore yes plz yuccie scenester bespoke crucifix umami copper mug portland ennui waistcoat pork belly fam. Man bun cray hexagon, artisan four loko sartorial biodiesel synth. Tousled beard green juice, locavore squid microdosing edison bulb
                    </p>
                    <Link to='/register' className='btn hero-btn'>Login/Register</Link>
                </div>

                <img src={main} alt='main' className='main-img'/>
            </div>
        </Wrapper>
    )
}

export default Landing
