import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { globalStyles } from "../styles/global"

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails")
    // navigation.push("ReviewDetails")  //does same as above, but more granular and explicit
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Page</Text>
      <Button title="go to review details" onPress={pressHandler} />
    </View>
  )
}
