import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import FoodList from '../../components/foodlist'
import api from '../../services/api'

export default function Search() {
  const route = useRoute()
  const [receipes, setReceipes] = useState([])

  useEffect(() => {
    async function fetchReceipes() {
      const response = await api.get(`/foods?name_like=${route.params?.name}`)
      setReceipes(response.data)
    }
    fetchReceipes()
  }, [route.params?.name])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você pesquisou por: {route.params?.name}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        ListEmptyComponent={() => (
          <Text style={styles.search}>
            Nenhum resultado para essa pesquisa...
          </Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f9ff',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  text: {
    marginBottom: 14,
    fontSize: 18,
    fontWeight: 500,
  },
  search: {
    fontSize: 16,
  },
})
