import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

export default function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>Bem Lembrar: Your client agenda!</h3>

                    <div className="portfolio__item-cta">
                        <a href="https://github.com/h-alves/BemLembrar.git" className='btn' target='_blank'>GitHub</a>
                        <a href="https://apps.apple.com/br/app/bem-lembrar/id6471463039" className='btn btn-primary' target='_blank'>AppStore</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>Desafika</h3>

                    <div className="portfolio__item-cta">
                        <a href="https://github.com/h-alves/Desafika.git" className='btn' target='_blank'>GitHub</a>
                        <a href="https://apps.apple.com/br/app/desafika/id6450612023" className='btn btn-primary' target='_blank'>AppStore</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>Karavan</h3>

                    <div className="portfolio__item-cta">
                        <a href="https://www.usekaravan.com/" className='btn' target='_blank'>Site</a>
                        <a href="https://apps.apple.com/br/app/karavan/id6736840125" className='btn btn-primary' target='_blank'>AppStore</a>
                    </div>
                </article>
            </div>
        </section>
    )
}