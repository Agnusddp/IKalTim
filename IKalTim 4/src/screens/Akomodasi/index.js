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
import {AkomodasiData, ListBlog} from '../../../data';
import {ListHorizontal} from '../../components';
import { fontType, colors } from '../../theme';

const ItemRecent = ({item}) => {
  return (
    <View style={recent.button}>
      <Text style={recent.label}>{item.label}</Text>
    </View>
  );
};
const Akomodasi = () => {
  const horizontalData = ListBlog.slice(0, 5);
  const restoranData = AkomodasiData.slice(0, 5);
  const hotelData = AkomodasiData.slice(5, 7);
  const kendaraanData = AkomodasiData.slice(7, 9);
  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
      <View styles={styles.container}>
        <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>IKalTim.</Text>
        </View>
      </View>
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Tempat Wisata</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.listBlog}>
        <ListHorizontal data={horizontalData} />
      </View>
    </ScrollView>
    <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Restoran</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.listBlog}>
        <ListHorizontal data={restoranData} />
      </View>
    </ScrollView>
    <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Hotel</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.listBlog}>
        <ListHorizontal data={hotelData} />
      </View>
    </ScrollView>
    <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Kendaraan</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.listBlog}>
        <ListHorizontal data={kendaraanData} />
      </View>
    </ScrollView>
    </View>
    </ScrollView>
  );
};
export default Akomodasi;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
header: {
    paddingHorizontal: 24,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.5),
    lineHeight: 18,
  },
});
const recent = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: colors.grey(0.15),
    borderWidth: 1,
    backgroundColor: colors.grey(0.03),
  },
  label: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.65),
  },
  text: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    paddingVertical: 5,
    paddingHorizontal: 24,
  },
});