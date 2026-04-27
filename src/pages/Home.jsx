import React from 'react';
import { View,Text, Button } from 'react-native';
import ButtonCustom from '../components/ButtonCustom';

export default function Home({ navigation }) {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
        }}>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#333',
                marginTop: 20,
            }}>Lattes de bolso</Text>
        <ButtonCustom 
            title="Perfil"
            onPress={() => navigation.navigate('Perfil')}
        />
        <ButtonCustom
            title="Formação"
            onPress={() => navigation.navigate('AProductions')}
         />
         <ButtonCustom
            title="Cursos"
            onPress={() => navigation.navigate('Courses')}

         />
         <ButtonCustom
            title="Habilidades"
            onPress={() => navigation.navigate('Skills')}
        />
        <ButtonCustom 
            title='Conhecimentos'
            onPress={() => navigation.navigate('Education')}
        />
        <ButtonCustom
            title='Links importantes'
            onPress={() => navigation.navigate('Links')}
        />
        </View>
    );
}
