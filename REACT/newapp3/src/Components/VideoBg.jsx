import React from 'react';

const VideoBg = ({ video }) => {
	return <video className='video-bg' src={video} autoPlay loop muted />;
};

export default VideoBg;
