import React, { Children } from 'react';

const PrimaryButton = ({ children, className,...props }) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};

export default PrimaryButton;
