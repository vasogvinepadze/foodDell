import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard";

const FeatureRow = ({ title, desctiption, restaurants, onPress }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 18,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
          <Text style={{ color: "gray", fontSize: 10 }}>{desctiption}</Text>
        </View>
        <TouchableOpacity>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={{ overflow: "visible", paddingTop: 5 }}
      >
        {restaurants.map((restaurants, index) => {
          return <RestaurantCard item={restaurants} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
