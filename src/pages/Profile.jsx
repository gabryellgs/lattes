import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GOLD = '#e5c97e';
const DARK = '#0f0f0f';

export default function Perfil() {
  return (
    <ScrollView style={styles.container}>

      {/* Header escuro */}
      <View style={styles.header}>
        <View style={styles.avatarRing}>
          <Image
            source={require('../../assets/perfil.png')}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>Gabryell da Silva{'\n'}Gonçalves</Text>
        <View style={styles.roleBadge}>
          <Ionicons name="code-slash-outline" size={11} color={GOLD} />
          <Text style={styles.roleText}>  FULL-STACK DEVELOPER</Text>
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>

        <Text style={styles.sectionLabel}>Informações</Text>
        <InfoRow icon="calendar-outline" title="17 de fevereiro de 2004" sub="Data de nascimento" />
        <InfoRow icon="location-outline" title="Canguaretama — RN" sub="Localização" />
        <InfoRow icon="school-outline" title="IFRN" sub="Técnico em Informática" />

        <View style={styles.divider} />

        <Text style={styles.sectionLabel}>Sobre</Text>
        <View style={styles.bio}>
          <Ionicons name="person-outline" size={14} color={GOLD} style={{ marginBottom: 6 }} />
          <Text style={styles.bioText}>
            Estudante de informática no IFRN, focado em React, Laravel
            e desenvolvimento web moderno.
          </Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionLabel}>Tecnologias</Text>
        <View style={styles.techGrid}>
          <TechPill icon="logo-react" label="React" highlight />
          <TechPill icon="phone-portrait-outline" label="React Native" highlight />
          <TechPill icon="server-outline" label="Laravel" />
          <TechPill icon="logo-javascript" label="JavaScript" />
          <TechPill icon="logo-django" label="Django" />
          <TechPill icon="logo-python" label="Python" />
          <TechPill icon="logo-nodejs" label="Node.js" />
          <TechPill icon="logo-github" label="GitHub" />
          <TechPill icon="java" label="java />" />
        </View>

      </View>
    </ScrollView>
  );
}

function InfoRow({ icon, title, sub }) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoIcon}>
        <Ionicons name={icon} size={16} color="#b8860b" />
      </View>
      <View>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.infoSub}>{sub}</Text>
      </View>
    </View>
  );
}

function TechPill({ icon, label, highlight }) {
  return (
    <View style={[styles.techPill, highlight && styles.techPillHighlight]}>
      <Ionicons
        name={icon}
        size={13}
        color={highlight ? GOLD : '#555'}
        style={{ marginRight: 5 }}
      />
      <Text style={[styles.techText, highlight && styles.techTextHighlight]}>
        {label}
      </Text>
    </View>
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
  avatarRing: {
    width: 94, height: 94, borderRadius: 47,
    borderWidth: 2, borderColor: GOLD,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 14,
  },
  avatar: { width: 82, height: 82, borderRadius: 41 },
  name: {
    fontSize: 18, fontWeight: '800',
    color: '#f5f0e8', textAlign: 'center', lineHeight: 24,
  },
  roleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 12, paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#1c1c1a',
    borderWidth: 0.5, borderColor: GOLD + '55',
  },
  roleText: { fontSize: 10, color: GOLD, letterSpacing: 1 },

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

  // Info rows
  infoRow: {
    flexDirection: 'row', alignItems: 'center',
    gap: 10, padding: 10,
    backgroundColor: '#f5f4f0',
    borderRadius: 10, marginBottom: 6,
  },
  infoIcon: {
    width: 32, height: 32, borderRadius: 8,
    backgroundColor: '#fdf3d8',
    alignItems: 'center', justifyContent: 'center',
  },
  infoTitle: { fontSize: 13, color: '#1a1a18', fontWeight: '500' },
  infoSub: { fontSize: 11, color: '#888', marginTop: 1 },

  divider: { height: 0.5, backgroundColor: '#e0ddd6', marginVertical: 16 },

  // Bio
  bio: {
    padding: 12, backgroundColor: '#f5f4f0',
    borderRadius: 10,
    borderLeftWidth: 2, borderLeftColor: GOLD,
    borderTopLeftRadius: 0, borderBottomLeftRadius: 0,
  },
  bioText: { fontSize: 13, color: '#555', lineHeight: 20 },

  // Tech pills
  techGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  techPill: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 12, paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#f5f4f0',
    borderWidth: 0.5, borderColor: '#d0cec8',
  },
  techPillHighlight: {
    backgroundColor: DARK,
    borderColor: GOLD + '44',
  },
  techText: { fontSize: 12, color: '#333' },
  techTextHighlight: { color: GOLD },
});