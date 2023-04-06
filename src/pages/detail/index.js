import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native'

import { useRoute, useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Entypo, AntDesign, Feather } from '@expo/vector-icons'
import Ingredients from '../../components/ingredients'
import Instructions from '../../components/instructions'

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 14 }}
    >
      <Pressable>
        <View style={styles.playIcon}>
          <AntDesign name="playcircleo" size={74} color="#fafafa" />
        </View>
        <Image
          source={{ uri: route.params?.data.cover }}
          style={styles.cover}
        />
      </Pressable>

      <View style={styles.headerDetails}>
        <View>
          <Text style={styles.title}>{route.params?.data.name}</Text>
          <Text style={styles.ingredientsText}>
            ingredientes ({route.params?.data.total_ingredients})
          </Text>
        </View>
        <Pressable>
          <Feather name="share-2" size={24} color="#121212" />
        </Pressable>
      </View>

      {route.params?.data.ingredients.map((item) => (
        <Ingredients key={item.id} data={item} />
      ))}

      <View style={styles.instructionsArea}>
        <Text style={styles.instructionsText}>Modo de preparo</Text>
        <Feather
          name="chevrons-down"
          size={24}
          color="#fff"
          style={styles.instructionsIcon}
        />
      </View>

      {route.params?.data.instructions.map((item, index) => (
        <Instructions key={item.id} data={item} index={index} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f9ff',
    paddingTop: 14,
    paddingEnd: 14,
    paddingStart: 14,
  },
  cover: {
    height: 200,
    borderRadius: 14,
    width: '100%',
  },
  playIcon: {
    position: 'absolute',
    zIndex: 99,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 18,
    marginTop: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  ingredientsText: {
    marginBottom: 14,
    fontSize: 16,
  },
  instructionsArea: {
    backgroundColor: '#4cbe6c',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
  instructionsText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#fff',
    marginRight: 8,
  },
  instructionsIcon: {
    marginTop: 2,
  },
})
