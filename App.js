import React  from 'react';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import HomePage from './components/Homepage';
import DetailPage from './components/DetailPage';

class App extends React.Component {
  render() {
    return (
      <HomePage />
    );
  }
}

const AppNavigator  = createStackNavigator({
  Home   : { screen: HomePage },
  Detail : { screen: DetailPage }
});


export default createAppContainer(AppNavigator);



