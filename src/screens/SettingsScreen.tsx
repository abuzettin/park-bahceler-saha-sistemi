import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Alert } from 'react-native'

export default function SettingsScreen() {
  const handleLogout = () => {
    Alert.alert('Çıkış Yapıldı')
  }

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
        Ayarlar
      </Text>

      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 14,
          marginBottom: 20
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10
          }}
        >
          Kullanıcı Bilgileri
        </Text>

        <Text style={{ color: '#6b7280', marginBottom: 6 }}>
          Ad Soyad: Sistem Yöneticisi
        </Text>

        <Text style={{ color: '#6b7280', marginBottom: 6 }}>
          Personel No: 9999
        </Text>

        <Text style={{ color: '#6b7280' }}>
          Rol: Yönetici
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: '#dc2626',
          padding: 16,
          borderRadius: 12
        }}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          Çıkış Yap
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
