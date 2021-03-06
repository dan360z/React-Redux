import React from 'react';
import CourseForm from '../../../components/Courses/CourseForm';
import renderer from 'react-test-renderer';
import { courses, authors } from '../../../../tools/mockData';

const props = {
  course: courses[0],
  authors: authors,
  onSave: jest.fn(),
  onChange: jest.fn(),
  saving: true,
}

it('sets submit button label "Saving..." when saving is true', () => {
  const tree = renderer.create( <CourseForm {...props} />);
  expect(tree).toMatchSnapshot();
});

it('sets submit button label "Save" when saving is false', () => {
  props.saving = false;
  const tree = renderer.create( <CourseForm {...props} />);
  expect(tree).toMatchSnapshot();
});
