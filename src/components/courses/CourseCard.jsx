// src/components/courses/CourseCard.jsx

import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Pressable,
} from 'react-native';

import {
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';

const GOLD = '#e5c97e';

export default function CourseCard({
  title,
  institution,
  description,
  status,
  icon,
  certificate,
}) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={styles.card}>

        {/* ÍCONE */}
        <View style={styles.iconBox}>
          <MaterialCommunityIcons
            name={icon}
            size={24}
            color={GOLD}
          />
        </View>

        {/* CONTEÚDO */}
        <View style={{ flex: 1 }}>

          <Text style={styles.title}>
            {title}
          </Text>

          <Text style={styles.institution}>
            {institution}
          </Text>

          <Text style={styles.description}>
            {description}
          </Text>

          {/* STATUS + CERTIFICADO */}
          <View style={styles.actionsRow}>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {status}
              </Text>
            </View>

            {certificate && (
              <Pressable
                onPress={() => setOpen(true)}
                style={({ pressed }) => [
                  styles.smallCertificateButton,
                  pressed && { opacity: 0.7 },
                ]}
              >

                <MaterialCommunityIcons
                  name="certificate-outline"
                  size={14}
                  color="#111"
                />

                <Text style={styles.smallCertificateText}>
                  Certificado
                </Text>

              </Pressable>
            )}

          </View>

        </View>

      </View>

      {/* MODAL */}
      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >

        <View style={styles.modalContainer}>

          {/* FECHAR */}
          <Pressable
            style={styles.closeArea}
            onPress={() => setOpen(false)}
          />

          {/* CONTEÚDO */}
          <View style={styles.modalContent}>

            {/* HEADER */}
            <View style={styles.modalHeader}>

              <View style={styles.modalBadge}>
                <MaterialCommunityIcons
                  name="certificate"
                  size={18}
                  color={GOLD}
                />
              </View>

              <View style={{ flex: 1 }}>

                <Text style={styles.modalTitle}>
                  Certificado
                </Text>

                <Text style={styles.modalCourse}>
                  {title}
                </Text>

              </View>

              <Pressable
                onPress={() => setOpen(false)}
                style={styles.closeButton}
              >

                <Ionicons
                  name="close"
                  size={22}
                  color="#fff"
                />

              </Pressable>

            </View>

            {/* IMAGEM */}
            <Image
              source={certificate}
              style={styles.certificateImage}
              resizeMode="contain"
            />

          </View>

        </View>

      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',

    borderRadius: 22,

    padding: 18,

    flexDirection: 'row',

    gap: 14,

    marginBottom: 18,

    borderWidth: 1,
    borderColor: '#ebe7df',
  },

  iconBox: {
    width: 58,
    height: 58,

    borderRadius: 18,

    backgroundColor: '#111',

    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },

  institution: {
    fontSize: 13,
    color: '#666',

    marginTop: 4,
  },

  description: {
    fontSize: 12,
    color: '#777',

    lineHeight: 18,

    marginTop: 10,
  },

  // ACTIONS
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 10,

    marginTop: 14,
  },

  // STATUS
  badge: {
    backgroundColor: '#111',

    paddingHorizontal: 14,
    paddingVertical: 6,

    borderRadius: 999,
  },

  badgeText: {
    color: GOLD,
    fontSize: 11,
    fontWeight: '700',
  },

  // CERTIFICADO BUTTON
  smallCertificateButton: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 5,

    backgroundColor: '#f7f3e8',

    borderWidth: 1,
    borderColor: '#eadfb7',

    paddingHorizontal: 10,
    paddingVertical: 6,

    borderRadius: 999,
  },

  smallCertificateText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#111',
  },

  // MODAL
  modalContainer: {
    flex: 1,

    backgroundColor: 'rgba(0,0,0,0.92)',

    justifyContent: 'center',
    alignItems: 'center',

    padding: 18,
  },

  closeArea: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  modalContent: {
    width: '100%',

    backgroundColor: '#111',

    borderRadius: 28,

    overflow: 'hidden',

    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  modalHeader: {
    flexDirection: 'row',

    alignItems: 'center',

    padding: 18,

    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },

  modalBadge: {
    width: 44,
    height: 44,

    borderRadius: 14,

    backgroundColor: '#1d1d1d',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 14,
  },

  modalTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  modalCourse: {
    color: '#9e9e9e',
    fontSize: 12,

    marginTop: 2,
  },

  closeButton: {
    width: 38,
    height: 38,

    borderRadius: 12,

    backgroundColor: '#1e1e1e',

    alignItems: 'center',
    justifyContent: 'center',
  },

  certificateImage: {
    width: '100%',
    height: 520,

    backgroundColor: '#0c0c0c',
  },
});