import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, FlatList ,Image} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { ScrollView } from 'react-native-gesture-handler';
import NavbarBtm from '../components/NavbarBtm';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SearchGuide from '../components/SearchGuide';



type RootStackParamList = {
  Search: undefined;
  // other screens
};

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>;

type SearchScreenProps = {
  navigation: SearchScreenNavigationProp;
};



const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedTab, setSelectedTab] = useState('search'); // Default selected tab
 


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className=' flex-1 pb-16'>
        <View className='SearchPg h-full  bg-gray-100 w-full'>

          {/* SearchBar */}
          <View className='top_searchbar  h-20  bg-gray-50 flex-row border border-t-0   border-gray-200 rounded-b-3xl flex items-center justify-center px-9 '>

            <TouchableOpacity onPress={() => navigation.goBack()} className=' bg-gray-100 border border-gray-300  rounded-full  p-2'>
              <Feather name="arrow-left" size={24} color="gray" />
            </TouchableOpacity>

            {/* Searchbar */}
            <View className=" searchBar  flex justify-center  flex-row items-center  ">
              <TextInput
                className=" w-9/12 bg-gray-100 h-full border border-gray-300 border-r-0 rounded-r-none rounded-full p-3 pl-4 shadow-sm text-gray-700"
                placeholder="Guides near me"
              />
              <Fontisto name="search" size={17} color="gray" className='bg-gray-100 border h-full border-gray-300 rounded-full border-l-0 rounded-l-none p-3  pr-3' />
            </View>

            <View className=' bg-gray-100 rounded-full border border-gray-300  p-2'>
              <Octicons name="filter" size={22} color="gray" />
            </View>


          </View>


          {/* Filter */}

          <View className='filter px-6 p-3 '>
            <Text className=' text-2xl font-medium'>
              Local Guide's
            </Text>

            <View className='flex flex-row mt-2 gap-3 items-center'>

              <Text
                className={`bg-gray-200 text-[14px] p-2 py-1 font-medium rounded-3xl ${selectedFilters.includes('experience') ? 'bg-yellow-400 text-white' : ''}`}
                onPress={() => {
                  setSelectedFilters(prev =>
                    prev.includes('experience') ? prev.filter(f => f !== 'experience') : [...prev, 'experience']
                  );
                }}
              >
                Experience
              </Text>
              <Text
                className={`bg-gray-200 text-[14px] p-2 py-1 font-medium rounded-3xl ${selectedFilters.includes('rating') ? 'bg-yellow-400 text-white' : ''}`}
                onPress={() => {
                  setSelectedFilters(prev =>
                    prev.includes('rating') ? prev.filter(f => f !== 'rating') : [...prev, 'rating']
                  );
                }}
              >
                Rating
              </Text>
              <Text
                className={`bg-gray-200 text-[14px] p-2 py-1 font-medium rounded-3xl ${selectedFilters.includes('instant') ? 'bg-yellow-400 text-white' : ''}`}
                onPress={() => {
                  setSelectedFilters(prev =>
                    prev.includes('instant') ? prev.filter(f => f !== 'instant') : [...prev, 'instant']
                  );
                }}
              >
                Instant
              </Text>
              <Text
                className={`p-2 text-[14px] py-1 font-medium rounded-3xl ${selectedFilters.includes('languages') ? 'bg-yellow-400 text-white font-normal' : 'bg-gray-200 text-black'}`}
                onPress={() => {
                  setSelectedFilters(prev =>
                    prev.includes('languages') ? prev.filter(f => f !== 'languages') : [...prev, 'languages']
                  );
                }}
              >
                Languages
              </Text>
            </View>

          </View>


          

        
            <View className=' flex-1 '>
            
            <View className=''>
                {/* < SearchGuide/> */}

                <SearchGuide navigation={navigation}/>

            </View>
            </View>



        </View>
        <NavbarBtm selectedTab={selectedTab} setSelectedTab={setSelectedTab} navigation={navigation}/>

      </SafeAreaView>
    </GestureHandlerRootView>
  );
};



export default SearchScreen;
