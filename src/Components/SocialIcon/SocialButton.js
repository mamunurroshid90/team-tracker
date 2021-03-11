import React from 'react';

const SocialButton = (props) => {
	const { link, color, fontName } = props;

	return (
		<div className="social-button">
			<a href={link} target="_blank" rel="noreferrer">
				<i className={fontName}> </i>
			</a>
		</div>
	);
};

export default SocialButton;
