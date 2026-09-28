import React, { useState } from 'react';
import { StyleSheet,Text,View,ScrollView,TouchableOpacity} from 'react-native';


// SCREEN 11 - VENUES

export default function VenuesScreen({ navigation }: { navigation?: any }) {
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
        VENUES
      </Text>


      <Text style={styles.subtitle}>
        FIND YOUR NEXT GAMING DESTINATION
      </Text>


      {/* VENUE 1*/}

      <View style={styles.venueBox}>

        <Text style={styles.venueName}>
          NEXT LEVEL CAPE TOWN
        </Text>


        <Text style={styles.location}>
          📍 Cape Town, South Africa
        </Text>


        <Text style={styles.description}>
          Our main gaming arena featuring high-performance
          gaming PCs, console stations and competitive
          esports facilities.
        </Text>


        <Text style={styles.features}>
          PC GAMING  •  CONSOLES  •  ESPORTS
        </Text>


        <TouchableOpacity style={styles.button}>

          <Text style={styles.buttonText}>
            VIEW VENUE
          </Text>

        </TouchableOpacity>

      </View>


      {/* VENUE 2 */}

      <View style={styles.venueBox}>

        <Text style={styles.venueName}>
          NEXT LEVEL STADIUM
        </Text>


        <Text style={styles.location}>
          📍 Cape Town, South Africa
        </Text>


        <Text style={styles.description}>
          A dedicated esports venue designed for
          tournaments, competitive gaming and large
          gaming events.
        </Text>


        <Text style={styles.features}>
          TOURNAMENTS  •  LIVE EVENTS  •  ESPORTS
        </Text>


        <TouchableOpacity style={styles.button}>

          <Text style={styles.buttonText}>
            VIEW VENUE
          </Text>

        </TouchableOpacity>

      </View>


      {/* VENUE 3*/}

      <View style={styles.venueBox}>

        <Text style={styles.venueName}>
          NEXT LEVEL VR ZONE
        </Text>


        <Text style={styles.location}>
          📍 Cape Town, South Africa
        </Text>


        <Text style={styles.description}>
          Experience immersive virtual reality gaming
          with modern VR equipment and exciting
          multiplayer experiences.
        </Text>


        <Text style={styles.features}>
          VR GAMING  •  MULTIPLAYER  •  EXPERIENCES
        </Text>


        <TouchableOpacity style={styles.button}>

          <Text style={styles.buttonText}>
            VIEW VENUE
          </Text>

        </TouchableOpacity>

      </View>


      {/* FIND A VENUE */}

      <View style={styles.findBox}>

        <Text style={styles.findTitle}>
          LOOKING FOR A VENUE?
        </Text>


        <Text style={styles.findText}>
          Contact our team to find the closest Next Level
          gaming venue or to arrange a private event.
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
    backgroundColor: '#121225',
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

  // PAGE TITLE
 
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


  venueBox: {
    backgroundColor: '#151329',
    marginTop: 18,
    marginLeft: 12,
    marginRight: 12,
    padding: 16,
    borderRadius: 7,
  },


  venueName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },


  location: {
    color: '#FF00FF',
    fontSize: 10,
    marginTop: 7,
  },


  description: {
    color: '#999999',
    fontSize: 10,
    lineHeight: 16,
    marginTop: 10,
  },


  features: {
    color: '#BBBBBB',
    fontSize: 8,
    marginTop: 12,
    fontWeight: 'bold',
  },

// VENUE BUTTON
  button: {
    height: 42,
    backgroundColor: '#FF00FF',
    marginTop: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },


  buttonText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },

  // FIND VENUE BOX
  findBox: {
    backgroundColor: '#111126',
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 30,
    padding: 16,
    borderRadius: 7,
  },


  findTitle: {
    color: '#FF00FF',
    fontSize: 11,
    fontWeight: 'bold',
  },


  findText: {
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