import React from 'react'
import Slider from 'react-slick';
import { GoArrowRight } from 'react-icons/go';

const Project = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    return (
        <div className='project'>
            <section className='mywork'>
                <span className="text-box">MY WORK</span>
                <h1>RECENT PROJECT</h1>
            </section>
            
                <Slider className="slides" {...settings}>
                    <div className='slider'>
                        <img className='slide-img ' src="./fitness.png" alt="" />
                        <div className='gallery'></div>
                        <h3>Website Design</h3>
                        <span>Web Design,App Design</span>
                        <button className='btn btn-primary rounded-5' ><GoArrowRight/></button>
                    </div>
                    <div className='slider'>
                        <img className='slide-img' src="./tshirt.png" alt="" />
                        <h3>Website Design</h3>
                        <span>Web Design,App Design</span>
                        <button className='btn btn-primary rounded-5' ><GoArrowRight/></button>
                    </div>
                    <div className='slider'>
                        <img className='slide-img' src="./port.png" alt="" />
                        <h3>Website Design</h3>
                        <span>Web Design,App Design</span>
                        <button className='btn btn-primary rounded-5' ><GoArrowRight/></button>
                    </div>
                    <div className='slider'>
                        <img className='slide-img' src="./travell.png" alt="" />
                        <h3>Website Design</h3>
                        <span>Web Design,App Design</span>
                        <button className='btn btn-primary rounded-5' ><GoArrowRight/></button>
                    </div>
                    <div className='slider'>
                        <img className='slide-img' src="./portfolio.png" alt="" />
                        <h3>Website Design</h3>
                        <span>Web Design,App Design</span>
                        <button className='btn btn-primary rounded-5' ><GoArrowRight/></button>
                    </div>
                </Slider>
            
        </div>
    )
}

export default Project