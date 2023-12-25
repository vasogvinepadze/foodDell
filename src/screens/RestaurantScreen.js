import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";

import * as Icon from "react-native-feather";
import DishRows from "../components/DishRows";
import CartIcon from "../components/CartIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../../slices/restaurantSlice";

const RestaurantScreen = () => {
  const { params } = useRoute();
  let item = params;
  const nav = useNavigation();

  const dispatch = useDispatch();
  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({ ...item }));
    }
  }, []);
  return (
    <View>
      <CartIcon />
      <ScrollView>
        <View style={{ position: "relative" }}>
          <Image style={{ width: "auto", height: 300 }} source={item.image} />
          <TouchableOpacity
            onPress={() => nav.goBack()}
            style={{
              position: "absolute",
              top: 50,
              left: 15,
              width: 25,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <Icon.ArrowLeft strokeWidth={3} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: "white",
            marginTop: -29,
            paddingTop: 12,
          }}
        >
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <View>
              <Text>{item.description}</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              paddingBottom: 66,
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                paddingTop: 20,
              }}
            >
              Menu
            </Text>
            {item.dishes.map((dish, index) => (
              <DishRows item={{ ...dish }} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
