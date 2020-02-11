import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal
} from "react-native"
import { globalStyles } from "../styles/global"
import Card from "../shared/card"
import { MaterialIcons } from "@expo/vector-icons"
import ReviewForm from "./reviewForm"

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false)

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
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm />
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
  modalClose: {
    marginTop: 20
  },
  modalContent: {
    flex: 1
  }
})
