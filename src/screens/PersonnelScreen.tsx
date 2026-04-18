import React from 'react'
import { ScrollView, View, Text } from 'react-native'

export default function PersonnelScreen() {
  const personnel = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Bahçıvan'
    },
    {
      name: 'Mehmet Kaya',
      role: 'Saha Personeli'
    },
    {
      name: 'Ayşe Demir',
      role: 'Peyzaj Mimarı'
    },
    {
      name: 'Fatma Çelik',
      role: 'Teknik Personel'
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
        Personeller
      </Text>

      {personnel.map((item, index) => (
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
            {item.name}
          </Text>

          <Text
            style={{
              marginTop: 6,
              color: '#6b7280'
            }}
          >
            Görev: {item.role}
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}
