import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../slices/cartSlice";

const CartIcon = () => {
  const nav = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const carTotal = useSelector(selectCartTotal);
  if (!cartItems.length) return;
  return (
    <View
      style={{
        position: "absolute",
        bottom: 5,
        zIndex: 50,
        width: 390,
        marginLeft: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => nav.navigate("CartScreen")}
        style={{
          backgroundColor: "gray",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 5,
          paddingHorizontal: 10,
          height: 50,
          borderRadius: 10,
          padding: 4,
          margin: 4,
        }}
      >
        <View
          style={{
            borderRadius: 60,
            backgroundColor: "black",
            width: 40,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 22 }}>
            {cartItems.length}
          </Text>
        </View>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          View Cart
        </Text>
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          ${carTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
