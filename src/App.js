import React from 'react';
// import Counter from './firstProject/Counter';
// import {Provider} from 'react-redux';
// import {createStore} from "redux";
// import reducer from './firstProject/reducer';

///secondP
import Counter2 from './secondP/Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './secondP/reducer';

class App extends React.Component {

  
  store = createStore(reducer);
 

render() {
  return (

   <Provider store={this.store} > 
      <Counter2 />
   </Provider>
  );
}
}

export default App;
