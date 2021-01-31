import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var TabNavigator = createBottomTabNavigator({
  ReadStory:{screens:ReadStoryScreen},
  WriteStory:{screens:WriteStoryScreen},  
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName
      if(routeName === 'ReadStory'){
        return(
          <Image source = {require ('./assets/read.png')} style = {{width:40, height:40}} />
        )
      }
      else if(routeName === 'WriteScreen'){
        return(
          <Image source = {require ('./assets/write.png')} style = {{width:40, height:40}} />
        )
      }
    }
  })
})
const AppContainer = createAppContainer(TabNavigator);