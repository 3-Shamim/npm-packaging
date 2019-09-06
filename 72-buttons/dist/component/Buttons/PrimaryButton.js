import React, { Fragment } from 'react';

var PrimaryButton = function PrimaryButton(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement(Fragment, null, React.createElement("button", {
    className: "btn btn-primary ".concat(className)
  }, children), React.createElement("style", {
    jsx: true
  }, "\n                    .btn {\n                        padding: 10px 20px;\n                        border: none;\n                        color: #fff;\n                    }\n\n                    .btn-primary {\n                        background-color: blue;\n                    }\n                "));
};

PrimaryButton.defaultProps = {
  children: "Pri Button"
};
export default PrimaryButton;