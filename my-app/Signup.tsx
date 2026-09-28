import React, { useState } from 'react';
import {StyleSheet,Text,View,ScrollView,TouchableOpacity,TextInput} from 'react-native';


// SCREEN 9 - SIGN UP
export default function SignUpScreen({ navigation }: { navigation?: any }) {
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

  // Stores the information entered by the user
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');


  // SIGN UP BUTTON
  function signUp() {

    // This can later be connected to a database
    // or account registration system

    console.log('Account created');

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


      {/* PAGE TITLE*/}

      <Text style={styles.pageTitle}>
        SIGN UP
      </Text>


      <Text style={styles.subtitle}>
        CREATE YOUR NEXT LEVEL ACCOUNT
      </Text>


      {/*SIGN UP FORM*/}

      <View style={styles.formBox}>


        {/* Full name */}

        <Text style={styles.label}>
          FULL NAME
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor="#777777"
          value={name}
          onChangeText={setName}
        />


        {/* Email */}

        <Text style={styles.label}>
          EMAIL ADDRESS
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#777777"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />


        {/* Phone */}

        <Text style={styles.label}>
          PHONE NUMBER
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          placeholderTextColor="#777777"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />


        {/* Password */}

        <Text style={styles.label}>
          PASSWORD
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Create a password"
          placeholderTextColor="#777777"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />


        {/* SIGN UP BUTTON*/}

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={signUp}
        >

          <Text style={styles.signUpText}>
            CREATE ACCOUNT
          </Text>

        </TouchableOpacity>


        {/* Already have account */}

        <Text style={styles.loginText}>
          Already have an account? LOGIN
        </Text>


      </View>


      {/* ACCOUNT INFORMATION */}

      <View style={styles.infoBox}>

        <Text style={styles.infoTitle}>
          JOIN THE NEXT LEVEL
        </Text>

        <Text style={styles.infoText}>
          Create an account to book gaming sessions,
          participate in tournaments and manage your
          bookings.
        </Text>

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

// FORM
  formBox: {
    backgroundColor: '#151329',
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    padding: 15,
    borderRadius: 7,
  },


  label: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 6,
  },


  input: {
    height: 45,
    backgroundColor: '#0B0B18',
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#29263F',
    borderRadius: 5,
    paddingLeft: 12,
    fontSize: 11,
  },

 // SIGN UP BUTTON
  signUpButton: {
    height: 48,
    backgroundColor: '#FF00FF',
    marginTop: 22,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signUpText: {
    color: '#000000',
    fontSize: 11,
    fontWeight: 'bold',
  },

  loginText: {
    color: '#FF00FF',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 15,
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

});