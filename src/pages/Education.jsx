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
import { Ionicons } from '@expo/vector-icons';

const GOLD = '#c9a84c';
const GOLD_LIGHT = '#e8d5a0';
const DARK = '#0d0d0b';
const BG = '#f5f4f0';

const SECTIONS = [
  {
    iconName: 'code-slash-outline',
    color: '#7c3aed',
    title: 'Base de Programação',
    items: [
      { text: 'Lógica de programação', status: null },
      { text: 'Algoritmos e estruturas de dados', status: null },
      { text: 'Curso CC50 — Harvard (Ciência da Computação)', status: null },
    ],
  },
  {
    iconName: 'browsers-outline',
    color: '#0ea5e9',
    title: 'Frontend',
    items: [
      { text: 'React', status: null },
      { text: 'JavaScript (ES6+)', status: null },
      { text: 'TypeScript', status: null },
      { text: 'HTML5', status: null },
      { text: 'CSS', status: null },
      { text: 'Tailwind CSS', status: null },
      { text: 'Bootstrap', status: null },
      { text: 'UI/UX aplicado a SaaS', status: null },
    ],
  },
  {
    iconName: 'server-outline',
    color: '#f59e0b',
    title: 'Backend',
    items: [
      { text: 'Node.js', status: null },
      { text: 'Python', status: null },
      { text: 'PHP', status: null },
      { text: 'Java', status: null },
      { text: 'C++', status: null },
      { text: 'Django', status: null },
      { text: 'Laravel', status: 'learning' },
      { text: 'APIs REST', status: null },
    ],
  },
  {
    iconName: 'cylinder-outline',
    color: '#10b981',
    title: 'Banco de Dados',
    items: [
      { text: 'MySQL', status: null },
      { text: 'PostgreSQL', status: null },
      { text: 'MongoDB', status: null },
      { text: 'SQLite', status: null },
      { text: 'Modelagem de dados', status: null },
      { text: 'Consultas SQL', status: null },
    ],
  },
  {
    iconName: 'git-branch-outline',
    color: '#ef4444',
    title: 'Ferramentas & DevOps',
    items: [
      { text: 'Git', status: null },
      { text: 'GitHub', status: null },
      { text: 'VSCode', status: null },
      { text: 'AWS', status: null },
      { text: 'Linux — scripts e automação', status: null },
    ],
  },
  {
    iconName: 'sparkles-outline',
    color: '#c9a84c',
    title: 'Inteligência Artificial',
    items: [
      { text: 'Engenharia de Prompt', status: null },
      { text: 'Uso de LLMs em projetos', status: null },
    ],
  },
  {
    iconName: 'ellipsis-horizontal-circle-outline',
    color: '#6b7280',
    title: 'Outros',
    items: [
      { text: 'Inglês', status: 'learning' },
      { text: 'Criação de SaaS (barbearia e sistemas web)', status: null },
      { text: 'Backend para agendamento e gestão', status: null },
    ],
  },
];

