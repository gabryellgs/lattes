// src/components/profile/SectionTitle.jsx

import { View, Text, StyleSheet } from 'react-native';

export function SectionTitle({ title }) {
  return (
    <Text style={styles.title}>{title}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: '#888',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
});