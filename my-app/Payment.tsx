import React, { useState } from 'react';
import {StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput} from 'react-native';

// SCREEN 5 - PAYMENT
export default function PaymentScreen({ navigation }: { navigation?: any }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationItems = [
    ['Home', 'Home'],
    ['About Us', 'AboutUS'],
    ['Overview', 'Overview'],
    ['Booking Prices', 'BookingPrices'],
    ['Payment', 'Payment'],
    ['Contact Us', 'ContactUS'],
    ['FAQ', 'FAQ'],
    ['Calculate Fees', 'CalculateFees'],
    ['Sign Up', 'Signup'],
    ['Plans', 'Plans'],
    ['Venues', 'Venues'],
  ] as const;

  const navigateTo = (screen: string) => {
    setMenuOpen(false);
    navigation?.navigate(screen);
  };

  return (

    <ScrollView style={styles.container}>

      {/* TOP NAVIGATION BAR*/}

      <View style={styles.header}>

        <Text style={styles.logo}>
          NEXT LEVEL
        </Text>

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


      {/* PAGE TITLE*/}

      <Text style={styles.pageTitle}>
        PAYMENT
      </Text>

      <Text style={styles.subtitle}>
        COMPLETE YOUR BOOKING
      </Text>


      {/* BOOKING SUMMARY*/}

      <View style={styles.summaryBox}>

        <Text style={styles.summaryTitle}>
          BOOKING SUMMARY
        </Text>


        <View style={styles.summaryRow}>

          <Text style={styles.summaryText}>
            PC Gaming Session
          </Text>

          <Text style={styles.summaryPrice}>
            R120
          </Text>

        </View>


        <View style={styles.summaryRow}>

          <Text style={styles.summaryText}>
            1 Hour
          </Text>

          <Text style={styles.summaryPrice}>
            R120
          </Text>

        </View>


        <View style={styles.line} />


        <View style={styles.summaryRow}>

          <Text style={styles.totalText}>
            TOTAL
          </Text>

          <Text style={styles.totalPrice}>
            R120
          </Text>

        </View>

      </View>


      {/* CUSTOMER DETAILS*/}

      <Text style={styles.sectionTitle}>
        CUSTOMER DETAILS
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#777777"
      />


      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#777777"
        keyboardType="email-address"
      />


      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#777777"
        keyboardType="phone-pad"
      />


      {/* PAYMENT METHOD */}

      <Text style={styles.sectionTitle}>
        PAYMENT METHOD
      </Text>


      <TouchableOpacity style={styles.paymentOption}>

        <Text style={styles.paymentText}>
          Card Payment
        </Text>

      </TouchableOpacity>


      <TouchableOpacity style={styles.paymentOption}>

        <Text style={styles.paymentText}>
          EFT / Bank Transfer
        </Text>

      </TouchableOpacity>


      {/* PAY BUTTON */}
       <TouchableOpacity style={styles.payButton}>

        <Text style={styles.payButtonText}>
          PAY R120
        </Text>

      </TouchableOpacity>


      {/* Small security message */}

      <Text style={styles.securityText}>
        Your booking will be confirmed after payment.
      </Text>


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

  summaryBox: {
    backgroundColor: '#151329',
    marginTop: 18,
    marginLeft: 12,
    marginRight: 12,
    padding: 15,
    borderRadius: 7,
  },


  summaryTitle: {
    color: '#FF00FF',
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 12,
  },


  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },


  summaryText: {
    color: '#BBBBBB',
    fontSize: 11,
  },


  summaryPrice: {
    color: '#FFFFFF',
    fontSize: 11,
  },


  line: {
    height: 1,
    backgroundColor: '#333333',
    marginTop: 12,
  },


  totalText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },


  totalPrice: {
    color: '#FF00FF',
    fontSize: 14,
    fontWeight: 'bold',
  },


  // CUSTOMER DETAILS
 sectionTitle: {
    color: '#FF00FF',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 12,
  },


  input: {
    height: 45,
    backgroundColor: '#151329',
    color: '#FFFFFF',
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 12,
    borderRadius: 5,
    fontSize: 11,
  },
 
  // PAYMENT OPTIONS
  paymentOption: {
    height: 50,
    backgroundColor: '#151329',
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },


  paymentIcon: {
    fontSize: 18,
  },


  paymentText: {
    color: '#FFFFFF',
    fontSize: 11,
    marginLeft: 12,
  },

// PAY BUTTON
payButton: {
    height: 48,
    backgroundColor: '#FF00FF',
    marginTop: 22,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },


  payButtonText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
  },


  securityText: {
    color: '#666666',
    fontSize: 9,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 25,
  },

});