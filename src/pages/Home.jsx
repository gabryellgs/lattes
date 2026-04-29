import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GOLD = '#e5c97e';
const GOLD_DIM = '#b8860b';
const DARK = '#0f0f0f';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      {/* Header escuro */}
      <View style={styles.header}>
        <View style={styles.iconRing}>
          <Ionicons name="school-outline" size={30} color={GOLD} />
        </View>
        <Text style={styles.title}>Lattes de Bolso</Text>
        <View style={styles.badge}>
          <View style={styles.badgeDot} />
          <Text style={styles.badgeText}>CURRÍCULO DIGITAL</Text>
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>

        <Text style={styles.sectionLabel}>Pessoal</Text>
        <NavRow
          icon="person-outline"
          title="Perfil"
          sub="Dados pessoais e tecnologias"
          highlight
          onPress={() => navigation.navigate('Perfil')}
        />

        <View style={styles.divider} />

        <Text style={styles.sectionLabel}>Formação</Text>
        <NavRow
          icon="school-outline"
          title="Formação Acadêmica"
          sub="Graduação e pós-graduação"
          onPress={() => navigation.navigate('Formations')}
        />
        <NavRow
          icon="document-text-outline"
          title="Cursos"
          sub="Certificados e capacitações"
          onPress={() => navigation.navigate('Courses')}
        />

        <View style={styles.divider} />

        <Text style={styles.sectionLabel}>Competências</Text>
        <NavRow
          icon="bulb-outline"
          title="Habilidades"
          sub="Competências técnicas"
          onPress={() => navigation.navigate('Skills')}
        />
        <NavRow
          icon="time-outline"
          title="Conhecimentos"
          sub="Áreas de domínio"
          onPress={() => navigation.navigate('Education')}
        />

        <View style={styles.divider} />

        <Text style={styles.sectionLabel}>Outros</Text>
        <NavRow
          icon="link-outline"
          title="Links Importantes"
          sub="Lattes, LinkedIn e portfólio"
          onPress={() => navigation.navigate('Links')}
        />

      </View>
    </ScrollView>
  );
}

function NavRow({ icon, title, sub, highlight, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.navRow, highlight && styles.navRowHighlight]}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <View style={[styles.navIcon, highlight ? styles.navIconDark : styles.navIconGold]}>
        <Ionicons
          name={icon}
          size={16}
          color={highlight ? GOLD : GOLD_DIM}
        />
      </View>
      <View style={styles.navTextWrap}>
        <Text style={[styles.navTitle, highlight && styles.navTitleHighlight]}>
          {title}
        </Text>
        <Text style={[styles.navSub, highlight && styles.navSubHighlight]}>
          {sub}
        </Text>
      </View>
      <Ionicons
        name="chevron-forward"
        size={14}
        color={highlight ? GOLD : '#aaa'}
        style={{ opacity: highlight ? 0.6 : 0.4 }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f4f0' },

  // Header
  header: {
    backgroundColor: DARK,
    paddingTop: 50,
    paddingBottom: 28,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconRing: {
    width: 68, height: 68, borderRadius: 34,
    borderWidth: 2, borderColor: GOLD,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#1c1c1a',
    marginBottom: 14,
  },
  title: {
    fontSize: 20, fontWeight: '800',
    color: '#f5f0e8', textAlign: 'center',
    marginBottom: 10,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12, paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#1c1c1a',
    borderWidth: 0.5, borderColor: GOLD + '55',
  },
  badgeDot: {
    width: 5, height: 5, borderRadius: 3,
    backgroundColor: GOLD,
  },
  badgeText: { fontSize: 10, color: GOLD, letterSpacing: 1, fontWeight: '500' },

  // Body
  body: {
    backgroundColor: '#fff',
    margin: 16, borderRadius: 16,
    padding: 20,
    borderWidth: 0.5, borderColor: '#e0ddd6',
  },
  sectionLabel: {
    fontSize: 10, fontWeight: '500',
    color: '#888', letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  divider: { height: 0.5, backgroundColor: '#e0ddd6', marginVertical: 14 },

  // Nav rows
  navRow: {
    flexDirection: 'row', alignItems: 'center',
    gap: 10, padding: 10,
    backgroundColor: '#f5f4f0',
    borderRadius: 10, marginBottom: 6,
  },
  navRowHighlight: {
    backgroundColor: DARK,
  },
  navIcon: {
    width: 32, height: 32, borderRadius: 8,
    alignItems: 'center', justifyContent: 'center',
  },
  navIconGold: { backgroundColor: '#fdf3d8' },
  navIconDark: { backgroundColor: '#1c1c1a' },
  navTextWrap: { flex: 1 },
  navTitle: { fontSize: 13, color: '#1a1a18', fontWeight: '500' },
  navTitleHighlight: { color: GOLD },
  navSub: { fontSize: 11, color: '#888', marginTop: 1 },
  navSubHighlight: { color: '#555' },
});