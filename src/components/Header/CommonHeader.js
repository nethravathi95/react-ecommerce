import { Fragment } from "react";

import Navbar from "./Navbar";



const CommonHeader = (props) =>{

    return(
        <Fragment>
            <Navbar/>
            {/* breadcrumb-section */}
            <div className="breadcrumb-section breadcrumb-bg">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 text-center">
					<div className="breadcrumb-text">
						<p>{props.desc}</p>
                        <h1>{props.title}</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
    {/* end breadcrumb-section */}
   
        </Fragment>
    );
}

export default CommonHeader;