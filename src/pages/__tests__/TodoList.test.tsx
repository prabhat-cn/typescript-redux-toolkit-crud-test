import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Modal } from 'reactstrap';
import { store } from '../../store/store';
import TodoList from '../TodoList';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// import { useAppSelector, useAppDispatch } from '../../store/reducers/hooks';
Enzyme.configure({ adapter: new EnzymeAdapter() });

// jest.mock('react-redux', () => ({
//   useAppDispatch: jest.fn(),
//   useAppSelector: jest.fn(),
// }));

jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

// test('renders without error', () => {
//   const wrapper = shallow(
//     <Provider store={store}>
//       <TodoList />
//     </Provider>
//   );
//   const todoComponent = wrapper.find("[data-test='component-todolist']");
//   expect(todoComponent.length).toBe(0);
// });

interface TestProps {
  wrapper: any;
  val: any;
}

const setup = () =>
  mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
// const findByTestAttr = ({ wrapper, val }: TestProps) =>
//   wrapper.find(`[data-test='${val}']`);

describe('<TodoList />', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let wrapper: any;

  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  });

  test('renders without error', () => {
    console.log(wrapper.debug());

    // const todoComponent = findByTestAttr(wrapper, 'component-todolist');
    const todoComponent = wrapper.find("[data-test='component-todolist']");
    expect(todoComponent.length).toBe(1);
  });

  // test('renders add modal', () => {
  //   const wrapper = setup();
  //   const addModal = wrapper.find("[data-test='add-modal']");
  //   // expect(addModal.length).toBe(0);
  //   expect(addModal).toHaveLength(1);
  // });

  // test('opens add modal when button is clicked', () => {
  //   const wrapper = setup();
  //   const addModal = wrapper.find("[data-test='add-modal']");
  //   expect(addModal.prop<unknown>('isOpen')).toBe(false);
  //   const addButton = wrapper.find("[data-test='add-click']");
  //   // wrapper.find('button').simulate('click');
  //   addButton.simulate('click');
  //   expect(addModal.prop<unknown>('isOpen')).toBe(true);
  // });

  // test('should render as expected when add modal is false', () => {
  //   const wrapper = setup();
  //   expect(wrapper.find("[data-test='add-modal']").prop('isOpen')).toBe(
  //     'invisibleModal'
  //   );
  //   expect(wrapper.find('isOpen').prop('isOpen')).toBe('invisibleShade');
  // });
});
