import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Receipt21} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../theme';

const ItemHorizontal = ({item, variant}) => {
  return (
    <View style={itemHorizontal.cardItem}>
      <FastImage
        style={itemHorizontal.cardImage}
        source={{
            uri: item.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}>
        <View style={itemHorizontal.cardContent}>
          <View style={itemHorizontal.cardInfo}>
            <Text style={itemHorizontal.cardTitle}>{item.title}</Text>
            <Text style={itemHorizontal.cardText}>{item.createdAt}</Text>
          </View>
          <View>
          </View>
        </View>
      </FastImage>
    </View>
  );
};
const ListHorizontal = ({data}) => {
  const [bookmark] = useState([]);
  const renderItem = ({item}) => {
    variant = bookmark.includes(item.id) ? 'Bold' : 'Linear';
    return (
      <ItemHorizontal
        item={item}
        variant={variant}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 15}} />}
      contentContainerStyle={{paddingHorizontal: 24}}
    //   horizontal
    //   showsHorizontalScrollIndicator={false}
    />
  );
};

export default ListHorizontal;
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 350,
    height: 75,
    marginBottom: 15,
  },
  cardImage: {
    width: '100%',
    height: 75,
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-start',
    height: '100%',
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.grey(),
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