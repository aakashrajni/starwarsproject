import React from 'react';
import { Pressable, Text } from 'react-native';

const FilterItem = ({filterName, selectedFilter, setFilterValue}) => {

    const selected = (filterName === selectedFilter)
    
    let filterContainer = {
        paddingHorizontal: 20,
        height: 30,
        borderWidth: 1,
        borderColor: '#0000ff',
        marginHorizontal: 5,
        borderRadius: 15,
        backgroundColor: selected?'#0000ff':'#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }

    let textStyle = {
        color: selected?'#ffffff':'#0000ff',
        fontSize: 16
    }

    return(
        <Pressable 
            style={filterContainer}
            onPress={() => setFilterValue(filterName)}
        >
            <Text
                style={textStyle}
            >
                {filterName}
            </Text>
        </Pressable>
    )
}

export default FilterItem;