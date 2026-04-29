import { ScrollView, View, StyleSheet } from 'react-native';

import { ProfileHeader } from '../components/profile/ProfileHeader';
import { InfoRow }       from '../components/profile/InfoRow';
import { SectionTitle }  from '../components/profile/SectionTitle';
import { TechPill }      from '../components/profile/TechPill';
import { BioCard }       from '../components/profile/BioCard';

export default function Perfil() {
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <View style={styles.body}>

        <SectionTitle title="Informações" />
        <InfoRow icon="calendar-outline" title="17 de fevereiro de 2004" sub="Data de nascimento" />
        <InfoRow icon="location-outline" title="Canguaretama — RN"       sub="Localização" />
        <InfoRow icon="school-outline"   title="IFRN"                    sub="Sistemas para Internet" />

        <View style={styles.divider} />

        <SectionTitle title="Sobre" />
        <BioCard />

        <View style={styles.divider} />

        <SectionTitle title="Tecnologias" />
        <View style={styles.techGrid}>
          <TechPill icon="react"               label="React"        highlight library="MaterialCommunityIcons" />
          <TechPill icon="react"               label="React Native" highlight library="MaterialCommunityIcons" />
          <TechPill icon="language-typescript" label="TypeScript"   library="MaterialCommunityIcons" />
          <TechPill icon="language-javascript" label="JavaScript"   library="MaterialCommunityIcons" />
          <TechPill icon="language-css3"       label="Tailwind CSS" library="MaterialCommunityIcons" />
          <TechPill icon="bootstrap"           label="Bootstrap"    library="MaterialCommunityIcons" />
          <TechPill icon="nodejs"              label="Node.js"      library="MaterialCommunityIcons" />
          <TechPill icon="laravel"             label="Laravel"      library="MaterialCommunityIcons" />
          <TechPill icon="language-python"     label="Python"       library="MaterialCommunityIcons" />
          <TechPill icon="language-java"       label="Java"         library="MaterialCommunityIcons" />
          <TechPill icon="language-php"        label="PHP"          library="MaterialCommunityIcons" />
          <TechPill icon="language-c"          label="C"            library="MaterialCommunityIcons" />
          <TechPill icon="database"            label="MySQL"        library="MaterialCommunityIcons" />
          <TechPill icon="database"            label="PostgreSQL"   library="MaterialCommunityIcons" />
          <TechPill icon="leaf"                label="MongoDB"      library="MaterialCommunityIcons" />
          <TechPill icon="database-outline"    label="SQLite"       library="MaterialCommunityIcons" />
          <TechPill icon="git"                 label="Git"          library="MaterialCommunityIcons" />
          <TechPill icon="github"              label="GitHub"       library="MaterialCommunityIcons" />
          <TechPill icon="cloud"               label="AWS"          library="MaterialCommunityIcons" />
          <TechPill icon="docker"              label="Docker"       library="MaterialCommunityIcons" />
          <TechPill icon="api"                 label="REST API"     library="MaterialCommunityIcons" />
        </View>

      </View>
    </ScrollView>
  );
}

// ← ISSO ESTAVA FALTANDO
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f4f0',
  },
  body: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 16,
    padding: 20,
    borderWidth: 0.5,
    borderColor: '#e0ddd6',
  },
  divider: {
    height: 0.5,
    backgroundColor: '#e0ddd6',
    marginVertical: 16,
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});