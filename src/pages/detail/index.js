import { Pressable, StyleSheet, Text, View } from 'react-native'

import { useRoute, useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Entypo } from '@expo/vector-icons'

export default function Detail() {
  const route = useRoute()
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : 'Detalhes da receita',

      headerRight: () => (
        <Pressable>
          <Entypo name="heart" size={28} color="#ff4141" />
        </Pressable>
      ),
    })
  }, [navigation, route.params?.data])

  return (
    <View>
      <Text>{route.params?.data.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
