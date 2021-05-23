import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const ListItem = ({item, title, navigation}) => {
    return (
        <Pressable 
            style={styles.item} 
            onPress={() => navigation.navigate('Detail',{item})}
        >
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#ffffff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10
    },
    title: {
      fontSize: 32,
    },
  });

  export default ListItem;