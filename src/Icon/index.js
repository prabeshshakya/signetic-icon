import React from 'react';
import IconPaths from './Icon';

const SVGICON = (props) => {
    return (
        <svg
            width={props.size}
            fill={props.color} 
            height={props.size}
            viewBox="0 0 24 24" 
            className={props.className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d={IconPaths[props.iconName]}/>
        </svg>
    );
}

SVGICON.defaultProps = {
    iconName: 'DismissCircle',
    size: '16px',
    color: '#000000',
    className: '',
}

export default SVGICON;