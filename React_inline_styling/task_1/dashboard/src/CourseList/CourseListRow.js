import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const CellType = isHeader ? 'th' : 'td';
  const rowStyle = isHeader ? { backgroundColor: '#deb5b545' } : { backgroundColor: '#f5f5f5ab' };

  return (
    <tr style={rowStyle}>
      {textSecondCell === null ? (
        <CellType colSpan={isHeader ? "2" : undefined}>{textFirstCell}</CellType>
      ) : (
        <>
          <CellType>{textFirstCell}</CellType>
          <CellType>{textSecondCell}</CellType>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

export default CourseListRow;
