import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({temp, title}) {
    weather = {
      Clear:{
        icon:'white-balance-sunny',
        colors:['#ffcc33', '#ffb347'],
      },
      Clouds:{
        icon:'weather-cloudy',
        colors:['#2ebf91','#8360c3'],
      },
      Snow:{
        icon:'weather-snowy-heavy',
        colors:['#185a9d','#43cea2'],
      },
      Rain:{
        icon:'weather-pouring',
        colors:['#2c3e50','#2c3e50'],
      },
      Drizzle:{
        icon:'weather-rainy',
        colors:['#9bc5c3','#616161'],
      },
      Thunderstorm:{
        icon:'weather-hurricane',
        colors:['#292e49','#536976','#bbd2c5'],
      },
      Mist:{
        icon:'weather-fog',
        colors:['#3d72b4','#525252'],
      }

    }

    return (
        <LinearGradient
            // Button Linear Gradient
            colors={weather[title].colors}
            style={styles.weatherback}>
            <View style = {styles.iconarea}>
                <Text style={styles.iconcustom}>
                  <MaterialCommunityIcons name={weather[title].icon} size={200}/>
                </Text>
            </View>

            <View style = {styles.textarea}>
                <Text style={styles.textcustom}>{title}</Text>
                <Text style={styles.textcustom}>{temp}℃</Text>
            </View>
            
        </LinearGradient>
    );

}

const styles = StyleSheet.create({
  weatherback: {
    flex: 1,
  },
  iconarea: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconcustom:{
    fontSize: 30,
    color: 'white',
  },
  textarea: {
    flex:1,
    alignItems: 'flex-end',
    paddingRight: 80,
  },
  textcustom:{
    fontSize:40,
    fontWeight:'bold',
    color:'white',
  }
});
