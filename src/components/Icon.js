import * as PropTypes from 'prop-types';
import React from 'react';
import icons from '../assets/icons/icons.svg';

const Icon = (props) => {
    return (
        <svg
            className={`icon icon-${props.className}`}
            viewBox="0 0 16 16">
            <use xlinkHref={`${icons}#icon-${props.icon}`}/>
        </svg>
    );
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Icon;
