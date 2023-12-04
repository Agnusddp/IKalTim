import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  Notification,
  Receipt21,
  Clock,
  Message,
  SearchNormal,
  Health,
  People,
  Activity,
  Call,
  Setting,
} from 'iconsax-react-native';
import {fontType, colors} from './src/theme';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const handleSearchPress = text => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>IKalTim.</Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 24, marginTop: 10}}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Cari Tempat Wisata"
            onChangeText={handleSearchPress}
            value={searchText}
            placeholderTextColor="grey"
          />
          <View style={styles.searchButtonContainer}>
            <TouchableOpacity style={styles.searchButton}>
              <SearchNormal
                color={colors.black()}
                variant="Linear"
                size={24}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.listCategory}></View>
      <ListBlog />
    </View>
  );
}

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <View>
          <Text
            style={{
              color: 'black',
              paddingHorizontal: 24,
              fontSize: 20,
              fontFamily: fontType['Pjs-Bold'],
            }}>
            Jelajahi Kalimantan Timur
          </Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap:0}}>
            
          <View style={{...itemHorizontal.cardItem, marginRight: 12,marginLeft: 24}}>
            <ImageBackground
              source={require('./src/assets/image/1.jpg')}
              style={{width: 200, height: 300, borderRadius: 5}}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Taman Nasional Kutai</Text>
                  <Text style={itemHorizontal.cardText}> </Text>
                </View>
                <View></View>
              </View>
            </ImageBackground>
          </View>
          
          <View style={{...itemHorizontal.cardItem, marginRight: 12}}>
            <ImageBackground
              source={require('./src/assets/image/2.jpg')}
              style={{width: 200, height: 300, borderRadius: 5}}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Pantai Lemaru</Text>
                  <Text style={itemHorizontal.cardText}> </Text>
                </View>
                <View></View>
              </View>
            </ImageBackground>
          </View>

          <View style={{...itemHorizontal.cardItem, marginRight: 12}}>
            <ImageBackground
              source={require('./src/assets/image/4.jpeg')}
              style={{width: 200, height: 300, borderRadius: 5}}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Pantai Lemaru</Text>
                  <Text style={itemHorizontal.cardText}> </Text>
                </View>
                <View></View>
              </View>
            </ImageBackground>
          </View>

          <View style={{...itemHorizontal.cardItem, marginRight: 12}}>
            <ImageBackground
              source={require('./src/assets/image/5.jpg')}
              style={{width: 200, height: 300, borderRadius: 5}}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Pantai Lemaru</Text>
                  <Text style={itemHorizontal.cardText}> </Text>
                </View>
                <View></View>
              </View>
            </ImageBackground>
          </View>

          <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
            <ImageBackground
              source={require('./src/assets/image/3.jpg')}
              style={{width: 200, height: 300, borderRadius: 5}}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Gunung Embun</Text>
                  <Text style={itemHorizontal.cardText}> </Text>
                </View>
                <View></View>
              </View>
            </ImageBackground>
          </View>

        </ScrollView>
        <View style={{paddingHorizontal: 24, paddingTop: 16}}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: fontType['Pjs-Bold'],
            }}>
            Event
          </Text>
          <View>
            <View style={eventKaltim.listCard}>
              <View style={eventKaltim.cardItem}>
                <Image
                  style={eventKaltim.cardImage}
                  source={require('./src/assets/image/e1.jpg')}
                />
                <View style={eventKaltim.cardContent}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{gap: 5, width: '70%'}}>
                      <Text style={eventKaltim.cardCategory}>Adat</Text>
                      <Text style={eventKaltim.cardTitle}>
                        Erau
                      </Text>
                    </View>
                    <Receipt21
                      color={colors.grey(0.6)}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                  <View style={eventKaltim.cardInfo}>
                    <Clock
                      size={10}
                      variant="Linear"
                      color={colors.grey(0.6)}
                    />
                    <Text style={eventKaltim.cardText}>20 September 2023</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={eventKaltim.listCard}>
              <View style={eventKaltim.cardItem}>
                <Image
                  style={eventKaltim.cardImage}
                  source={require('./src/assets/image/e2.jpg')}
                />
                <View style={eventKaltim.cardContent}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{gap: 5, width: '70%'}}>
                      <Text style={eventKaltim.cardCategory}>Konser</Text>
                      <Text style={eventKaltim.cardTitle}>
                        Play Music Festifal 2023 Balikpapan
                      </Text>
                    </View>
                    <Receipt21
                      color={colors.grey(0.6)}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                  <View style={eventKaltim.cardInfo}>
                    <Clock
                      size={10}
                      variant="Linear"
                      color={colors.grey(0.6)}
                    />
                    <Text style={eventKaltim.cardText}>22 Juli 2023</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={eventKaltim.listCard}>
              <View style={eventKaltim.cardItem}>
                <Image
                  style={eventKaltim.cardImage}
                  source={require('./src/assets/image/e3.jpeg')}
                />
                <View style={eventKaltim.cardContent}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{gap: 5, width: '70%'}}>
                      <Text style={eventKaltim.cardCategory}>Perayaan</Text>
                      <Text style={eventKaltim.cardTitle}>
                        Pawai Budaya HUT Balikpapan
                      </Text>
                    </View>
                    <Receipt21
                      color={colors.grey(0.6)}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                  <View style={eventKaltim.cardInfo}>
                    <Clock
                      size={10}
                      variant="Linear"
                      color={colors.grey(0.6)}
                    />
                    <Text style={eventKaltim.cardText}>23 Februari 2023</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={eventKaltim.listCard}>
              <View style={eventKaltim.cardItem}>
                <Image
                  style={eventKaltim.cardImage}
                  source={require('./src/assets/image/e4.jpeg')}
                />
                <View style={eventKaltim.cardContent}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{gap: 5, width: '70%'}}>
                      <Text style={eventKaltim.cardCategory}>Kompetisi</Text>
                      <Text style={eventKaltim.cardTitle}>
                        Lomba Wisata dan Budaya Kalimantan Timur
                      </Text>
                    </View>
                    <Receipt21
                      color={colors.grey(0.6)}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                  <View style={eventKaltim.cardInfo}>
                    <Clock
                      size={10}
                      variant="Linear"
                      color={colors.grey(0.6)}
                    />
                    <Text style={eventKaltim.cardText}>21 November 2023</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  searchButtonContainer: {
    paddingLeft: 14,
  },
  searchButton: {},
  icon: {
    margin: 8,
    // marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 2,
    color: 'black',
    height: 45,
  },
  header: {
    paddingHorizontal: 24,
    // justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    gap: 20,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemCat: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
  textCat: {
    color: 'black',
  },
});

const eventKaltim = StyleSheet.create({
  listCard: {
    paddingVertical: 10,
  },
  cardItem: {
    backgroundColor: 'rgba(0, 50, 0, 0.05)',
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: 'rgba(0, 100, 0, 1)',
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: 'rgba(0, 100, 0, 1)',
  },
  cardImage: {
    width: 100,
    height: 'auto',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 40,
    paddingLeft: 45,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 380,
    height: 265,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
