import React from 'react';
import { StyleSheet, Text,View,ScrollView, TouchableOpacity} from 'react-native';


// SCREEN 3 - OVERVIEW

export default function OverviewScreen() {

  return (

    <ScrollView style={styles.container}>

      {/*TOP NAVIGATION BAR*/}
      <View style={styles.header}>

        {/* NEXT LEVEL */}
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
        OVERVIEW
      </Text>


      <Text style={styles.subtitle}>
        SELECT YOUR TOURNAMENT PROFILE
      </Text>


      {/*PC GAMING SESSION*/}
      <View style={styles.productCard}>

        <View style={styles.productText}>

          <Text style={styles.productTitle}>
            PC Gaming Session
          </Text>

          <Text style={styles.productDescription}>
            Per hour
          </Text>

        </View>


        <Text style={styles.price}>
          R120/hr
        </Text>


        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>
            ADD
          </Text>

        </TouchableOpacity>

      </View>


      {/*CONSOLE GAMING*/}
      <View style={styles.productCard}>

        <View style={styles.productText}>

          <Text style={styles.productTitle}>
            Console Gaming
          </Text>

          <Text style={styles.productDescription}>
            Per hour
          </Text>

        </View>


        <Text style={styles.price}>
          R100/hr
        </Text>


        <TouchableOpacity style={styles.addButton}>

          <Text style={styles.addButtonText}>
            ADD
          </Text>

        </TouchableOpacity>

      </View>


      {/*VR EXPERIENCE*/}
      <View style={styles.productCard}>

        <View style={styles.productText}>

          <Text style={styles.productTitle}>
            VR Experience
          </Text>

          <Text style={styles.productDescription}>
            Per session
          </Text>
          
        </View>


        <Text style={styles.price}>
          R180/session
        </Text>


        <TouchableOpacity style={styles.addButton}>

          <Text style={styles.addButtonText}>
            ADD
          </Text>

        </TouchableOpacity>

      </View>


      {/*  ESPORTS TOURNAMENT*/}

      <View style={styles.productCard}>

        <View style={styles.productText}>

          <Text style={styles.productTitle}>
            Esports Tournament
          </Text>

          <Text style={styles.productDescription}>
            Per entry
          </Text>

        </View>


        <Text style={styles.price}>
          R250/entry
        </Text>


        <TouchableOpacity style={styles.addButton}>

          <Text style={styles.addButtonText}>
            ADD
          </Text>

        </TouchableOpacity>

      </View>


      {/* BIRTHDAY PARTY*/}

      <View style={styles.productCard}>

        <View style={styles.productText}>

          <Text style={styles.productTitle}>
            Birthday Party Package
          </Text>

          <Text style={styles.productDescription}>
            Per squad
          </Text>

        </View>


        <Text style={styles.price}>
          R2,500/squad
        </Text>


        <TouchableOpacity style={styles.addButton}>

          <Text style={styles.addButtonText}>
            ADD
          </Text>

        </TouchableOpacity>

      </View>


      {/* CORPORATE EVENT */}

      <View style={styles.productCard}>

        <View style={styles.productText}>

          <Text style={styles.productTitle}>
            Corporate Event
          </Text>

          <Text style={styles.productDescription}>
            Customized
          </Text>

        </View>


        <Text style={styles.price}>
          R5,000/customized
        </Text>


        <TouchableOpacity style={styles.addButton}>

          <Text style={styles.addButtonText}>
            ADD
          </Text>

        </TouchableOpacity>

      </View>


      {/*ADD NEW INVENTORY ITEM */}

      <TouchableOpacity style={styles.newItemButton}>

        <Text style={styles.newItemText}>
          + ADD NEW INVENTORY ITEM
        </Text>

      </TouchableOpacity>


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
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 18,
    paddingLeft: 12,
    paddingRight: 12,
  },


  subtitle: {
    color: '#777777',
    fontSize: 9,
    marginTop: 5,
    paddingLeft: 12,
    paddingRight: 12,
  },

  productCard: {
    minHeight: 75,
    backgroundColor: '#151329',
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 12,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 7,
  },


  // Product name and description
  productText: {
    flex: 1,
  },


  productTitle: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },


  productDescription: {
    color: '#888888',
    fontSize: 9,
    marginTop: 4,
  },


  // Price
  price: {
    color: '#FF00FF',
    fontSize: 11,
    fontWeight: 'bold',
    marginRight: 8,
    textAlign: 'right',
  },


  // ADD button
  addButton: {
    width: 48,
    height: 38,
    backgroundColor: '#FF00FF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },


  addButtonText: {
    color: '#000000',
    fontSize: 9,
    fontWeight: 'bold',
  },


  // NEW INVENTORY BUTTON
  newItemButton: {
    height: 45,
    backgroundColor: '#FF00FF',
    marginTop: 18,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 25,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },


  newItemText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },

});