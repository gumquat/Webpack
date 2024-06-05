import React from 'react';
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

function CourseListRow({ isHeader, textFirstCell, textSecondCell, isChecked, onChangeRow, id }) {
  const CellType = isHeader ? 'th' : 'td';
  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;
  const cellStyle = isHeader ? styles.th : null;

  const handleCheckboxChange = () => {
    onChangeRow(id, !isChecked);
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
  isChecked: PropTypes.bool.isRequired, // New prop for isChecked
  onChangeRow: PropTypes.func.isRequired, // New prop for onChangeRow
  id: PropTypes.number.isRequired, // New prop for id
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;