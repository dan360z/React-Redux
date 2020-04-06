import React from 'react';
import CourseForm from '../../components/Courses/CourseForm';
import renderer from 'react-test-renderer';
import { courses, authors } from '../../../tools/mockData';

// const props = {
//   courses: courses[0],
//   authors: authors,
//   onSave: jest.fn(),
//   onChange: jest.fn(),
//   saving
// }

it('sets submit button label "Saving..." when saving is true', () => {
  const tree = renderer.create(
    <CourseForm
      courses={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});