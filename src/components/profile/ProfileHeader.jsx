// src/components/ProfileHeader.jsx

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const GOLD = '#e5c97e';
const DARK = '#0f0f0f';

export function ProfileHeader() {
  return (
    <View style={styles.header}>

      <View style={styles.avatarRing}>
        <Image
          source={require('../../../assets/perfil.png')}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.name}>
        Gabryell da Silva{'\n'}Gonçalves
      </Text>

      <View style={styles.roleBadge}>
        <Ionicons
          name="code-slash-outline"
          size={11}
          color={GOLD}
        />

        <Text style={styles.roleText}>
          {' '}FULL-STACK DEVELOPER
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: DARK,
    paddingTop: 50,
    paddingBottom: 28,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  avatarRing: {
    width: 94,
    height: 94,
    borderRadius: 47,
    borderWidth: 2,
    borderColor: GOLD,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },

  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
  },

  name: {
    fontSize: 18,
    fontWeight: '800',
    color: '#f5f0e8',
    textAlign: 'center',
    lineHeight: 24,
  },

  roleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#1c1c1a',
    borderWidth: 0.5,
    borderColor: GOLD + '55',
  },

  roleText: {
    fontSize: 10,
    color: GOLD,
    letterSpacing: 1,
  },
});