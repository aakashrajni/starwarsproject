import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const CustomActivityIndicator = () => {
    return(
        <View style={{flex:1}}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}

export default CustomActivityIndicator;