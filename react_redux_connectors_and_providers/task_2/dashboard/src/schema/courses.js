import { schema, normalize } from 'normalizr';

// Define a schema for the course entity
const course = new schema.Entity('courses', {}, { idAttribute: 'id' });
// Define a schema for the courses list
const courses = new schema.Array(course);
// Function to normalize courses data
export const coursesNormalizer = (data) => normalize(data, courses);