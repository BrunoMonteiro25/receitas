import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Instructions({ data, index }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{index + 1}- </Text>
      <Text style={styles.text}>{data.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    paddingEnd: 25,
    marginBottom: 14,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    lineHeight: 20,
  },
})
