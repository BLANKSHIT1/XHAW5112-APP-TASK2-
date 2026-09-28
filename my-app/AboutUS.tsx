import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';



// SCREEN 2 - ABOUT US

export default function AboutUsScreen({ navigation }: { navigation?: any }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (screen: string) => {
    setMenuOpen(false);
    if (navigation && typeof navigation.navigate === 'function') {
      navigation.navigate(screen);
    }
  };

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

  return (

    <ScrollView style={styles.container}>

      {/* TOP NAVIGATION BAR*/}

      <View style={styles.header}>

        {/* NEXT LEVEL */}

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


      {/* ABOUT US TITLE */}

      <Text style={styles.pageTitle}>
        ABOUT US
      </Text>


      <Text style={styles.subtitle}>
        THE ORIGIN PROTOCOL
      </Text>


      {/*  ABOUT US DESCRIPTION*/}

      <Text style={styles.description}>
        Next Level Gaming & Esports Arena was made in
        2023 by Jason Ndlovu. The business provides a
        modern gaming environment where gamers can
        use gaming equipment, take part in esports
        events and socialise with other gamers.
      </Text>


      <Text style={styles.description}>
        Located in the heart of Johannesburg, our facility
        boasts high-spec PCs, next-gen consoles, VR
        immersion pods, and dedicated racing rigs to
        elevate your play style to the next level.
      </Text>


      {/* PROTOCOL CARDS*/}

      <View style={styles.protocolCard}>

        <Text style={styles.cardTitle}>
          PRO ZONE
        </Text>

        <Text style={styles.cardText}>
          RTX 4080 rigs and 360Hz esports displays.
        </Text>

      </View>


      <View style={styles.protocolCard}>

        <Text style={styles.cardTitle}>
          NEXT-GEN CONSOLE BAY
        </Text>

        <Text style={styles.cardText}>
          PlayStation 5 and Xbox Series X lounge setups.
        </Text>

      </View>


      {/* NEXT-GEN CONSOLE BAY*/}

      <Text style={styles.sectionTitle}>
        SECURE LIVE VENUE STATUS
      </Text>


      {/* Gaming image */}

      {/* <Image
        source={require('./assets/console_bay.jpg')}
        style={styles.consoleImage}
      /> */}

    </ScrollView>
  );
}



const styles = StyleSheet.create({

  // Main screen
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },



  // HEADER
  header: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12,
  },


  // NEXT LEVEL
  logo: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },


  // Menu icon
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


  // Pink line
  pinkLine: {
    height: 1,
    backgroundColor: '#FF00FF',
  },


  
  // PAGE TITLE
  pageTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 18,
    paddingLeft: 12,
    paddingRight: 12,
  },


  // Small pink title
  subtitle: {
    color: '#FF00FF',
    fontSize: 10,
    marginTop: 5,
    paddingLeft: 12,
    paddingRight: 12,
  },



  // DESCRIPTION
description: {
    color: '#BBBBBB',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 15,
    paddingLeft: 12,
    paddingRight: 12,
  },


  
  // PROTOCOL CARDS
  protocolCard: {
    backgroundColor: '#151329',
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    padding: 14,
    borderRadius: 6,
  },


  // Card heading
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },


  // Card description
  cardText: {
    color: '#999999',
    fontSize: 9,
    marginTop: 5,
    lineHeight: 14,
  },


 
  // VENUE STATUS
  sectionTitle: {
    color: '#FF00FF',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
  },


  // Console image
  consoleImage: {
    width: '100%',
    height: 180,
    marginTop: 10,
    resizeMode: 'cover',
  },

});