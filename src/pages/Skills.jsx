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

import SkillSection from '../components/skills/SkillSection';

const GOLD = '#c9a84c';
const GOLD_LIGHT = '#e8d5a0';
const GOLD_PALE = '#f5edda';
const DARK = '#f5f4f0';
const DARK_CARD = '#0d0d0b';

const SKILLS = [
  {
    title: 'Frontend',
    icon: 'monitor',                        
    items: ['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: 'server',                         
    items: ['Node.js', 'Express', 'Laravel', 'Django', 'Python', 'Java', 'PHP', 'C'],
  },
  {
    title: 'Banco de Dados',
    icon: 'database',                       
    items: ['MySQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'DevOps & Tools',
    icon: 'wrench',                         
    items: ['Git', 'GitHub', 'VSCode', 'AWS'],
  },
  {
    title: 'Inteligência Artificial',
    icon: 'brain',                         
    items: ['Engenharia de Prompt', 'LLMs (ChatGPT)', 'Automação com IA'],
  },
];

function StatCard({ value, label }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

export default function Skills() {
  const headerFade = useRef(new Animated.Value(0)).current;
  const headerScale = useRef(new Animated.Value(0.96)).current;
  const lineWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(headerFade, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.spring(headerScale, {
        toValue: 1,
        tension: 60,
        friction: 10,
        useNativeDriver: true,
      }),
      Animated.timing(lineWidth, {
        toValue: 1,
        duration: 900,
        delay: 400,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  const totalSkills = SKILLS.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={DARK} />

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}
        <Animated.View
          style={[
            styles.header,
            {
              opacity: headerFade,
              transform: [{ scale: headerScale }],
            },
          ]}
        >
          {/* Decorative corner marks */}
          <View style={[styles.corner, styles.cornerTL]} />
          <View style={[styles.corner, styles.cornerTR]} />
          <View style={[styles.corner, styles.cornerBL]} />
          <View style={[styles.corner, styles.cornerBR]} />

          {/* Monogram ring */}
          <View style={styles.monogramRing}>
            <View style={styles.monogramInner}>
              <Text style={styles.monogramText}>FS</Text>
            </View>
          </View>

          {/* Title block */}
          <Text style={styles.eyebrow}>PORTFÓLIO TÉCNICO</Text>
          <Text style={styles.headerTitle}>Tecnologias</Text>
          <Text style={styles.headerTitleGold}>& Skills</Text>

          {/* Animated gold line */}
          <Animated.View
            style={[
              styles.goldLine,
              {
                width: lineWidth.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '40%'],
                }),
              },
            ]}
          />

          {/* Stats row */}
          <View style={styles.statsRow}>
            <StatCard value={`${totalSkills}+`} label="Tecnologias" />
            <View style={styles.statDivider} />
            <StatCard value={`${SKILLS.length}`} label="Categorias" />
            <View style={styles.statDivider} />
            <StatCard value="3+" label="Anos" />
          </View>

          {/* Badge */}
          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>FULL STACK DEVELOPER</Text>
          </View>
        </Animated.View>

        {/* Section label */}
        <View style={styles.sectionLabel}>
          <View style={styles.sectionLine} />
          <Text style={styles.sectionText}>STACK COMPLETO</Text>
          <View style={styles.sectionLine} />
        </View>

        {/* SKILL CARDS */}
        <View style={styles.body}>
          {SKILLS.map((skill, index) => (
            <SkillSection
              key={skill.title}
              title={skill.title}
              icon={skill.icon}
              items={skill.items}
              index={index}
            />
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerLine} />
          <Text style={styles.footerText}>Em constante evolução</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f4f0',
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 40,
  },

  /* ── HEADER ── */
  header: {
    backgroundColor: DARK_CARD,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#1e1c14',
    position: 'relative',
    overflow: 'hidden',
  },

  /* Decorative corner brackets */
  corner: {
    position: 'absolute',
    width: 16,
    height: 16,
  },
  cornerTL: {
    top: 16,
    left: 16,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: GOLD + '55',
  },
  cornerTR: {
    top: 16,
    right: 16,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: GOLD + '55',
  },
  cornerBL: {
    bottom: 16,
    left: 16,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: GOLD + '55',
  },
  cornerBR: {
    bottom: 16,
    right: 16,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: GOLD + '55',
  },

  monogramRing: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: GOLD + '66',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  monogramInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 0.5,
    borderColor: GOLD + '33',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141210',
  },

  monogramText: {
    fontSize: 18,
    fontWeight: '300',
    color: GOLD,
    letterSpacing: 3,
  },

  eyebrow: {
    fontSize: 9,
    letterSpacing: 3,
    color: GOLD + '88',
    marginBottom: 8,
    fontWeight: '500',
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '200',
    color: '#e8e4da',
    letterSpacing: 1,
    lineHeight: 32,
  },

  headerTitleGold: {
    fontSize: 28,
    fontWeight: '600',
    color: GOLD_LIGHT,
    letterSpacing: 1,
    lineHeight: 36,
    marginBottom: 16,
  },

  goldLine: {
    height: 1,
    backgroundColor: GOLD,
    opacity: 0.5,
    marginBottom: 24,
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 8,
  },

  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },

  statValue: {
    fontSize: 20,
    fontWeight: '300',
    color: GOLD_LIGHT,
    letterSpacing: 0.5,
  },

  statLabel: {
    fontSize: 9,
    color: '#7a7060',
    letterSpacing: 1.5,
    marginTop: 2,
    textTransform: 'uppercase',
  },

  statDivider: {
    width: 0.5,
    height: 32,
    backgroundColor: '#2a2620',
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: GOLD + '44',
    backgroundColor: '#12100a',
  },

  badgeDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: GOLD,
    opacity: 0.8,
  },

  badgeText: {
    fontSize: 9,
    color: GOLD + 'cc',
    letterSpacing: 2,
    fontWeight: '500',
  },

  /* ── SECTION LABEL ── */
  sectionLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 12,
  },

  sectionLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: '#1e1c14',
  },

  sectionText: {
    fontSize: 9,
    color: '#4a4638',
    letterSpacing: 2.5,
    fontWeight: '500',
  },

  /* ── BODY ── */
  body: {
    paddingHorizontal: 16,
  },

  /* ── FOOTER ── */
  footer: {
    alignItems: 'center',
    paddingTop: 24,
    gap: 10,
  },

  footerLine: {
    width: 24,
    height: 1,
    backgroundColor: GOLD,
    opacity: 0.3,
  },

  footerText: {
    fontSize: 10,
    color: '#3a3628',
    letterSpacing: 2,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
});