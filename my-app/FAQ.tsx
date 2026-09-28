import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

// SCREEN 7 - FAQ
export default function FAQScreen() {

  return (

    <ScrollView style={styles.container}>

      {/* TOP NAVIGATION BAR*/}

      <View style={styles.header}>

        <Text style={styles.logo}>
          NEXT LEVEL
        </Text>


        {/* Menu button */}

        <TouchableOpacity>
          <Text style={styles.menu}>
            ☰
          </Text>
        </TouchableOpacity>

      </View>


      {/* Pink line */}

      <View style={styles.pinkLine} />


      {/* PAGE TITLE*/}

      <Text style={styles.pageTitle}>
        FAQ
      </Text>


      <Text style={styles.subtitle}>
        FREQUENTLY ASKED QUESTIONS
      </Text>


      {/* QUESTION 1*/}

      <View style={styles.questionBox}>

        <Text style={styles.question}>
          What is Next Level Gaming?
        </Text>

        <Text style={styles.answer}>
          Next Level is a gaming and esports arena where
          customers can play PC and console games,
          participate in tournaments and enjoy gaming
          events.
        </Text>

      </View>


      {/* QUESTION 2 */}

      <View style={styles.questionBox}>

        <Text style={styles.question}>
          Do I need to bring my own gaming equipment?
        </Text>

        <Text style={styles.answer}>
          No. Gaming PCs, consoles, controllers and other
          equipment are available at the venue.
        </Text>

      </View>


      {/*QUESTION 3 */}

      <View style={styles.questionBox}>

        <Text style={styles.question}>
          Can I book a gaming session?
        </Text>

        <Text style={styles.answer}>
          Yes. Customers can select a gaming session,
          choose a suitable time and complete their booking
          through the application.
        </Text>

      </View>


      {/* QUESTION 4 */}

      <View style={styles.questionBox}>

        <Text style={styles.question}>
          Do you host esports tournaments?
        </Text>

        <Text style={styles.answer}>
          Yes. Next Level hosts esports tournaments and
          competitive gaming events for different games.
        </Text>

      </View>


      {/* QUESTION */}

      <View style={styles.questionBox}>

        <Text style={styles.question}>
          Can I organise a birthday party?
        </Text>

        <Text style={styles.answer}>
          Yes. Gaming birthday packages are available
          for customers who want to celebrate with friends.
        </Text>

      </View>


      {/* QUESTION 6 */}

      <View style={styles.questionBox}>

        <Text style={styles.question}>
          Can companies book the venue?
        </Text>

        <Text style={styles.answer}>
          Yes. Corporate gaming events and team-building
          sessions can be arranged.
        </Text>

      </View>


      {/* STILL HAVE QUESTIONS?*/}

      <View style={styles.helpBox}>

        <Text style={styles.helpTitle}>
          STILL HAVE QUESTIONS?
        </Text>

        <Text style={styles.helpText}>
          Contact our team and we will help you with your
          booking or any other questions.
        </Text>


        <TouchableOpacity style={styles.contactButton}>

          <Text style={styles.contactButtonText}>
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
 
  questionBox: {
    backgroundColor: '#151329',
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    padding: 14,
    borderRadius: 7,
  },


  question: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },


  answer: {
    color: '#999999',
    fontSize: 10,
    lineHeight: 16,
    marginTop: 8,
  },

helpBox: {
    backgroundColor: '#111126',
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 30,
    padding: 15,
    borderRadius: 7,
  },


  helpTitle: {
    color: '#FF00FF',
    fontSize: 11,
    fontWeight: 'bold',
  },


  helpText: {
    color: '#999999',
    fontSize: 10,
    lineHeight: 16,
    marginTop: 8,
  },


  // Contact button
  contactButton: {
    height: 42,
    backgroundColor: '#FF00FF',
    marginTop: 14,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },


  contactButtonText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },

});