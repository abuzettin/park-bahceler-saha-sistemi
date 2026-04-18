import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import DashboardScreen from './DashboardScreen'
import { supabase } from '../services/supabase'

export default function LoginScreen() {
  const [persNo, setPersNo] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('pers_no', persNo)
      .eq('password_hash', password)
      .single()

    if (data) {
      setLoggedIn(true)
    } else {
      Alert.alert('Hata', 'Pers No veya şifre yanlış')
    }
  }

  if (loggedIn) {
    return <DashboardScreen />
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 30,
          textAlign: 'center',
        }}
      >
        Park Bahçeler Sistemi
      </Text>

      <TextInput
        placeholder="Pers No"
        value={persNo}
        onChangeText={setPersNo}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 12,
          borderRadius: 10,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Şifre"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 12,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: '#2563eb',
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Giriş Yap
        </Text>
      </TouchableOpacity>
    </View>
  )
}
