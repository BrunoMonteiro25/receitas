import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

import { getFavorites } from '../../utils/storage'

import FoodList from '../../components/foodlist'

export default function Favorites() {
  const [receipes, setReceipes] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    let isActive = true

    async function getReceipes() {
      const result = await getFavorites('@appreceitas')

      if (isActive) {
        setReceipes(result)
      }
    }

    if (isActive) {
      getReceipes()
    }

    return () => {
      isActive = false
    }
  }, [isFocused])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Receitas Favoritas</Text>

      {receipes.length === 0 && (
        <Text style={{ marginTop: 14, fontSize: 15 }}>
          Você ainda não possui receita salva.
        </Text>
      )}

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f9ff',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 46,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
  },
})
