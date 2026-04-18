import React from 'react'
import { ScrollView, View, Text } from 'react-native'

export default function MapScreen() {
  const locations = [
    {
      name: 'Akçakaya Muhtarlık Önü Park',
      mahalle: 'Akçakaya'
    },
    {
      name: 'Harman Yeri Park',
      mahalle: 'Akçakaya'
    },
    {
      name: 'Aliya İzzetbegoviç Parkı',
      mahalle: 'Bahçelievler'
    },
    {
      name: 'Mevlana Parkı',
      mahalle: 'Mevlana'
    }
  ]

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#f3f4f6'
      }}
      contentContainerStyle={{
        padding: 20
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: 20
        }}
      >
        Harita ve Lokasyonlar
      </Text>

      {locations.map((location, index) => (
        <View
          key={index}
          style={{
            backgroundColor: '#fff',
            padding: 18,
            borderRadius: 14,
            marginBottom: 12,
            elevation: 3
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#111827'
            }}
          >
            {location.name}
          </Text>

          <Text
            style={{
              marginTop: 6,
              color: '#6b7280'
            }}
          >
            Mahalle: {location.mahalle}
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}
