import React from 'react';

import {mount, shallow} from 'enzyme';
import App from './App';

// it('renders without crashing', () => {   const div =
// document.createElement('div');   ReactDOM.render(<App />, div);
// ReactDOM.unmountComponentAtNode(div); });

describe('App', () => {
  let app;
  it('should render correctly in "debug" mode', () => {
    app = shallow(<App debug/>);

    expect(app).toMatchSnapshot();
  });
  it('should render correctly with no props', () => {
     app = shallow(<App/>);

    expect(app).toMatchSnapshot();
  });
  it('App renders nested components', () => {
    expect(app.find('Add').length).toEqual(1);
    expect(app.find('List').length).toEqual(1);
  });
  it('onAdd updates List', () => {
    const add = app.find('Add').first();
    add.props().onAdd('Name 1');
    app.update();     
    const list = app.find('List').first();
    const listData = list.props().data;
    expect(listData.length).toEqual(1);
    expect(listData[0]).toEqual('Name 1');
  });
  // it('should render banner text correctly with given strings', () => {
  //   const strings = ['one', 'two'];
  //   const component = shallow(<App list={strings}/>);
  //   expect(component).toMatchSnapshot();
  // });
  // it('should be possible to open menu with Spacebar', done => {
  //   const component = mount(<App/>);
  //   component
  //     .find('#link-id')
  //     .simulate('keydown', {keyCode: 32});
  //   expect(component).toMatchSnapshot();
  //   component.unmount();
  // });
  // it('sets loading state to true on save press', () => {
  //   const component = mount(<App />);
  //   component.find('[className="save-button"]').simulate('click');
  //   expect(component.state('isLoading')).toEqual(true);
  //   component.unmount();
  // });
});