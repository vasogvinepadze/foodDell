import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";

const OrderPrepaerScreen = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.navigate("DeliveryScreen");
    }, 3000);
  }, []);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Image
        style={{ width: 400, height: 330 }}
        source={require("../../assets/images/giphy.gif")}
      />
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Your order is coming.
        </Text>
      </View>
    </View>
  );
};

export default OrderPrepaerScreen;
