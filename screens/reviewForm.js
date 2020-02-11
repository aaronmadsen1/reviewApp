import React from "react"
import { StyleSheet, Button, TextInput, View, Text } from "react-native"
import { globalStyles } from "../styles/global"
import { Formik } from "formik"

export default function ReviewForm() {
  return (
    <View style={globalStyles.containter}>
      <Formik
        initialValues={{
          title: "",
          body: "",
          rating: ""
        }}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {formikProps => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={formikProps.handleChange("title")}
              value={formikProps.values.title}
            />

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Review (1-5)"
              onChangeText={formikProps.handleChange("rating")}
              value={formikProps.values.rating}
              keyboardType="numeric"
            />

            <Button
              title="Submit"
              color="maroon"
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  )
}
