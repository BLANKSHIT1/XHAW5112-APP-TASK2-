import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';


export default function MenuScreen({ navigation }) {

  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.logo}>
          NEXT LEVEL
        </Text>

        <Text style={styles.menuTitle}>
          MENU
        </Text>

      </View>


      <View style={styles.pinkLine} />


      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.menuText}>
          01  HOME
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('AboutUS')}
      >
        <Text style={styles.menuText}>
          02  ABOUT US
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Overview')}
      >
        <Text style={styles.menuText}>
          03  OVERVIEW
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('BookingPrices')}
      >
        <Text style={styles.menuText}>
          04  BOOKING PRICES
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.menuText}>
          05  PAYMENT
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('ContactUS')}
      >
        <Text style={styles.menuText}>
          06  CONTACT US
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('FAQ')}
      >
        <Text style={styles.menuText}>
          07  FAQ
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('CalculateFees')}
      >
        <Text style={styles.menuText}>
          08  CALCULATE FEES
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.menuText}>
          09  SIGN UP
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Plans')}
      >
        <Text style={styles.menuText}>
          10  PLANS
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Venues')}
      >
        <Text style={styles.menuText}>
          11  VENUES
        </Text>
      </TouchableOpacity>


    </ScrollView>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121225',
  },


  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },


  logo: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },


  menuTitle: {
    color: '#FF00FF',
    fontSize: 13,
    fontWeight: 'bold',
  },


  pinkLine: {
    height: 1,
    backgroundColor: '#FF00FF',
  },


  menuItem: {
    height: 55,
    backgroundColor: '#151329',
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 6,
    justifyContent: 'center',
    paddingLeft: 18,
  },


  menuText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

});