import React, { useState } from 'react';
import {StyleSheet,Text,View,ScrollView,TouchableOpacity,TextInput} from 'react-native';


// SCREEN 8 - CALCULATE FEES
export default function CalculateFeesScreen({ navigation }: { navigation?: any }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigationItems = [
    ['Home', 'Home'], ['About Us', 'AboutUS'], ['Overview', 'Overview'],
    ['Booking Prices', 'BookingPrices'], ['Payment', 'Payment'],
    ['Contact Us', 'ContactUS'], ['FAQ', 'FAQ'], ['Calculate Fees', 'CalculateFees'],
    ['Sign Up', 'Signup'], ['Plans', 'Plans'], ['Venues', 'Venues'],
  ] as const;

  const navigateTo = (screen: string) => {
    setMenuOpen(false);
    navigation?.navigate(screen);
  };

  // Stores the number of hours entered by the user
  const [hours, setHours] = useState('1');

  // Stores the calculated price
  const [total, setTotal] = useState(120);


  // CALCULATE THE TOTAL
  function calculateFee() {

    // Change the text into a number
    const numberOfHours = Number(hours);

    // PC Gaming costs R120 per hour
    const calculatedTotal = numberOfHours * 120;

    // Show the calculated amount
    setTotal(calculatedTotal);
  }


  return (

    <ScrollView style={styles.container}>

      {/* TOP NAVIGATION BAR */}

      <View style={styles.header}>

        <Text style={styles.logo}>
          NEXT LEVEL
        </Text>


        {/* Menu button */}

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onPress={() => setMenuOpen(!menuOpen)}
          style={styles.menuButton}
        >

          <Text style={styles.menu}>
            {menuOpen ? '×' : '☰'}
          </Text>

        </TouchableOpacity>

      </View>

      {menuOpen && (
        <View style={styles.navigationMenu}>
          {navigationItems.map(([label, screen]) => (
            <TouchableOpacity
              key={screen}
              style={styles.navigationItem}
              accessibilityRole="button"
              accessibilityLabel={`Navigate to ${label}`}
              onPress={() => navigateTo(screen)}
            >
              <Text style={styles.navigationText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}


      {/* Pink line */}

      <View style={styles.pinkLine} />


      {/* PAGE TITLE */}

      <Text style={styles.pageTitle}>
        CALCULATE FEES
      </Text>


      <Text style={styles.subtitle}>
        CALCULATE YOUR GAMING SESSION
      </Text>


      {/* SELECT SERVICE */}

      <Text style={styles.sectionTitle}>
        SELECT SERVICE
      </Text>


      <TouchableOpacity style={styles.serviceBox}>

        <View>

          <Text style={styles.serviceName}>
            PC Gaming Session
          </Text>

          <Text style={styles.serviceDescription}>
            R120 per hour
          </Text>

        </View>


        <Text style={styles.arrow}>
          ›
        </Text>

      </TouchableOpacity>


      {/*  HOURS */}

      <Text style={styles.sectionTitle}>
        NUMBER OF HOURS
      </Text>


      <TextInput
        style={styles.input}
        value={hours}
        onChangeText={setHours}
        keyboardType="numeric"
        placeholder="Enter hours"
        placeholderTextColor="#777777"
      />


      {/* CALCULATE BUTTON */}

      <TouchableOpacity
        style={styles.calculateButton}
        onPress={calculateFee}
      >

        <Text style={styles.calculateText}>
          CALCULATE
        </Text>

      </TouchableOpacity>


      {/* TOTAL */}

      <View style={styles.totalBox}>

        <Text style={styles.totalLabel}>
          ESTIMATED TOTAL
        </Text>


        <Text style={styles.totalAmount}>
          R{total}
        </Text>


        <Text style={styles.totalDescription}>
          Based on R120 per hour
        </Text>

      </View>


      {/*BOOK NOW*/}

      <TouchableOpacity style={styles.bookButton}>

        <Text style={styles.bookButtonText}>
          BOOK THIS SESSION
        </Text>

      </TouchableOpacity>


    </ScrollView>

  );
}


const styles = StyleSheet.create({

  // Main screen
  container: {
    flex: 1,
    backgroundColor: '#121225',
  },

  header: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12,
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

  menuButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  navigationMenu: {
    backgroundColor: '#151329',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },

  navigationItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#29243D',
  },

  navigationText: {
    color: '#FFFFFF',
    fontSize: 14,
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

 sectionTitle: {
    color: '#FF00FF',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 22,
    marginLeft: 12,
  },

  serviceBox: {
    height: 65,
    backgroundColor: '#151329',
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 14,
    paddingRight: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 7,
  },


  serviceName: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },


  serviceDescription: {
    color: '#888888',
    fontSize: 9,
    marginTop: 4,
  },


  arrow: {
    color: '#FF00FF',
    fontSize: 25,
  },

  input: {
    height: 48,
    backgroundColor: '#151329',
    color: '#FFFFFF',
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 12,
    borderRadius: 5,
    fontSize: 12,
  },

  calculateButton: {
    height: 48,
    backgroundColor: '#FF00FF',
    marginTop: 18,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },


  calculateText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
  },

  totalBox: {
    backgroundColor: '#111126',
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    padding: 20,
    alignItems: 'center',
    borderRadius: 7,
  },


  totalLabel: {
    color: '#999999',
    fontSize: 10,
  },


  totalAmount: {
    color: '#FF00FF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 8,
  },


  totalDescription: {
    color: '#777777',
    fontSize: 9,
    marginTop: 5,
  },

  bookButton: {
    height: 48,
    backgroundColor: '#FF00FF',
    marginTop: 18,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },


  bookButtonText: {
    color: '#000000',
    fontSize: 11,
    fontWeight: 'bold',
  },

});