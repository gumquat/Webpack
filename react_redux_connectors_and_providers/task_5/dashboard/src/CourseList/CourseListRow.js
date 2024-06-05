import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  th: {
    fontWeight: 'bold',
    padding: '8px',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});


function CourseListRow({ isHeader, textFirstCell, textSecondCell, onChangeRow, id }) {
  const handleCheckboxChange = (event) => {
    onChangeRow(id, event.target.checked); // Call the onChangeRow function
  };

  const renderCheckbox = () => {
    if (!isHeader) {
      return (
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          aria-label={`Select ${textFirstCell}`}
        />
      );
    }
    return null;
  };

  return (
    <tr className={css(rowStyle, isChecked && styles.rowChecked)}>
      <CellType className={css(cellStyle)}>{textFirstCell}</CellType>
      {textSecondCell !== null && (
        <>
          <CellType className={css(cellStyle)}>{textSecondCell}</CellType>
          {!isHeader && (
            <CellType className={css(cellStyle)}>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            </CellType>
          )}
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChangeRow: PropTypes.func.isRequired, // Add propType for onChangeRow
  id: PropTypes.number.isRequired, // Add propType for id
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;