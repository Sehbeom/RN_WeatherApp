import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Weather from './app/Weather';
import * as Location from 'expo-location';

const APIKEY="3a30309870a415d46521a7189f078da4";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoaded:false,
    }
  }
  componentDidMount(){
    this._getWeather();
  }

  _getWeather = async () =>{
    // await Location.requestPermissionsAsync();
    const _location = await Location.getCurrentPositionAsync();
    const _response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${_location.coords.latitude}&lon=${_location.coords.longitude}&appid=${APIKEY}&units=metric`);
    const _json = await _response.json();

    this.setState({
      temp:Math.floor(_json.main.temp),
      title:_json.weather[0].main,
      isLoaded:true,
    });
  }

    render(){
      return (
        <View style={styles.container}>
          {this.state.isLoaded? 
            <Weather temp={this.state.temp} title={this.state.title}/> : <ActivityIndicator style={styles.indicatorstyle} color='black' size='large'/>}            
          <StatusBar style="auto" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorstyle:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  }
});
