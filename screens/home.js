import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native"
import { globalStyles } from "../styles/global"

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 4,
      body: "Review for the 2nd title",
      key: "2"
    },
    {
      title: "Gota Catch Them All",
      rating: 5,
      body: "Review for the 1st title",
      key: "1"
    },
    {
      title: 'Not so "Final" Fantasy',
      rating: 3,
      body: "Review for the 3rd title",
      key: "3"
    }
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

// not being used #21
// const pressHandler = () => {
//   navigation.navigate("ReviewDetails")
//   // navigation.push("ReviewDetails")  //does same as above, but more granular and explicit
// }
{
  /* <Button title="go to review details" onPress={pressHandler} /> */
}
