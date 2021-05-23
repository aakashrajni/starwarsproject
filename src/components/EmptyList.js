import React from 'react';
import { View, Text } from 'react-native';

const EmptyList = () => {
    return (
        <View 
            style={{
                flex: 1,
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
            }}
        >
            <Text>No characters found</Text>
        </View>
    )
}

export default EmptyList;