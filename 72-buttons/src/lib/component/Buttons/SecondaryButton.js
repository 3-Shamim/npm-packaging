import React, { Fragment } from 'react';

const SecButton = ({ className, children }) => {
    return (
        <Fragment>
            <button className={`btn btn-secondary ${className}`}>{children}</button>
            <style jsx>
                {`
                    .btn {
                        padding: 10px 20px;
                        border: none;
                        color: #fff;
                    }

                    .btn-secondary {
                        background-color: gray;
                    }
                `}
            </style>
        </Fragment>

    );
}

SecButton.defaultProps = {
    children: "Sec Button"
}

export default SecButton;