import React, { HTMLAttributes } from 'react';
import { IMG_REPO } from '../../types/const';

interface Iprop extends HTMLAttributes<HTMLImageElement> {
	color?: 'white' | 'black';
}

const Logo: React.FC<Iprop> = ({ color = 'white', className, ...props }) => {
	let prefix = '';
	if (color === 'white') prefix = '--white';

	return <img {...props} className={`header__logo ${className}`} src={`${IMG_REPO}logo/logo${prefix}.png`} alt="" />;
};

export default Logo;
