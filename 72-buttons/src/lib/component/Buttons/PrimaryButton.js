import React, { Fragment } from 'react';

const PrimaryButton = ({ className, children }) => {
    return (
        <Fragment>
            <button className={`btn btn-primary ${className}`}>{children}</button>
            <style jsx>
                {`
                    .btn {
                        padding: 10px 20px;
                        border: none;
                        color: #fff;
                    }

                    .btn-primary {
                        background-color: blue;
                    }
                `}
            </style>
        </Fragment>
    );
}

PrimaryButton.defaultProps = {
    children: "Pri Button"
}

export default PrimaryButton;