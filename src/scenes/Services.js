import services1 from './../assets/services1.png'
import services2 from './../assets/services2.png'
import services3 from './../assets/services3.png'


export default function Services(){
    return (
        <section className="services">
            <div className="services__item">
                <img src={services1} alt="" className='services__item--img' />
                <p className="services__item__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis debitis numquam cupiditate veritatis quisquam repudiandae 
                ipsa magnam impedit ipsam voluptatem dolore optio culpa quis aperiam, aspernatur provident, 
                ullam facilis non?
                </p>
            </div>

            <div className="services__item">
                <img src={services2} alt="" className='services__item--img' />
                <p className="services__item__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis debitis numquam cupiditate veritatis quisquam repudiandae 
                ipsa magnam impedit ipsam voluptatem dolore optio culpa quis aperiam, aspernatur provident, 
                ullam facilis non?
                </p>
            </div>

            <div className="services__item">
                <img src={services3} alt="" className='services__item--img' />
                <p className="services__item__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis debitis numquam cupiditate veritatis quisquam repudiandae 
                ipsa magnam impedit ipsam voluptatem dolore optio culpa quis aperiam, aspernatur provident, 
                ullam facilis non?
                </p>
            </div>
        </section>
    )
}