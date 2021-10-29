import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import TodoList from '../TodoList';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

// test('renders without error', () => {
//   const wrapper = shallow(
//     <Provider store={store}>
//       <TodoList />
//     </Provider>
//   );
//   const todoComponent = wrapper.find("[data-test='component-todolist']");
//   expect(todoComponent.length).toBe(0);
// });

describe('<TodoList />', () => {
  test('renders without error', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
    const todoComponent = wrapper.find("[data-test='component-todolist']");
    expect(todoComponent.length).toBe(0);
  });
});
