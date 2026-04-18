import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import MapScreen from './MapScreen'
import PersonnelScreen from './PersonnelScreen'
import ReportScreen from './ReportScreen'
import WorkOrderScreen from './WorkOrderScreen'

export default function DashboardScreen() {
  const [activeScreen, setActiveScreen] = useState('dashboard')

  if (activeScreen === 'map') {
    return <MapScreen />
  }

  if (activeScreen === 'personnel') {
    return <PersonnelScreen />
  }

  if (activeScreen === 'reports') {
    return <ReportScreen />
  }

  if (activeScreen === 'workorders') {
    return <WorkOrderScreen />
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
        Park Bahçeler Yönetim Paneli
      </Text>

      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 14,
          marginBottom: 15
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >
          Aktif Emirler
        </Text>

        <Text
          style={{
            fontSize: 32,
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
          padding: 20,
          borderRadius: 14,
          marginBottom: 15
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >
          Tamamlanan İşler
        </Text>

        <Text
          style={{
            fontSize: 32,
            color: '#16a34a',
            marginTop: 10
          }}
        >
          48
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => setActiveScreen('map')}
        style={{
          backgroundColor: '#2563eb',
          padding: 16,
          borderRadius: 12,
          marginBottom: 10
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Harita Ekranı
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setActiveScreen('personnel')}
        style={{
          backgroundColor: '#16a34a',
          padding: 16,
          borderRadius: 12,
          marginBottom: 10
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Personel Listesi
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setActiveScreen('reports')}
        style={{
          backgroundColor: '#ea580c',
          padding: 16,
          borderRadius: 12,
          marginBottom: 10
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Raporlar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setActiveScreen('workorders')}
        style={{
          backgroundColor: '#7c3aed',
          padding: 16,
          borderRadius: 12
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          İş Emirleri
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
