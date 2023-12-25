import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const RestaurantCard = ({ item, navigation }) => {
  const nav = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => nav.navigate("RestaurantScreen", { ...item })}
    >
      <View
        style={{
          marginRight: 10,
        }}
      >
        <Image
          style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
          source={item.image}
        />
        <View style={{ paddingTop: 3, paddingBottom: 4, marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 4 }}>
            {item.name}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
