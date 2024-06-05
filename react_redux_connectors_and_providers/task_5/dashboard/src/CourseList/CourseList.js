import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import { CourseShape } from './CourseShape';
import { StyleSheet, css } from 'aphrodite';
import { fetchCourses, selectCourse, unSelectCourse } from './actions/courseActionCreators';
import { getListCourses } from './selectors/courseSelector'; // import the selector

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

const onChangeRow = (id, checked) => {
  if (checked) {
    selectCourse(id); // Dispatch the selectCourse action
  } else {
    unSelectCourse(id); // Dispatch the unSelectCourse action
  }
};

const mapStateToProps = (state) => ({
  listCourses: getListCourses(state), // Map the listCourses from the selector
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

const ConnectedCourseList = connect(mapStateToProps, mapDispatchToProps)(CourseList);


function CourseList({ listCourses, fetchCourses, selectCourse, unSelectCourse }) {
  useEffect(() => {
    fetchCourses(); // Fetch courses when the component mounts
  }, [fetchCourses]);
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

export default ConnectedCourseList;