import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../src/screens/HomeScreen";
import RestaurantScreem from "../src/screens/RestaurantScreen";
import CartScreen from "../src/screens/CartScreen";
import OrderPrepaerScreen from "../src/screens/OrderPrepaerScreen";
import DeliveryScreen from "../src/screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreem} />
        <Stack.Screen
          name="CartScreen"
          options={{ presentation: "modal" }}
          component={CartScreen}
        />
        <Stack.Screen
          name="OrderScreen"
          options={{ presentation: "fullScreenModal" }}
          component={OrderPrepaerScreen}
        />
        <Stack.Screen
          name="DeliveryScreen"
          options={{ presentation: "fullScreenModal" }}
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
