import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native'

export default function WorkOrderScreen() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')

  const handleCreateWorkOrder = () => {
    if (!title || !description || !location) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun')
      return
    }

    Alert.alert('Başarılı', 'İş emri oluşturuldu')

    setTitle('')
    setDescription('')
    setLocation('')
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
        Yeni İş Emri
      </Text>

      <Text
        style={{
          marginBottom: 8,
          color: '#374151'
        }}
      >
        İş Başlığı
      </Text>

      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="İş başlığı girin"
        style={{
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#d1d5db',
          borderRadius: 12,
          padding: 14,
          marginBottom: 16
        }}
      />

      <Text
        style={{
          marginBottom: 8,
          color: '#374151'
        }}
      >
        Açıklama
      </Text>

      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Açıklama girin"
        multiline
        numberOfLines={4}
        style={{
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#d1d5db',
          borderRadius: 12,
          padding: 14,
          marginBottom: 16,
          minHeight: 100,
          textAlignVertical: 'top'
        }}
      />

      <Text
        style={{
          marginBottom: 8,
          color: '#374151'
        }}
      >
        Konum
      </Text>

      <TextInput
        value={location}
        onChangeText={setLocation}
        placeholder="Konum girin"
        style={{
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#d1d5db',
          borderRadius: 12,
          padding: 14,
          marginBottom: 24
        }}
      />

      <TouchableOpacity
        onPress={handleCreateWorkOrder}
        style={{
          backgroundColor: '#2563eb',
          padding: 16,
          borderRadius: 12
        }}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold'
          }}
        >
          İş Emri Oluştur
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
