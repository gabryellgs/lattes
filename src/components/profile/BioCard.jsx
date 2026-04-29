// src/components/BioCard.jsx

import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GOLD = '#e5c97e';

export function BioCard() {
  return (
    <View style={styles.bio}>
      <Ionicons
        name="person-outline"
        size={14}
        color={GOLD}
        style={{ marginBottom: 6 }}
      />

      <Text style={styles.bioText}>
        Desenvolvedor Full Stack | Sou Gabryell Gonçalves, estudante de Sistemas para Internet no IFRN – Campus Canguaretama. Atuo no desenvolvimento de aplicações web, trabalhando com front-end e back-end para criar soluções modernas, funcionais e intuitivas. Tenho interesse em desenvolvimento web, bancos de dados, APIs e arquitetura de sistemas, buscando constantemente aprimorar minhas habilidades e aprender novas tecnologias. Sou dedicado, curioso e apaixonado por tecnologia e inovação.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bio: {
    padding: 12,
    backgroundColor: '#f5f4f0',
    borderRadius: 10,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  bioText: {
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
  },
});