import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "styled-components";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "../../slices/cartSlice";

const Cont = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px;
  margin-top: 10px;
  box-shadow: 0 25px 50px gray;
`;

const DishRows = ({ item }) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    selectCartItemsById(state, item.id)
  );

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item.id }));
  };
  return (
    <Cont>
      <Image
        style={{
          height: 100,
          width: 100,
          borderRadius: 50,
        }}
        source={item.image}
      />
      <View style={{ flex: 1 }}>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <Text>${item.price}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems.length}
              style={{ borderRadius: 50, backgroundColor: "gray" }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={25}
                width={25}
                stroke={"white"}
              />
            </TouchableOpacity>

            <Text style={{ paddingHorizontal: 10 }}>{totalItems.length}</Text>
            <TouchableOpacity
              style={{ borderRadius: 50, backgroundColor: "gray" }}
              onPress={handleIncrease}
            >
              <Icon.Plus
                strokeWidth={2}
                height={25}
                width={25}
                stroke={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Cont>
  );
};

export default DishRows;
