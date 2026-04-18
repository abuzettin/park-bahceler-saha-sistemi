import { View, Text, TouchableOpacity } from 'react-native'

export default function DashboardScreen() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#f4f6f9' }}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          marginBottom: 20,
        }}
      >
        Park Bahçeler Yönetim Paneli
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#2563eb',
          padding: 18,
          borderRadius: 12,
          marginBottom: 12,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
          İş Emirleri
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#16a34a',
          padding: 18,
          borderRadius: 12,
          marginBottom: 12,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
          Harita
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#ea580c',
          padding: 18,
          borderRadius: 12,
          marginBottom: 12,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
          Personeller
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#7c3aed',
          padding: 18,
          borderRadius: 12,
          marginBottom: 12,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
          Raporlar
        </Text>
      </TouchableOpacity>
    </View>
  )
}
