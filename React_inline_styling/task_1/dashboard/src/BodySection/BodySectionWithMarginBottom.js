import React from 'react';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css'; // Importing the CSS file
import BodySection from './BodySection'; // Importing the BodySection component

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BodySectionWithMarginBottom;

// to render
{/* <BodySectionWithMarginBottom title="test">
  <p>test</p>
</BodySectionWithMarginBottom> */}