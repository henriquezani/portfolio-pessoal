import React from 'react'
import propTypes from 'prop-types';
import{
    IconLinkedin,
    IconTwitter,
    IconGitHub,
    IconLogo,
    IconExternal
} from './index'

const Icon = ({ name }) => {
    switch(name){
        case 'GitHub':
            return <IconGitHub />;
        case 'Linkedin':
            return <IconLinkedin />;
        case 'Twitter':
            return <IconTwitter />;
        case 'Logo':
            return <IconLogo />
        default:
            return <IconExternal />
    }
};

Icon.propTypes = {
    name: propTypes.string.isRequired,
};

export default Icon; 