import React from 'react';
import './ProgressBar.css';

const Progress = ({ className, done }) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className={`progress-done ${className}`} style={style}></div>
		</div>
	)
}

export default Progress