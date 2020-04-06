import React from 'react';
import { cleanup, render } from 'react-testing-library';
import CourseForm from '../../../components/Courses/CourseForm';

afterEach(cleanup);

function renderCourseform(args) {
  let defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it('should render Add Course header', () => {
  const { getByText } = renderCourseform();
  getByText("Add Course");
}) 

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderCourseform();
  getByText('Save');
});

it('should label save button as "Saving..." when saving', () => {
  const { getByText, debug } = renderCourseform({ saving: true });
  // debug();
  getByText('Saving...');
});
