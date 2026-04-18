import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import WorkOrderScreen from './WorkOrderScreen'
import PersonnelScreen from './PersonnelScreen'

export default function DashboardScreen() {
  const [selectedScreen, setSelectedScreen] = useState('dashboard')

  if (selectedScreen === 'workorder') {
    return <WorkOrderScreen />
  }

  if (selectedScreen === 'personnel') {
    return <PersonnelScreen />
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
          marginBottom: 5
        }}
      >
        Park Bahçeler
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: '#6b7280',
          marginBottom: 25
        }}
      >
        Saha Yönetim Paneli
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20
        }}
      >
        <View
          style={{
            backgroundColor: '#fff',
            width: '48%',
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
              color: '#6b7280',
              fontSize: 14
            }}
          >
            Aktif İşler
          </Text>

          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#2563eb',
              marginTop: 10
            }}
          >
            12
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            width: '48%',
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
              color: '#6b7280',
              fontSize: 14
            }}
          >
            Tamamlanan
          </Text>

          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#16a34a',
              marginTop: 10
            }}
          >
            48
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 16,
          marginBottom: 20,
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowRadius: 5,
          elevation: 4
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#111827'
          }}
        >
          Hızlı İşlemler
        </Text>

        <TouchableOpacity
          onPress={() => setSelectedScreen('workorder')}
          style={{
            backgroundColor: '#2563eb',
            padding: 16,
            borderRadius: 12,
            marginBottom: 12
          }}
        >
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Yeni İş Emri Oluştur
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedScreen('personnel')}
          style={{
            backgroundColor: '#16a34a',
            padding: 16,
            borderRadius: 12,
            marginBottom: 12
          }}
        >
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Personeller
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#ea580c',
            padding: 16,
            borderRadius: 12,
            marginBottom: 12
          }}
        >
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Harita
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#7c3aed',
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
            Raporlar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
