import './header.css';
import CTA from './CTA';
// import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

export default function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I&apos;m</h5>
                <h1>Henrique Alves</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>
                <HeaderSocials/>

                {/* <div className='me'>
                    <img src={ME} alt="me" />                    
                </div> */}
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}