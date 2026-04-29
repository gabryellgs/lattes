import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  StatusBar,
  Platform,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const GOLD = '#c9a84c';
const GOLD_LIGHT = '#e8d5a0';
const DARK = '#0d0d0b';
const BG = '#f5f4f0';

const LINKS = [
  {
    iconLib: 'fa5',
    iconName: 'github',
    label: 'GitHub',
    description: 'Repositórios e projetos open source',
    url: 'https://github.com/gabryellgs',
    color: '#1a1a18',
  },
  {
    iconLib: 'fa5',
    iconName: 'linkedin',
    label: 'LinkedIn',
    description: 'Perfil profissional e experiências',
    url: 'https://www.linkedin.com/in/gabryellgs/',
    color: '#0a66c2',
  },
  {
    iconLib: 'fa5',
    iconName: 'whatsapp',
    label: 'WhatsApp',
    description: 'Fale diretamente comigo',
    url: 'https://wa.me/5584981728597',
    color: '#25d366',
  },
  {
    iconLib: 'fa5',
    iconName: 'instagram',
    label: 'Instagram',
    description: 'Acompanhe meu dia a dia',
    url: 'https://www.instagram.com/gabryel.gs_',
    color: '#e1306c',
  },
];

function LinkCard({ link, index }) {
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(24)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 480, delay: index * 90, useNativeDriver: true }),
      Animated.timing(slide, { toValue: 0, duration: 480, delay: index * 90, useNativeDriver: true }),
    ]).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scale, { toValue: 0.97, useNativeDriver: true }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
  };

  const handlePress = () => {
    Linking.openURL(link.url);
  };

  return (
    <Animated.View style={{ opacity: fade, transform: [{ translateY: slide }, { scale }] }}>
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        style={styles.card}
      >
        {/* Accent bar com cor da rede */}
        <View style={[styles.accentBar, { backgroundColor: link.color }]} />

        <View style={styles.cardInner}>
          <View style={styles.cardLeft}>
            <View style={[styles.iconBox, { borderColor: link.color + '33' }]}>
              <FontAwesome5 name={link.iconName} size={20} color={link.color} brand />
            </View>
            <View style={styles.cardText}>
              <Text style={styles.cardLabel}>{link.label}</Text>
              <Text style={styles.cardDesc}>{link.description}</Text>
            </View>
          </View>

          {/* Seta */}
          <View style={styles.arrow}>
            <Text style={styles.arrowText}>›</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function Links() {
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
              <Text style={styles.monoText}>LK</Text>
            </View>
          </View>

          <Text style={styles.eyebrow}>CONEXÕES</Text>
          <Text style={styles.headerTitle}>Links</Text>
          <Text style={styles.headerTitleGold}>Importantes</Text>

          <Animated.View style={[styles.goldLine, {
            width: lineAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '38%'] }),
          }]} />

          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statVal}>{LINKS.length}</Text>
              <Text style={styles.statLabel}>Redes</Text>
            </View>
            <View style={styles.statSep} />
            <View style={styles.stat}>
              <Text style={styles.statVal}>01</Text>
              <Text style={styles.statLabel}>Toque</Text>
            </View>
            <View style={styles.statSep} />
            <View style={styles.stat}>
              <Text style={styles.statVal}>24h</Text>
              <Text style={styles.statLabel}>Disponível</Text>
            </View>
          </View>

          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>DISPONÍVEL PARA PROJETOS</Text>
          </View>
        </Animated.View>

        {/* Separator */}
        <View style={styles.sectionSep}>
          <View style={styles.sepLine} />
          <Text style={styles.sepText}>ACESSO DIRETO</Text>
          <View style={styles.sepLine} />
        </View>

        {/* LINK CARDS */}
        <View style={styles.body}>
          {LINKS.map((link, index) => (
            <LinkCard key={link.label} link={link} index={index} />
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerLine} />
          <Text style={styles.footerText}>Vamos construir algo juntos</Text>
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
  badgeDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: '#4caf50', opacity: 0.9 },
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
  cardInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 14,
  },
  cardLeft: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconBox: {
    width: 42, height: 42, borderRadius: 12,
    backgroundColor: '#f8f6f2',
    borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
  },
  iconText: { fontSize: 18 },
  cardText: { flex: 1 },
  cardLabel: { fontSize: 14, fontWeight: '600', color: '#1a1a18', letterSpacing: 0.2, marginBottom: 3 },
  cardDesc: { fontSize: 11, color: '#999', letterSpacing: 0.1 },

  arrow: {
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: '#f5f4f0',
    alignItems: 'center', justifyContent: 'center',
  },
  arrowText: { fontSize: 18, color: '#bbb', lineHeight: 22 },

  footer: { alignItems: 'center', paddingTop: 28, gap: 8 },
  footerLine: { width: 20, height: 1, backgroundColor: GOLD, opacity: 0.3 },
  footerText: { fontSize: 9, color: '#bbb', letterSpacing: 2, textTransform: 'uppercase' },
});