function KnowledgeCard({ section, index }) {
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 480, delay: index * 80, useNativeDriver: true }),
      Animated.timing(slide, { toValue: 0, duration: 480, delay: index * 80, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.card, { opacity: fade, transform: [{ translateY: slide }] }]}>
      {/* Barra lateral colorida */}
      <View style={[styles.accentBar, { backgroundColor: section.color }]} />

      <View style={styles.cardInner}>
        {/* Header */}
        <View style={styles.cardHeader}>
          <View style={[styles.iconBox, { borderColor: section.color + '33', backgroundColor: section.color + '18' }]}>
            <Ionicons name={section.iconName} size={18} color={section.color} />
          </View>
          <View style={styles.cardTitleBlock}>
            <Text style={styles.cardTitle}>{section.title}</Text>
            <Text style={styles.cardCount}>{section.items.length} tópicos</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Items */}
        <View style={styles.itemList}>
          {section.items.map((item, i) => (
            <View key={i} style={styles.itemRow}>
              <View style={[styles.itemDot, { backgroundColor: section.color }]} />
              <Text style={styles.itemText}>{item.text}</Text>
              {item.status === 'learning' && (
                <View style={styles.learningBadge}>
                  <Text style={styles.learningText}>em curso</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </View>
    </Animated.View>
  );
}

export default function Education() {
  const headerFade = useRef(new Animated.Value(0)).current;
  const headerScale = useRef(new Animated.Value(0.97)).current;
  const lineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(headerFade, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.spring(headerScale, { toValue: 1, tension: 60, friction: 10, useNativeDriver: true }),
      Animated.timing(lineAnim, { toValue: 1, duration: 900, delay: 400, useNativeDriver: false }),
    ]).start();
  }, []);

  const totalItems = SECTIONS.reduce((a, s) => a + s.items.length, 0);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={DARK} />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>

        {/* HEADER */}
        <Animated.View style={[styles.header, { opacity: headerFade, transform: [{ scale: headerScale }] }]}>
          <View style={[styles.corner, styles.cTL]} />
          <View style={[styles.corner, styles.cTR]} />
          <View style={[styles.corner, styles.cBL]} />
          <View style={[styles.corner, styles.cBR]} />

          <View style={styles.monoRing}>
            <View style={styles.monoInner}>
              <Text style={styles.monoText}>KN</Text>
            </View>
          </View>

          <Text style={styles.eyebrow}>FORMAÇÃO TÉCNICA</Text>
          <Text style={styles.headerTitle}>Conhecimentos</Text>
          <Text style={styles.headerTitleGold}>& Aprendizados</Text>

          <Animated.View style={[styles.goldLine, {
            width: lineAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '38%'] }),
          }]} />

          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statVal}>{totalItems}+</Text>
              <Text style={styles.statLabel}>Tópicos</Text>
            </View>
            <View style={styles.statSep} />
            <View style={styles.stat}>
              <Text style={styles.statVal}>{SECTIONS.length}</Text>
              <Text style={styles.statLabel}>Áreas</Text>
            </View>
            <View style={styles.statSep} />
            <View style={styles.stat}>
              <Text style={styles.statVal}>2</Text>
              <Text style={styles.statLabel}>Em curso</Text>
            </View>
          </View>

          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>AUTODIDACTA · FULL STACK</Text>
          </View>
        </Animated.View>

        {/* Separator */}
        <View style={styles.sectionSep}>
          <View style={styles.sepLine} />
          <Text style={styles.sepText}>BASE DE CONHECIMENTO</Text>
          <View style={styles.sepLine} />
        </View>

        {/* CARDS */}
        <View style={styles.body}>
          {SECTIONS.map((section, index) => (
            <KnowledgeCard key={section.title} section={section} index={index} />
          ))}
        </View>

        <View style={styles.footer}>
          <View style={styles.footerLine} />
          <Text style={styles.footerText}>Aprendizado contínuo</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: BG },
  scroll: { flex: 1 },
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
  corner: { position: 'absolute', width: 14, height: 14 },
  cTL: { top: 14, left: 14, borderTopWidth: 1, borderLeftWidth: 1, borderColor: GOLD + '44' },
  cTR: { top: 14, right: 14, borderTopWidth: 1, borderRightWidth: 1, borderColor: GOLD + '44' },
  cBL: { bottom: 14, left: 14, borderBottomWidth: 1, borderLeftWidth: 1, borderColor: GOLD + '44' },
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

  eyebrow: { fontSize: 8, letterSpacing: 3, color: GOLD + '77', marginBottom: 7, fontWeight: '500' },
  headerTitle: { fontSize: 26, fontWeight: '200', color: '#e0dbd0', letterSpacing: 0.5, lineHeight: 30 },
  headerTitleGold: { fontSize: 26, fontWeight: '600', color: GOLD_LIGHT, letterSpacing: 0.5, lineHeight: 34, marginBottom: 14 },
  goldLine: { height: 1, backgroundColor: GOLD, opacity: 0.45, marginBottom: 22 },

  statsRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 18, paddingHorizontal: 12 },
  stat: { flex: 1, alignItems: 'center' },
  statVal: { fontSize: 18, fontWeight: '300', color: GOLD_LIGHT, letterSpacing: 0.5 },
  statLabel: { fontSize: 8, color: '#7a7060', letterSpacing: 1.5, marginTop: 2, textTransform: 'uppercase' },
  statSep: { width: 0.5, height: 28, backgroundColor: '#2a2620' },

  badge: {
    flexDirection: 'row', alignItems: 'center', gap: 7,
    paddingHorizontal: 14, paddingVertical: 6,
    borderRadius: 24, borderWidth: 0.5, borderColor: GOLD + '44',
    backgroundColor: '#12100a',
  },
  badgeDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: GOLD, opacity: 0.75 },
  badgeText: { fontSize: 8, color: GOLD + 'bb', letterSpacing: 2, fontWeight: '500' },

  sectionSep: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 20, gap: 12 },
  sepLine: { flex: 1, height: 0.5, backgroundColor: '#ddd' },
  sepText: { fontSize: 8, color: '#aaa', letterSpacing: 2.5, fontWeight: '500' },

  body: { paddingHorizontal: 14, gap: 11 },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#e8e4dc',
    overflow: 'hidden',
  },
  accentBar: { width: 3, flexShrink: 0 },
  cardInner: { flex: 1, padding: 16 },

  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  iconBox: {
    width: 42, height: 42, borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitleBlock: { flex: 1 },
  cardTitle: { fontSize: 13, fontWeight: '600', color: '#1a1a18', letterSpacing: 0.2, marginBottom: 2 },
  cardCount: { fontSize: 10, color: '#aaa', letterSpacing: 0.3 },

  divider: { height: 0.5, backgroundColor: '#ece8e0', marginBottom: 12 },

  itemList: { gap: 9 },
  itemRow: { flexDirection: 'row', alignItems: 'center', gap: 9 },
  itemDot: { width: 4, height: 4, borderRadius: 2, opacity: 0.5, flexShrink: 0 },
  itemText: { flex: 1, fontSize: 13, color: '#555', lineHeight: 18 },

  learningBadge: {
    paddingHorizontal: 7, paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: '#faf5e8',
    borderWidth: 0.5, borderColor: GOLD + '55',
  },
  learningText: { fontSize: 9, color: '#a07820', letterSpacing: 0.5 },

  footer: { alignItems: 'center', paddingTop: 24, gap: 8 },
  footerLine: { width: 20, height: 1, backgroundColor: GOLD, opacity: 0.3 },
  footerText: { fontSize: 8, color: '#bbb', letterSpacing: 2.5, textTransform: 'uppercase' },
});