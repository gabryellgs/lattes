// src/screens/Formacoes.jsx

import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  StatusBar,
  Platform,
} from 'react-native';

import { formations } from '../constants/formations';
import { FormationCard } from '../components/formations/FormationCard';

const GOLD = '#c9a84c';
const GOLD_LIGHT = '#e8d5a0';
const DARK = '#0d0d0b';
const BG = '#f5f4f0';

export default function Formacoes() {
  const headerFade  = useRef(new Animated.Value(0)).current;
  const headerScale = useRef(new Animated.Value(0.97)).current;
  const lineAnim    = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(headerFade,  { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.spring(headerScale, { toValue: 1, tension: 60, friction: 10, useNativeDriver: true }),
      Animated.timing(lineAnim,    { toValue: 1, duration: 900, delay: 400, useNativeDriver: false }),
    ]).start();
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={DARK} />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>

        {/* HEADER */}
        <Animated.View style={[styles.header, { opacity: headerFade, transform: [{ scale: headerScale }] }]}>

          {/* Cantos decorativos */}
          <View style={[styles.corner, styles.cTL]} />
          <View style={[styles.corner, styles.cTR]} />
          <View style={[styles.corner, styles.cBL]} />
          <View style={[styles.corner, styles.cBR]} />

          {/* Monograma */}
          <View style={styles.monoRing}>
            <View style={styles.monoInner}>
              <Text style={styles.monoText}>FA</Text>
            </View>
          </View>

          <Text style={styles.eyebrow}>HISTÓRICO</Text>
          <Text style={styles.headerTitle}>Formações</Text>
          <Text style={styles.headerTitleGold}>Acadêmicas</Text>

          {/* Linha dourada animada */}
          <Animated.View style={[styles.goldLine, {
            width: lineAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '38%'] }),
          }]} />

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statVal}>{formations.length}</Text>
              <Text style={styles.statLabel}>Cursos</Text>
            </View>
            <View style={styles.statSep} />
            <View style={styles.stat}>
              <Text style={styles.statVal}>
                {formations.filter(f => f.status?.toLowerCase().includes('cursando')).length}
              </Text>
              <Text style={styles.statLabel}>Ativo</Text>
            </View>
            <View style={styles.statSep} />
            <View style={styles.stat}>
              <Text style={styles.statVal}>
                {formations.filter(f => f.status?.toLowerCase().includes('concluído') || f.status?.toLowerCase().includes('concluido')).length}
              </Text>
              <Text style={styles.statLabel}>Concluído</Text>
            </View>
          </View>

          {/* Badge */}
          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>EM FORMAÇÃO CONTÍNUA</Text>
          </View>

        </Animated.View>

        {/* Separador */}
        <View style={styles.sectionSep}>
          <View style={styles.sepLine} />
          <Text style={styles.sepText}>TRAJETÓRIA</Text>
          <View style={styles.sepLine} />
        </View>

        {/* Cards */}
        <View style={styles.body}>
          {formations.map((item, index) => (
            <FormationCard
              key={index}
              curso={item.curso}
              instituicao={item.instituicao}
              periodo={item.periodo}
              status={item.status}
            />
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerLine} />
          <Text style={styles.footerText}>Conhecimento em construção</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root:    { flex: 1, backgroundColor: BG },
  scroll:  { flex: 1 },
  content: { paddingBottom: 48 },

  header: {
    backgroundColor: DARK,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#1a1814',
    position: 'relative',
    overflow: 'hidden',
  },

  corner:  { position: 'absolute', width: 14, height: 14 },
  cTL: { top: 14, left: 14,  borderTopWidth: 1,    borderLeftWidth: 1,  borderColor: GOLD + '44' },
  cTR: { top: 14, right: 14, borderTopWidth: 1,    borderRightWidth: 1, borderColor: GOLD + '44' },
  cBL: { bottom: 14, left: 14,  borderBottomWidth: 1, borderLeftWidth: 1,  borderColor: GOLD + '44' },
  cBR: { bottom: 14, right: 14, borderBottomWidth: 1, borderRightWidth: 1, borderColor: GOLD + '44' },

  monoRing: {
    width: 72, height: 72, borderRadius: 36,
    borderWidth: 1, borderColor: GOLD + '55',
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 18,
  },
  monoInner: {
    width: 58, height: 58, borderRadius: 29,
    backgroundColor: '#141210',
    borderWidth: 0.5, borderColor: GOLD + '28',
    alignItems: 'center', justifyContent: 'center',
  },
  monoText: { fontSize: 16, fontWeight: '300', color: GOLD, letterSpacing: 3 },

  eyebrow:          { fontSize: 8, letterSpacing: 3, color: GOLD + '77', marginBottom: 7, fontWeight: '500' },
  headerTitle:      { fontSize: 26, fontWeight: '200', color: '#e0dbd0', letterSpacing: 0.5, lineHeight: 30 },
  headerTitleGold:  { fontSize: 26, fontWeight: '600', color: GOLD_LIGHT, letterSpacing: 0.5, lineHeight: 34, marginBottom: 14 },
  goldLine:         { height: 1, backgroundColor: GOLD, opacity: 0.45, marginBottom: 22 },

  statsRow:  { flexDirection: 'row', alignItems: 'center', marginBottom: 18, paddingHorizontal: 12 },
  stat:      { flex: 1, alignItems: 'center' },
  statVal:   { fontSize: 18, fontWeight: '300', color: GOLD_LIGHT, letterSpacing: 0.5 },
  statLabel: { fontSize: 8, color: '#7a7060', letterSpacing: 1.5, marginTop: 2, textTransform: 'uppercase' },
  statSep:   { width: 0.5, height: 28, backgroundColor: '#2a2620' },

  badge: {
    flexDirection: 'row', alignItems: 'center', gap: 7,
    paddingHorizontal: 14, paddingVertical: 6,
    borderRadius: 24, borderWidth: 0.5, borderColor: GOLD + '44',
    backgroundColor: '#12100a',
  },
  badgeDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: '#4caf50', opacity: 0.9 },
  badgeText: { fontSize: 8, color: GOLD + 'bb', letterSpacing: 2, fontWeight: '500' },

  sectionSep: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 20, gap: 12 },
  sepLine:    { flex: 1, height: 0.5, backgroundColor: '#ddd' },
  sepText:    { fontSize: 8, color: '#aaa', letterSpacing: 2.5, fontWeight: '500' },

  body: { paddingHorizontal: 14, gap: 0 },

  footer:     { alignItems: 'center', paddingTop: 28, gap: 8 },
  footerLine: { width: 20, height: 1, backgroundColor: GOLD, opacity: 0.3 },
  footerText: { fontSize: 9, color: '#bbb', letterSpacing: 2, textTransform: 'uppercase' },
});