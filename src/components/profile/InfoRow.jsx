// src/components/InfoRow.jsx

import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function InfoRow({ icon, title, sub }) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoIcon}>
        <Ionicons name={icon} size={16} color="#b8860b" />
      </View>

      <View>
        <Text style={styles.infoTitle}>
          {title}
        </Text>

        <Text style={styles.infoSub}>
          {sub}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: '#f5f4f0',
    borderRadius: 10,
    marginBottom: 6,
  },

  infoIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#fdf3d8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoTitle: {
    fontSize: 13,
    color: '#1a1a18',
    fontWeight: '500',
  },

  infoSub: {
    fontSize: 11,
    color: '#888',
    marginTop: 1,
  },
});