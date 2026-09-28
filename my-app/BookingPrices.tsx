import React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity} from 'react-native';


// SCREEN 4 - BOOKING PRICES

export default function BookingPricesScreen() {

  return (

    <ScrollView style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <Text style={styles.logo}>
          NEXT LEVEL
        </Text>

        <TouchableOpacity>
          <Text style={styles.menu}>
            ☰
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.pinkLine} />


      {/* PAGE TITLE */}

      <Text style={styles.pageTitle}>
        BOOKING PRICES
      </Text>

      <Text style={styles.subtitle}>
        CHOOSE YOUR EXPERIENCE
      </Text>


      {/* PRICE CARD 1 */}

      <View style={styles.priceCard}>

        <Text style={styles.serviceTitle}>
          PC Gaming Session
        </Text>

        <Text style={styles.serviceInfo}>
          High-end gaming PC access
        </Text>

        <Text style={styles.price}>
          R120 / Hour
        </Text>

      </View>


      {/* PRICE CARD 2 */}

      <View style={styles.priceCard}>

        <Text style={styles.serviceTitle}>
          Console Gaming
        </Text>

        <Text style={styles.serviceInfo}>
          PS5 and Xbox stations
        </Text>

        <Text style={styles.price}>
          R100 / Hour
        </Text>

      </View>


      {/* PRICE CARD 3 */}

      <View style={styles.priceCard}>

        <Text style={styles.serviceTitle}>
          VR Experience
        </Text>

        <Text style={styles.serviceInfo}>
          Virtual reality sessions
        </Text>

        <Text style={styles.price}>
          R180 / Session
        </Text>

      </View>


      {/* PRICE CARD 4 */}

      <View style={styles.priceCard}>

        <Text style={styles.serviceTitle}>
          Esports Tournament
        </Text>

        <Text style={styles.serviceInfo}>
          Tournament entry fee
        </Text>

        <Text style={styles.price}>
          R250 / Entry
        </Text>

      </View>


      {/* PRICE CARD 5 */}

      <View style={styles.priceCard}>

        <Text style={styles.serviceTitle}>
          Birthday Package
        </Text>

        <Text style={styles.serviceInfo}>
          Gaming birthday package
        </Text>

        <Text style={styles.price}>
          R2,500
        </Text>

      </View>


      {/* PRICE CARD 6 */}

      <View style={styles.priceCard}>

        <Text style={styles.serviceTitle}>
          Corporate Event
        </Text>

        <Text style={styles.serviceInfo}>
          Team building and events
        </Text>

        <Text style={styles.price}>
          From R5,000
        </Text>

      </View>


      {/* BUTTON */}

      <TouchableOpacity style={styles.button}>

        <Text style={styles.buttonText}>
          BOOK NOW
        </Text>

      </TouchableOpacity>

    </ScrollView>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  header: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  menu: {
    color: '#FFFFFF',
    fontSize: 24,
  },

  pinkLine: {
    height: 1,
    backgroundColor: '#FF00FF',
  },

  pageTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 12,
  },

  subtitle: {
    color: '#FF00FF',
    fontSize: 10,
    marginTop: 5,
    marginLeft: 12,
  },

  priceCard: {
    backgroundColor: '#151329',
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    padding: 15,
    borderRadius: 8,
  },

  serviceTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  serviceInfo: {
    color: '#999999',
    fontSize: 10,
    marginTop: 4,
  },

  price: {
    color: '#FF00FF',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },

  button: {
    backgroundColor: '#FF00FF',
    margin: 12,
    height: 45,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 12,
  },

});