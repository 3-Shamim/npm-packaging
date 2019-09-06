import React, { Fragment } from 'react';

var SecButton = function SecButton(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement(Fragment, null, React.createElement("button", {
    className: "btn btn-secondary ".concat(className)
  }, children), React.createElement("style", {
    jsx: true
  }, "\n                    .btn {\n                        padding: 10px 20px;\n                        border: none;\n                        color: #fff;\n                    }\n\n                    .btn-secondary {\n                        background-color: gray;\n                    }\n                "));
};

SecButton.defaultProps = {
  children: "Sec Button"
};
export default SecButton;