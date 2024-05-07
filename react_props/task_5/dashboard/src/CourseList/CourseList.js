import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList({ listCourses }) {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 && (
          // <CourseListRow textFirstCell='ES6' textSecondCell='60' isHeader={false} />
          <CourseListRow textFirstCell='No course available yet' isHeader={false} />
        )}
        {listCourses.map(course => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
        ))}
          {/* <CourseListRow textFirstCell='Webpack' textSecondCell='20' isHeader={false} />
          <CourseListRow textFirstCell='React' textSecondCell='40' isHeader={false} /> */}
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