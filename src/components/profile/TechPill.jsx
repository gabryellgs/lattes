// src/components/TechPill.jsx

import { View, Text, StyleSheet } from 'react-native';

import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const GOLD = '#e5c97e';
const DARK = '#0f0f0f';

export function TechPill({
  icon,
  label,
  highlight,
  library = 'Ionicons',
}) {

  const IconComponent =
    library === 'MaterialCommunityIcons'
      ? MaterialCommunityIcons
      : Ionicons;

  return (
    <View
      style={[
        styles.techPill,
        highlight && styles.techPillHighlight,
      ]}
    >
      <IconComponent
        name={icon}
        size={13}
        color={highlight ? GOLD : '#555'}
        style={{ marginRight: 5 }}
      />

      <Text
        style={[
          styles.techText,
          highlight && styles.techTextHighlight,
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  techPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#f5f4f0',
    borderWidth: 0.5,
    borderColor: '#d0cec8',
  },

  techPillHighlight: {
    backgroundColor: DARK,
    borderColor: GOLD + '44',
  },

  techText: {
    fontSize: 12,
    color: '#333',
  },

  techTextHighlight: {
    color: GOLD,
  },
});