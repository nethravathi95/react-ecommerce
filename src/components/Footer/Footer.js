
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

// import {image} from '../../assets/img/company-logos/'
const Footer = () =>{

    return(
		<Fragment>
		
		<div className="logo-carousel-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						{/* <div className="logo-carousel-inner"> */}
						<div className="logo-carousel-inner owl-carousel owl-theme">
        
        <div className="single-logo-item item">
								<img src={require('../../assets/img/company-logos/1.png')} alt="one logo"/>
							</div>
							<div className="single-logo-item item">
								<img src={require('../../assets/img/company-logos/2.png')} alt="two logo"/>
							</div>
							<div className="single-logo-item item">
								<img src={require('../../assets/img/company-logos/3.png')} alt="three logo"/>
							</div>
							<div className="single-logo-item item">
								<img src={require('../../assets/img/company-logos/4.png')} alt="four logo"/>
							</div>
							<div className="single-logo-item item">
								<img src={require('../../assets/img/company-logos/5.png')} alt="five logo"/>
							</div>
      </div>
						{/* </div> */}
					</div>
				</div>
			</div>
		</div>
		
        <div className="footer-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-6">
					<div className="footer-box about-widget">
						<h2 className="widget-title">About us</h2>
						<p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-box get-in-touch">
						<h2 className="widget-title">Get in Touch</h2>
						<ul>
							<li>xx yyy zzzz.</li>
							<li>support@intelliswift.com</li>
							<li>+00 111 222 3333</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-box pages">
						<h2 className="widget-title">Pages</h2>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-box subscribe">
						<h2 className="widget-title">Subscribe</h2>
						<p>Subscribe to our mailing list to get the latest updates.</p>
						<form action="index.html">
							<input type="email" placeholder="Email"/>
							<button type="submit"><i className="fas fa-paper-plane"></i></button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	</Fragment>
    );
}

export default Footer;