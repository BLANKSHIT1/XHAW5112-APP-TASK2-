import React, { useState } from 'react';
import {StyleSheet,Text,View, ScrollView,TouchableOpacity} from 'react-native';

// SCREEN 10 - PLANS

export default function PlansScreen({ navigation }: { navigation?: any }) {
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


      {/* PAGE TITLE*/}

      <Text style={styles.pageTitle}>
        PLANS
      </Text>


      <Text style={styles.subtitle}>
        CHOOSE YOUR GAMING PLAN
      </Text>


      {/* BASIC PLAN */}

      <View style={styles.planBox}>

        <Text style={styles.planName}>
          BASIC
        </Text>


        <Text style={styles.price}>
          R500
        </Text>


        <Text style={styles.period}>
          PER MONTH
        </Text>


        <View style={styles.line} />


        <Text style={styles.feature}>
          ✓ 5 HOURS GAMING
        </Text>

        <Text style={styles.feature}>
          ✓ PC GAMING ACCESS
        </Text>

        <Text style={styles.feature}>
          ✓ MEMBER DISCOUNTS
        </Text>


        <TouchableOpacity style={styles.button}>

          <Text style={styles.buttonText}>
            SELECT PLAN
          </Text>

        </TouchableOpacity>

      </View>


      {/* PRO PLAN */}

      <View style={styles.planBox}>

        <Text style={styles.popular}>
          MOST POPULAR
        </Text>


        <Text style={styles.planName}>
          PRO
        </Text>


        <Text style={styles.price}>
          R900
        </Text>


        <Text style={styles.period}>
          PER MONTH
        </Text>


        <View style={styles.line} />


        <Text style={styles.feature}>
          ✓ 10 HOURS GAMING
        </Text>

        <Text style={styles.feature}>
          ✓ PC + CONSOLE ACCESS
        </Text>

        <Text style={styles.feature}>
          ✓ TOURNAMENT ACCESS
        </Text>

        <Text style={styles.feature}>
          ✓ MEMBER DISCOUNTS
        </Text>


        <TouchableOpacity style={styles.button}>

          <Text style={styles.buttonText}>
            SELECT PLAN
          </Text>

        </TouchableOpacity>

      </View>


      {/* ELITE PLAN*/}

      <View style={styles.planBox}>

        <Text style={styles.planName}>
          ELITE
        </Text>


        <Text style={styles.price}>
          R1,500
        </Text>


        <Text style={styles.period}>
          PER MONTH
        </Text>


        <View style={styles.line} />


        <Text style={styles.feature}>
          ✓ UNLIMITED GAMING
        </Text>

        <Text style={styles.feature}>
          ✓ PC + CONSOLE + VR
        </Text>

        <Text style={styles.feature}>
          ✓ PRIORITY BOOKING
        </Text>

        <Text style={styles.feature}>
          ✓ FREE TOURNAMENT ENTRY
        </Text>


        <TouchableOpacity style={styles.button}>

          <Text style={styles.buttonText}>
            SELECT PLAN
          </Text>

        </TouchableOpacity>

      </View>


      {/*INFORMATION*/}

      <View style={styles.infoBox}>

        <Text style={styles.infoTitle}>
          NEED A CUSTOM PLAN?
        </Text>


        <Text style={styles.infoText}>
          Contact our team if you need a custom gaming
          package for your team, organisation or event.
        </Text>


        <TouchableOpacity style={styles.contactButton}>

          <Text style={styles.contactText}>
            CONTACT US
          </Text>

        </TouchableOpacity>

      </View>


    </ScrollView>

  );
}


const styles = StyleSheet.create({

  // Main screen
  container: {
    flex: 1,
    backgroundColor: '#000000',
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

 planBox: {
    backgroundColor: '#151329',
    marginTop: 18,
    marginLeft: 12,
    marginRight: 12,
    padding: 18,
    borderRadius: 7,
  },


  planName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },


  price: {
    color: '#FF00FF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },


  period: {
    color: '#888888',
    fontSize: 9,
    marginTop: 2,
  },

  popular: {
    color: '#000000',
    backgroundColor: '#FF00FF',
    alignSelf: 'flex-start',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 8,
    fontWeight: 'bold',
    borderRadius: 3,
    marginBottom: 10,
  },


  line: {
    height: 1,
    backgroundColor: '#302C4A',
    marginTop: 15,
    marginBottom: 15,
  },


  // FEATURES
  feature: {
    color: '#BBBBBB',
    fontSize: 10,
    marginTop: 8,
  },

  button: {
    height: 44,
    backgroundColor: '#FF00FF',
    marginTop: 18,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },


  buttonText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },

  infoBox: {
    backgroundColor: '#111126',
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 30,
    padding: 16,
    borderRadius: 7,
  },


  infoTitle: {
    color: '#FF00FF',
    fontSize: 11,
    fontWeight: 'bold',
  },


  infoText: {
    color: '#999999',
    fontSize: 10,
    lineHeight: 16,
    marginTop: 8,
  },


  contactButton: {
    height: 42,
    backgroundColor: '#FF00FF',
    marginTop: 14,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },


  contactText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },

});