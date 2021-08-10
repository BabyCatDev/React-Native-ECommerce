import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import CategoriesBlock from '../components/Block/Categories';
import HorizontalProductView from '../components/Block/HorizontalProductView';
import UiText from '../components/UI/Text';
import UiView from '../components/UI/View';
import COLORS from '../constants/COLORS';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import OfferBlock from '../components/Block/Offer';

const Products = ({ navigation }) => {
  const popularProducts = useSelector((state) => state.product.popularProducts);

  return (
    <UiView style={styles.screen}>
      <View style={styles.head}>
        <UiText style={styles.heading}>NativeShop</UiText>
        <UiText style={styles.subHeading}>A perfect shoppers stop</UiText>
      </View>
      <CategoriesBlock navigation={navigation} />
      <HorizontalProductView
        data={popularProducts}
        navigation={navigation}
        headTitle="Popular Products"
      />
      <OfferBlock />
      <View style={styles.empty}></View>
    </UiView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
  },
  head: {
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    color: COLORS.primaryColor,
  },
  subHeading: {
    fontSize: 16,
    color: COLORS.textColorLight,
  },
  empty: {
    minHeight: 60,
  },
});

export default Products;
