import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CustomActivityIndicator from '../components/CustomActivityIndicator';
import UseFetchSpecies from '../api/UseFetchSpecies';
import UseFetchMovie from '../api/UseFetchMovie';
import UseFetchSpaceship from '../api/UseFetchSpaceship';

const DetailScreen = ({route}) => {

    const item = route.params.item;
    const [species, setSpecies] = useState("NA")
    const [movies, setMovies] = useState("NA")
    const [spaceships, setSpaceships] = useState("NA")
    const [loading,setLoading] = useState(true)

    useEffect(()=> {
        //get species
        item.species.length && 
        getSpecies(item.species)
        .then((species) => { 
            setSpecies(species)
            setLoading(false)
        })
        //get movie
        item.films.length && 
        getMovie(item.films)
        .then((movies) => { 
            setMovies(movies)
            setLoading(false)
        })
        //get spaceship
        item.starships.length && 
        getSpaceship(item.starships)
        .then((spaceships) => { 
            setSpaceships(spaceships)
            setLoading(false)
        })
    },[])

    const getSpecies = async (speciesUrl) => {
        const promises = speciesUrl.map(async (url) => {
            return await UseFetchSpecies(url);
        })
        return createString(await Promise.all(promises))
    }

    const getMovie = async (movieUrl) => {
        const promises = movieUrl.map(async (url) => {
            return await UseFetchMovie(url);
        })
        return createString(await Promise.all(promises))
    }

    const getSpaceship = async (spaceshipUrl) => {
        const promises = spaceshipUrl.map(async (url) => {
            return await UseFetchSpaceship(url);
        })
        return createString(await Promise.all(promises))
    }

    const createString = (strArray) => {
        let strTemp = ""
        strArray.map((name, index) => {
            if (index === 0)
                strTemp += name;
            else
                strTemp += `, ${name}`;
        })
        return strTemp;
    }

    if(loading)
    return (
        <CustomActivityIndicator />
    )

    return (
        <View style={styles.container}>
            <View style={styles.detailView}>
                <View style={styles.detailRow}>
                    <Text>Name:</Text>
                    <Text 
                        style={styles.textStyle}
                    >
                        {item.name}
                    </Text>
                </View>
            </View>
            <View style={styles.detailView}>
                <View style={styles.detailRow}>
                    <Text>Species:</Text>
                    <Text 
                        style={styles.textStyle}
                    >
                        {species}
                    </Text>
                </View>
            </View>
            <View style={styles.detailView}>
                <View style={styles.detailRow}>
                    <Text>Movies:</Text>
                    <Text 
                        style={styles.textStyle}
                    >
                        {movies}
                    </Text>
                </View>
            </View>
            <View style={styles.detailView}>
                <View style={styles.detailRow}>
                    <Text>Spaceships:</Text>
                    <Text 
                        style={styles.textStyle}
                    >
                        {spaceships}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    detailView: {
        backgroundColor: '#ffffff',
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 25,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    detailRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textStyle: {
        paddingLeft: 35,
        paddingRight: 25
    }
})

export default DetailScreen;