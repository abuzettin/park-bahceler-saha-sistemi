import React from 'react'
import { ScrollView, View, Text } from 'react-native'

export default function ReportScreen() {
  const reports = [
    {
      title: 'Çim Biçme Çalışması',
      location: 'Akçakaya Mahallesi',
      status: 'Tamamlandı'
    },
    {
      title: 'Budama Çalışması',
      location: 'Bahçelievler Mahallesi',
      status: 'Devam Ediyor'
    },
    {
      title: 'Sulama Arızası',
      location: 'Mevlana Mahallesi',
      status: 'Bekliyor'
    }
  ]

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
        Raporlar
      </Text>

      {reports.map((report, index) => (
        <View
          key={index}
          style={{
            backgroundColor: '#fff',
            padding: 18,
            borderRadius: 14,
            marginBottom: 12,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 5,
            elevation: 3
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#111827'
            }}
          >
            {report.title}
          </Text>

          <Text
            style={{
              marginTop: 6,
              color: '#6b7280'
            }}
          >
            Konum: {report.location}
          </Text>

          <Text
            style={{
              marginTop: 4,
              color:
                report.status === 'Tamamlandı'
                  ? '#16a34a'
                  : report.status === 'Devam Ediyor'
                  ? '#ea580c'
                  : '#dc2626',
              fontWeight: 'bold'
            }}
          >
            {report.status}
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}
