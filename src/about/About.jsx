import React from 'react';
import Face from '../components/rive/about/Face.jsx';
import Page from '../components/rive/about/Page';
import './about.scss';
export const About = () => {
	return (
		<div className="main">
			<div className="title">
				<h1>
					<span>A</span>
					<span>b</span>
					<span>o</span>
					<span>u</span>
					<span>t</span>
					<span>&nbsp;&nbsp;&nbsp; </span>
					<span>M</span>
					<span>e</span>
				</h1>
			</div>
			<div className="about">
				<div className="face">
					<Face />
				</div>

				<div className="page">
					<Page />
				</div>
			</div>
		</div>
	);
};
