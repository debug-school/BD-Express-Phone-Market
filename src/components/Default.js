import React from 'react';
import {Link} from 'react-router-dom';

const Default = (props) => {

	return (
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
					<h1 className="display-3">404</h1>
					<h1>error</h1>
					<h2>page not found</h2>
					<h3>
						the requested URL 
						<strong className="text-danger"> "{props.location.pathname}" </strong>
						was not found
					</h3>
					<Link to='/'>
						<button className="btn btn-success btn-lg mt-3"> go to homepage </button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Default;