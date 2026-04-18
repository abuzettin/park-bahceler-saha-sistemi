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
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  const handleCreateWorkOrder = () => {
    if (!title || !location || !description) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun')
      return
    }

    Alert.alert('Başarılı', 'İş emri oluşturuldu')

    setTitle('')
    setLocation('')
    setDescription('')
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
          color: '#111827',
          marginBottom: 20
        }}
      >
        Yeni İş Emri
      </Text>

      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 16,
          padding: 20,
          elevation: 4
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: '#374151',
            marginBottom: 8
          }}
        >
          İş Başlığı
        </Text>

        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Örn: Çim biçme çalışması"
          style={{
            borderWidth: 1,
            borderColor: '#d1d5db',
            borderRadius: 12,
            padding: 14,
            marginBottom: 18
          }}
        />

        <Text
          style={{
            fontSize: 14,
            color: '#374151',
            marginBottom: 8
          }}
        >
          Konum
        </Text>

        <TextInput
          value={location}
          onChangeText={setLocation}
          placeholder="Örn: Bahçelievler Parkı"
          style={{
            borderWidth: 1,
            borderColor: '#d1d5db',
            borderRadius: 12,
            padding: 14,
            marginBottom: 18
          }}
        />

        <Text
          style={{
            fontSize: 14,
            color: '#374151',
            marginBottom: 8
          }}
        >
          Açıklama
        </Text>

        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Yapılacak işi açıklayın"
          multiline
          numberOfLines={4}
          style={{
            borderWidth: 1,
            borderColor: '#d1d5db',
            borderRadius: 12,
            padding: 14,
            height: 120,
            textAlignVertical: 'top',
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
              fontWeight: 'bold',
              fontSize: 16
            }}
          >
            İş Emrini Kaydet
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
