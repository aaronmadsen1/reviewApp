import { createStackNavigator } from "react-navigation-stack"
import React from "react"
import Header from "../shared/header"
import Home from "../screens/home"
import ReviewDetails from "../screens/reviewDetails"

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="GameZone" navigation={navigation} />
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details"
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "lightgray", height: 80 }
  }
})

export default HomeStack
