import React from 'react';

const Header = (props) => {
	const { title, logo, banner } = props;

	const divStyle = {
		height: '300px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		backgroundSize: 'cover'
	};

	if (banner) {
		divStyle.background = 'url(' + banner + ')';
		divStyle.backgroundRepeat = 'no-repeat';
		divStyle.backgroundSize = 'cover';
	}

	return (
		<div className="headersection" style={divStyle}>
			{logo ? <img className="image-square img-thumbnail" src={logo} alt="" /> : <h1>{title || ''}</h1>}
		</div>
	);
};

export default Header;
