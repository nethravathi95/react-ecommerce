
import React,{useEffect,useState,useRef,Fragment} from 'react';
import {Link,NavLink} from 'react-router-dom';

import Navbar from './Navbar';
const HomeHeader = () =>{

  
    return(

        <Fragment>
             
     <Navbar/>
  
  
        <div className="hero-area hero-bg">
          <div className="container">
              <div className="row">
                  <div className="col-lg-9 offset-lg-2 text-center">
                      <div className="hero-text">
                          <div className="hero-text-tablecell">
                              <p className="subtitle">Fresh & Organic</p>
                              <h1>Delicious Seasonal Fruits</h1>
                              <div className="hero-btns">
                                  <Link to="shop.html" className="boxed-btn">Fruit Collection</Link>
                                  <Link to="contact.html" className="bordered-btn">Contact Us</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>


      
        {/* <div className={`${classNamees['jumbotron']} `}>
    <div className="container">
      <h1 className="display-4">Fluid jumbotron</h1>
      <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>
  </div> */}
        {/* <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1" className=""></li>
            <li data-target="#myCarousel" data-slide-to="2" className=""></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="first-slide" src={bg} alt="First slide"/>
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1>Example headline.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="second-slide" src={bg} alt="Second slide"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="third-slide" src={bg} alt="Third slide"/>
              <div className="container">
                <div className="carousel-caption text-right">
                  <h1>One more for good measure.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div> */}



        </Fragment>
    );
}

export default HomeHeader;