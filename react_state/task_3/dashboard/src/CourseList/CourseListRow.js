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

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const CellType = isHeader ? 'th' : 'td';
  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;
  const cellStyle = isHeader ? styles.th : null;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr className={css(rowStyle, isChecked && styles.rowChecked)}>
      {textSecondCell === null ? (
        <CellType colSpan={isHeader ? "2" : undefined} className={css(cellStyle)}>
          {isHeader ? textFirstCell : <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />}
        </CellType>
      ) : (
        <>
          <CellType className={css(cellStyle)}>{textFirstCell}</CellType>
          <CellType className={css(cellStyle)}>{textSecondCell}</CellType>
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
};

export default CourseListRow;
