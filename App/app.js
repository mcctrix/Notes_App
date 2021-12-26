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
            labeled="true"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, size, color }) => {
                let iconName;
                if (route.name == "Home") {
                  iconName = "home";
                  size = focused ? 30 : 20;
                } else if (route.name == "Favourite") {
                  iconName = "heart";
                  size = focused ? 25 : 20;
                } else if (route == "Settings") {
                  iconName = "account";
                  size = focused ? 45 : 40;
                }
                return (
                  <FontAwesome name={iconName} size={size} color="white" />
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

            <Tab.Screen
              name="Favourite"
              component={Favourite}
              options={{
                tabBarIcon: "heart",
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                tabBarIcon: "account",
              }}
            />
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
