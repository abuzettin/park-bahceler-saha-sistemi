import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

export default function DashboardScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f4f6f8' }}
      contentContainerStyle={{ padding: 20 }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 20,
          color: '#1f2937'
        }}
      >
        Park Bahçeler Saha Sistemi
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: '#6b7280',
          marginBottom: 20
        }}
      >
        Hoş Geldiniz
      </Text>

      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 14,
          marginBottom: 15
        }}
      >
        <Text style={{ fontSize: 16, color: '#6b7280' }}>
          Aktif İş Emirleri
        </Text>
        <Text
          style={{
            fontSize: 34,
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
          padding: 20,
          borderRadius: 14,
          marginBottom: 15
        }}
      >
        <Text style={{ fontSize: 16, color: '#6b7280' }}>
          Tamamlanan İşler
        </Text>
        <Text
          style={{
            fontSize: 34,
            fontWeight: 'bold',
            color: '#16a34a',
            marginTop: 10
          }}
        >
          48
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
        <Text style={{ fontSize: 16, color: '#6b7280' }}>
          Bekleyen Talepler
        </Text>
        <Text
          style={{
            fontSize: 34,
            fontWeight: 'bold',
            color: '#dc2626',
            marginTop: 10
          }}
        >
          7
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#2563eb',
          padding: 18,
          borderRadius: 14,
          marginTop: 10
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
          Yeni Talep Oluştur
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
