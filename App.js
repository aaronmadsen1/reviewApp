import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import * as Font from "expo-font"
import { AppLoading } from "expo"

import Home from "./screens/home"
import About from "./screens/about"
import ReviewDetails from "./screens/reviewDetails"

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
  })

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return <Home />
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    )
  }
}
