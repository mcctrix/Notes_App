import React from "react";
import HomeScreen from "./components/HomeScreen";
import Favourite from "./components/Favourite";
import Settings from "./components/Settings";
import GlobalStore from "./components/GlobalStore";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function app() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <View style={styles.main}>
      <GlobalStore>
        <NavigationContainer initialRoute="Home">
          <Tab.Navigator
            barStyle={{ backgroundColor: "#055d75" }}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, size, color }) => {
                let iconName;
                let colour;
                if (route.name == "Home") {
                  iconName = "home";
                  size = focused ? 27 : 15;
                  colour = focused ? "green" : "white";
                } else if (route.name == "Favourite") {
                  iconName = "heart";
                  size = focused ? 22 : 15;
                  color = focused ? "red" : "white";
                } else if (route.name == "Settings") {
                  iconName = "user";
                  size = focused ? 22 : 15;
                  colour = "white";
                }
                return (
                  <FontAwesome name={iconName} size={size} color={color} />
                );
              },
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Notes",
              }}
            />

            <Tab.Screen name="Favourite" component={Favourite} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </GlobalStore>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
