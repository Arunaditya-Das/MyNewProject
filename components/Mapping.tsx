import { SafeAreaView, View, Text, ScrollView } from 'react-native'
import * as React from 'react'

const mapping = () => {
  const data = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ];
  return (
    <View>
      <ScrollView>
        {data.map((item) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default mapping