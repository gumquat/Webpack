import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import { CourseShape } from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  courseList: {
    width: '90%',
    borderCollapse: 'collapse',
    margin: '1rem auto',
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: 400,
    border: '1px solid whitesmoke',
  },
});

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.courseList)} id='CourseList'>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 && (
          <CourseListRow textFirstCell='No course available yet' isHeader={false} />
        )}
        {listCourses.map(course => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
        ))}
      </tbody>
    </table>
  );
}

// takes an array of shapes
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;