import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { featured } from "../../constans";
import * as Icon from "react-native-feather";
import { theme } from "../../theme";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../../slices/restaurantSlice";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../../slices/cartSlice";

const CartScreen = () => {
  const nav = useNavigation();
  const deliveryfee = 5;
  const restaurant = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const [groupedItem, setGroupedItem] = useState({});
  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItem(items);
  }, [cartItems]);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ position: "relative", padding: 10, margin: 10 }}>
        <TouchableOpacity
          onPress={() => nav.goBack()}
          style={{
            backgroundColor: "gray",
            position: "absolute",
            borderRadius: 50,
          }}
        >
          <Icon.ArrowLeft stroke="white" strokeWidth={3} />
        </TouchableOpacity>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 19 }}
          >
            Your cart
          </Text>
          <Text style={{ textAlign: "center", color: "gray" }}>
            {restaurant.name}
          </Text>
        </View>
        <View
          style={{
            height: 140,
            width: 400,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "red,
          }}
        >
          <Image
            source={require("../../assets/images/bike.jpeg")}
            style={{ width: 140, height: 120 }}
          />
          <Text style={{ flex: 1, fontWeight: "bold" }}>
            Delivery in 10-20 minutes
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "gray" }}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white", paddingTop: 5 }}
      >
        {Object.entries(groupedItem).map(([key, items]) => {
          let dish = items[0];
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                borderRadius: 5,
                padding: 20,
                marginTop: 10,
                backgroundColor: "#F5F7F8",
                paddingHorizontal: 10,
                marginHorizontal: 10,
              }}
              key={key}
            >
              <Text
                style={{ fontSize: 14, fontWeight: "bold", paddingRight: 10 }}
              >
                {items.length}
              </Text>
              <Image style={{ width: 42, height: 42 }} source={dish.image} />
              <Text
                style={{
                  fontSize: 17,
                  paddingLeft: 10,
                  fontWeight: "bold",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                {dish.name}
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                ${dish.price}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart({ id: dish.id }))}
                style={{
                  borderRadius: 30,
                  backgroundColor: "red",
                  marginLeft: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon.Minus
                  stroke="white"
                  strokeWidth={2}
                  height={20}
                  width={20}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          padding: 15,
          paddingHorizontal: 30,
          marginBottom: 50,
          borderRadius: 10,
          width: 430,
          height: 120,
          gap: 5,

          backgroundColor: "#F5F7F8",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>SubTotal</Text>
          <Text>${cartTotal}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Delivery Fee</Text>
          <Text>${deliveryfee}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>OrderTotal</Text>
          <Text>${deliveryfee + cartTotal}</Text>
        </View>
        <TouchableOpacity
          onPress={() => nav.navigate("OrderScreen")}
          style={{
            borderRadius: 5,
            height: 40,
            width: 370,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Place Holder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
