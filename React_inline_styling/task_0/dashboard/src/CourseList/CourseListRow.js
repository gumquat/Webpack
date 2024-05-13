import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const CellType = isHeader ? 'th' : 'td';

  return (
    <tr>
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
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

export default CourseListRow;
