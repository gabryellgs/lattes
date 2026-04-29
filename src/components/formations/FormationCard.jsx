// src/components/formations/FormationCard.jsx

import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const GOLD = '#e5c97e';

export function FormationCard({
  curso,
  instituicao,
  periodo,
  status,
}) {

  return (
    <View style={styles.card}>

      <View style={styles.iconBox}>
        <Ionicons
          name="school-outline"
          size={24}
          color={GOLD}
        />
      </View>

      <View style={{ flex: 1 }}>

        <Text style={styles.course}>
          {curso}
        </Text>

        <Text style={styles.institution}>
          {instituicao}
        </Text>

        <Text style={styles.period}>
          {periodo}
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {status}
          </Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,

    flexDirection: 'row',
    gap: 14,

    marginBottom: 16,

    borderWidth: 1,
    borderColor: '#ebe7df',
  },

  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,

    backgroundColor: '#111',

    alignItems: 'center',
    justifyContent: 'center',
  },

  course: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },

  institution: {
    fontSize: 13,
    color: '#666',
    marginTop: 3,
  },

  period: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
  },

  badge: {
    alignSelf: 'flex-start',

    marginTop: 10,

    backgroundColor: '#111',

    paddingHorizontal: 12,
    paddingVertical: 5,

    borderRadius: 999,
  },

  badgeText: {
    color: GOLD,
    fontSize: 11,
    fontWeight: '600',
  },
});