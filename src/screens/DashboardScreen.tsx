import { View, Text, TouchableOpacity } from 'react-native'

export default function DashboardScreen() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#f3f4f6' }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 20,
        }}
      >
        Hoş Geldiniz
      </Text>

      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 12,
          marginBottom: 15,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Aktif İş Emirleri
        </Text>
        <Text style={{ fontSize: 30, color: '#2563eb', marginTop: 10 }}>
          12
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 12,
          marginBottom: 15,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Tamamlanan İşler
        </Text>
        <Text style={{ fontSize: 30, color: '#16a34a', marginTop: 10 }}>
          48
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#2563eb',
          padding: 16,
          borderRadius: 12,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Yeni İş Emri Oluştur
        </Text>
      </TouchableOpacity>
    </View>
  )
}
