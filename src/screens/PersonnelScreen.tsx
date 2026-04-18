import React from 'react'
import { ScrollView, View, Text } from 'react-native'

export default function PersonnelScreen() {
  const personnel = [
    {
      name: 'Abidin GÖLBAŞI',
      unit: 'Çim Biçme Ekibi',
      persNo: '1001'
    },
    {
      name: 'Adem EROĞLU',
      unit: 'Çim Biçme Ekibi',
      persNo: '1002'
    },
    {
      name: 'Ahmet ŞAHANKAYA',
      unit: 'Budama Ekibi',
      persNo: '1004'
    },
    {
      name: 'Mustafa KALEM',
      unit: 'Depo İşleri',
      persNo: '1054'
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
          marginBottom: 20,
          color: '#111827'
        }}
      >
        Personel Listesi
      </Text>

      {personnel.map((person, index) => (
        <View
          key={index}
          style={{
            backgroundColor: '#fff',
            padding: 18,
            borderRadius: 14,
            marginBottom: 12,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 5,
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
            {person.name}
          </Text>

          <Text
            style={{
              marginTop: 6,
              color: '#6b7280'
            }}
          >
            Birim: {person.unit}
          </Text>

          <Text
            style={{
              marginTop: 4,
              color: '#6b7280'
            }}
          >
            Personel No: {person.persNo}
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}
