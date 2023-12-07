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
import {ListPengaduan} from '../../components';
import { fontType, colors } from '../../theme';

const ItemRecent = ({item}) => {
  return (
    <View style={recent.button}>
      <Text style={recent.label}>{item.label}</Text>
    </View>
  );
};
const Akomodasi = () => {
  const horizontalData = AkomodasiData.slice(9, 10);
  const restoranData = AkomodasiData.slice(10, 11);
  const hotelData = AkomodasiData.slice(11, 12);
  const kendaraanData = AkomodasiData.slice(12, 13);
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View styles={styles.container}>
        <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>IKalTim.</Text>
        </View>
      </View>
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Laporan Pengaduan</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.listBlog}>
        <ListPengaduan data={horizontalData} />
      </View>
    </ScrollView>
      <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.listBlog}>
        <ListPengaduan data={restoranData} />
      </View>
    </ScrollView>
      <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.listBlog}>
        <ListPengaduan data={hotelData} />
      </View>
    </ScrollView>
      <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.listBlog}>
        <ListPengaduan data={kendaraanData} />
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