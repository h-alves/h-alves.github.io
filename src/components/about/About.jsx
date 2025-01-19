import './about.css'
import ME from '../../assets/me-about.jpeg'
import { FaAward } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FaMobileAlt className='about__icon'/>
                            <h5>Apps</h5>
                            <small>4 Published</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>8+ Completed</small>
                        </article>
                    </div>

                    <p>
                        iOS developer at the Apple Developer Academy for two years, with 4 apps published in the App Store and 1 Swift Student Challenge award from Apple. Also, studying and developing software since 2019 and currently studying Computer Science at PUCPR.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let&apos;s Talk</a>
                </div>
            </div>
        </section>
    )
}