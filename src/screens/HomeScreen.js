import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import UseFetchPeople from '../api/UseFetchPeople';
import ListItem from '../components/ListItem';
import EmptyList from '../components/EmptyList';
import CustomActivityIndicator from '../components/CustomActivityIndicator';
import FilterItem from '../components/FilterItem';

const HomeScreen = ({navigation}) => {

  const [people,setPeople] = useState([])
  const [filterPeople,setFilterPeople] = useState([])
  const [nextUrl,setNextUrl] = useState("")
  const [loading,setLoading] = useState(true)
  const [filterKey,setFilterKey] = useState("All")
  const [checkFilter,setCheckFilter] = useState(false)


  useEffect(() => {
    UseFetchPeople(setPeople, setNextUrl)
    setLoading(false)
  },[])

  useEffect(() => {
    if(filterKey !== "All"){
        setCheckFilter(true)
        setFilterPeople( people.filter((character) => character.gender === filterKey) );
    }
    if(filterKey === "All")
        setCheckFilter(false)
  },[filterKey])

  const fetchNextPage = () => {
    UseFetchPeople(setPeople, setNextUrl, nextUrl)
  }

  const renderItem = ({ item }) => (
    <ListItem title={item.name} item={item} navigation={navigation} />
  );

  if(loading)
    return (
        <CustomActivityIndicator />
    )

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar />
      <View>
        <View style={styles.filterView}>
            <FilterItem 
                filterName="All" 
                selectedFilter={filterKey} 
                setFilterValue={setFilterKey}
            />
            <FilterItem 
                filterName="male" 
                selectedFilter={filterKey} 
                setFilterValue={setFilterKey}
            />
            <FilterItem 
                filterName="female" 
                selectedFilter={filterKey} 
                setFilterValue={setFilterKey}
            />
        </View>
        <View style={{paddingBottom: 50}}>
            <FlatList
                data={checkFilter?filterPeople:people}
                renderItem={renderItem}
                ListEmptyComponent={ <EmptyList /> }
                keyExtractor={(item,index) => index}
                onEndReached={ nextUrl && filterKey === "All" && fetchNextPage }
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
      backgroundColor: '#D3D3D3'
  },
  filterView: {
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 10
  }
});

export default HomeScreen;
