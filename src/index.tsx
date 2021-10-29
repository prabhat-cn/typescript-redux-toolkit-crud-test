import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/lux/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store';

// testing
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// describe('<App />', () => {
//   // let store: any;
//   // const middlewares: any[] = [];
//   // const mockStore = configureStore(middlewares);

//   // beforeEach(() => {
//   //   store = mockStore({});
//   // });

//   test('should render correctly', () => {
//     const component = shallow(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );

//     expect(component.find(<App />)).toHaveLength(1);
//     // expect(component.find(Table)).toHaveLength(1);
//   });
// });

// describe('Testing MenuWeb', () => {
//   it('should render Menu Web correctly', () => {
//     const wrapper = shallow(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//     expect(wrapper).toMatchSnapshot();
//   });
// });

// describe('With React Testing Library', () => {
//   const initialState = { output: 10 };
//   const mockStore = configureStore();
//   let store, wrapper;

//   test('Shows "Hello world!"', () => {
//     store = mockStore(initialState);
//     const { getByText } = render(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );

//     expect(getByText('Hello Worldd!')).not.toBeNull();
//   });
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
