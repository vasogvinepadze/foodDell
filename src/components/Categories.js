import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { category } from "../../constans";

const Categories = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {category.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <TouchableOpacity style={{ padding: 15, alignItems: "center" }}>
                <Image source={item.img} />
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
