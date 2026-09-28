import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRef, useState } from 'react';

export default function App({ navigation }: { navigation?: any }) {
  const scrollRef = useRef<ScrollView>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionPositions, setSectionPositions] = useState<Record<string, number>>({});

  const navigationItems = [
    ['Home', 'home'],
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

  const navigateTo = (destination: string) => {
    setMenuOpen(false);

    if (destination === 'home') {
      scrollRef.current?.scrollTo({
        y: sectionPositions.home ?? 0,
        animated: true,
      });
      return;
    }

    navigation?.navigate(destination);
  };

  return (
     // Allows the page to scroll up and down
    <ScrollView ref={scrollRef} style={styles.container} contentContainerStyle={styles.contentContainer}>
      <StatusBar style="light" />

      {/* TOP NAVIGATION BAR*/}

      <View style={styles.header}>

        {/* NEXT LEVEL name */}

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
          <Text style={styles.menu}>{menuOpen ? '×' : '☰'}</Text>
        </TouchableOpacity>

      </View>

      {menuOpen && (
        <View style={styles.navigationMenu}>
          {navigationItems.map(([label, destination]) => (
            <TouchableOpacity
              key={destination}
              onPress={() => navigateTo(destination)}
              style={styles.navigationItem}
              accessibilityRole="button"
              accessibilityLabel={`Navigate to ${label}`}
            >
              <Text style={styles.navigationText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}


      {/* Pink line below navigation */}

      <View style={styles.pinkLine} />


      {/* MAIN IMAGE

      //<Image
        //source={require('./assets/esports_arena.jpg')}
        //style={styles.mainImage}
      /> */}


      {/*UNLEASH THE SQUAD*/}
      <View onLayout={(event) => {
        const y = event.nativeEvent.layout.y;
        setSectionPositions((positions) => ({ ...positions, home: y }));
      }}>
      <Text style={styles.mainTitle}>
        UNLEASH THE SQUAD
      </Text>


      <Text style={styles.description}>
        Johannesburg's ultimate destination for esports
        tournaments, competitive gaming sessions, and
        high-tech birthday packages. Experience low
        latency and pro-grade peripherals.
      </Text>
      </View>


      {/*SEPARATOR */}

      <View style={styles.separator} />


      {/* OPERATORS ON DUTY */}

      <View onLayout={(event) => {
        const y = event.nativeEvent.layout.y;
        setSectionPositions((positions) => ({ ...positions, operators: y }));
      }}>
      <Text style={styles.sectionTitle}>
        OPERATORS ON DUTY
      </Text>


      {/* Three operator cards */}

      <View style={styles.operatorsContainer}>


        {/* OPERATOR 1 */}

        <View style={styles.operatorCard}>

          <Image
           // source={require('./Image/operator1.jpg')}
           source={require('./Images/operator1.jpg')}
            style={styles.operatorImage}
          />

          <Text style={styles.operatorName}>
            Jason Ndlovu
          </Text>

          <Text style={styles.operatorRole}>
            Owner's Founder
          </Text>

        </View>


        {/* OPERATOR 2 */}

        <View style={styles.operatorCard}>

          <Image
            source={require('./Images/operator2.jpg')}
            style={styles.operatorImage}
          />

          <Text style={styles.operatorName}>
            Sipho Dlamini
          </Text>

          <Text style={styles.operatorRole}>
            Tournament Director
          </Text>

        </View>


        {/* OPERATOR 3 */}

        <View style={styles.operatorCard}>

          <Image
            source={require('./Images/operator3.jpg')}
            style={styles.operatorImage}
          />

          <Text style={styles.operatorName}>
            Zoe Botha
          </Text>

          <Text style={styles.operatorRole}>
            Community Manager
          </Text>

        </View>

      </View>

      </View>


      {/*ESPORTS & TOURNEYS*/}

      <View style={styles.tourneyBox} onLayout={(event) => {
        const y = event.nativeEvent.layout.y;
        setSectionPositions((positions) => ({ ...positions, tournaments: y }));
      }}>

        <Text style={styles.tourneyTitle}>
          ESPORTS & TOURNEYS
        </Text>

        <Text style={styles.tourneyText}>
          Weekly localized leagues and weekend
          showdowns. Jump in solo or coordinate
          with your squad for the ultimate gaming
          experience.
        </Text>

      </View>


    </ScrollView>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121225',
  },
  contentContainer: {
    alignItems: 'stretch',
  },

   // HEADER
  header: {
    backgroundColor: '#111126',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12,
  },


  // NEXT LEVEL text
  logo: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },


  // Three-line menu symbol
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
    borderBottomColor: '#29243d',
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


  // MAIN IMAGE
  mainImage: {
    width: '100%',
    height: 190,
    marginTop: 18,
    resizeMode: 'cover',
  },



  // MAIN TITLE
 mainTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    paddingLeft: 12,
    paddingRight: 12,
  },


  // Description underneath title
  description: {
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
    paddingLeft: 12,
    paddingRight: 12,
  },


  // SEPARATOR
  separator: {
    height: 1,
    backgroundColor: '#222222',
    marginTop: 18,
  },

  // SECTION TITLE
  sectionTitle: {
    color: '#FF00FF',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 18,
    paddingLeft: 12,
    paddingRight: 12,
  },


  // OPERATORS
  operatorsContainer: {
    flexDirection: 'row',
    marginTop: 12,
    paddingLeft: 8,
    paddingRight: 8,
  },


  // Individual operator box
  operatorCard: {
    flex: 1,
    height: 125,
    backgroundColor: '#151329',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
    marginRight: 4,
    padding: 8,
  },
  
  // Operator picture
  operatorImage: {
    width: 55,
    height: 55,
    borderRadius: 30,
    resizeMode: 'cover',
  },


  // Operator name
  operatorName: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 6,
    textAlign: 'center',
  },


  // Operator job
  operatorRole: {
    color: '#888888',
    fontSize: 8,
    marginTop: 3,
    textAlign: 'center',
  },


  // ESPORTS & TOURNEYS BOX
  tourneyBox: {
    backgroundColor: '#111126',
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 25,
    padding: 14,
  },


  // Section heading
  tourneyTitle: {
    color: '#FF00FF',
    fontSize: 12,
    fontWeight: 'bold',
  },


  // Section description
  tourneyText: {
    color: '#BBBBBB',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 8,
  },
});
