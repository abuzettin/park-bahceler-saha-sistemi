import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import DashboardScreen from './DashboardScreen'
import { supabase } from '../services/supabase'

export default function LoginScreen() {
  const [persNo, setPersNo] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!persNo || !password) {
      Alert.alert('Hata', 'Lütfen personel numarası ve şifre girin')
      return
    }

    setLoading(true)

    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('pers_no', persNo)
        .eq('password_hash', password)
        .single()

      if (error || !data) {
        Alert.alert('Hata', 'Personel numarası veya şifre yanlış')
        setLoading(false)
        return
      }

      setLoggedIn(true)
    } catch (err) {
      Alert.alert('Hata', 'Sisteme bağlanırken hata oluştu')
    }

    setLoading(false)
  }

  if (loggedIn) {
    return <DashboardScreen />
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#f4f6f8'
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 10,
          color: '#1f2937'
        }}
      >
        Park Bahçeler
      </Text>

      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: '#6b7280',
          marginBottom: 30
        }}
      >
        Saha Yönetim Sistemi
      </Text>

      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 16,
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowRadius: 5,
          elevation: 4
        }}
      >
        <Text
          style={{
            marginBottom: 8,
            fontSize: 14,
            color: '#374151'
          }}
        >
          Personel Numarası
        </Text>

        <TextInput
          value={persNo}
          onChangeText={setPersNo}
          placeholder="Personel numaranızı girin"
          keyboardType="numeric"
          style={{
            borderWidth: 1,
            borderColor: '#d1d5db',
            borderRadius: 12,
            padding: 14,
            marginBottom: 20,
            backgroundColor: '#fff'
          }}
        />

        <Text
          style={{
            marginBottom: 8,
            fontSize: 14,
            color: '#374151'
          }}
        >
          Şifre
        </Text>

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Şifrenizi girin"
          secureTextEntry
          style={{
            borderWidth: 1,
            borderColor: '#d1d5db',
            borderRadius: 12,
            padding: 14,
            marginBottom: 24,
            backgroundColor: '#fff'
          }}
        />

        <TouchableOpacity
          onPress={handleLogin}
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
            {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
