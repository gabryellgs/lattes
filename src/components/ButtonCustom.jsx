import React from "react";
import { View, Button } from "react-native";

export default function ButtonCustom({ title, onPress }) {
    return (
        <View style={{
                marginTop: 30,
                width: '80%',   
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
            }}>
            <Button title={title} onPress={onPress} />
        </View>
    );
}