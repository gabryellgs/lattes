// src/components/skills/SkillSection.jsx

import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const GOLD = '#c9a84c';
const GOLD_LIGHT = '#e8d5a0';

const ICON_MAP = {
  // Frontend
  'React':              'react',
  'React Native':       'react',
  'JavaScript':         'language-javascript',
  'TypeScript':         'language-typescript',
  'HTML5':              'language-html5',
  'CSS3':               'language-css3',
  'Tailwind CSS':       'language-css3',
  'Bootstrap':          'bootstrap',

  // Backend
  'Node.js':            'nodejs',
  'Express':            'nodejs',
  'Laravel':            'laravel',
  'Django':             'language-python',
  'Python':             'language-python',
  'Java':               'language-java',
  'PHP':                'language-php',
  'C':                  'language-c',

  // Banco de dados
  'MySQL':              'database',
  'PostgreSQL':         'database',
  'MongoDB':            'leaf',
  'SQLite':             'database-outline',

  // DevOps
  'Git':                'git',
  'GitHub':             'github',
  'VSCode':             'microsoft-visual-studio-code',
  'AWS':                'cloud',
  'Docker':             'docker',

  // IA
  'Engenharia de Prompt': 'message-text-outline',
  'LLMs (ChatGPT)':       'robot-outline',
  'Automação com IA':     'auto-fix',
};

export default function SkillSection({ title, icon, items, index = 0 }) {
  const fadeAnim  = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim,  { toValue: 1, duration: 500, delay: index * 80, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 500, delay: index * 80, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>

      <View style={styles.accentBar} />

      <View style={styles.inner}>

        <View style={styles.header}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons name={icon} size={16} color={GOLD} />
          </View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.countBadge}>
            <Text style={styles.countText}>{items.length}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.grid}>
          {items.map((item, i) => (
            <View key={i} style={styles.pill}>
              <MaterialCommunityIcons
                name={ICON_MAP[item] || 'circle-small'}
                size={14}
                color={GOLD}
                style={{ marginRight: 2 }}
              />
              <Text style={styles.pillText}>{item}</Text>
            </View>
          ))}
        </View>

      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#ece7dc',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  accentBar: {
    width: 3,
    backgroundColor: GOLD,
    opacity: 0.9,
  },
  inner: {
    flex: 1,
    padding: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#fdf3d8',
    borderWidth: 0.5,
    borderColor: '#e8d9a0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 13,
    fontWeight: '600',
    color: '#1a1a18',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  countBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    backgroundColor: '#fdf3d8',
    borderWidth: 0.5,
    borderColor: '#e8d9a0',
  },
  countText: {
    fontSize: 11,
    color: '#b8860b',
    fontWeight: '500',
  },
  divider: {
    height: 0.5,
    backgroundColor: '#ece7dc',
    marginBottom: 14,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#f5f4f0',
    borderWidth: 0.5,
    borderColor: '#d0cec8',
    gap: 4,
  },
  pillText: {
    fontSize: 12,
    color: '#444',
    fontWeight: '400',
    letterSpacing: 0.2,
  },
});