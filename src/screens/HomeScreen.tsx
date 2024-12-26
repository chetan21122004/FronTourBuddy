import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, StatusBar, Text, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import GuideScroll from '../components/GuideScroll';
import PopularAttractions from '../components/PopularAttraction';



import { NavigationProp } from '@react-navigation/native';
import NavbarBtm from '../components/NavbarBtm';



interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {


  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('home'); // Default selected tab
 
  
  const handleSearch = () => {
    if (searchText.trim()) {
      navigation.navigate('Search', { query: searchText }); // Navigate to SearchScreen with search query
    }
  };

  return (
    <SafeAreaView  className=' flex-1 pt-10 bg-white'>
     
     

      <ScrollView
        contentContainerStyle={{ paddingBottom: 60 }}
        style={{ flex: 1 }}
      >
        {/* Header Section */}
        <View className=' h-full relative '>
          <View className='  '>
            <View className='HeaderSec bg-yellow-400 h-36 rounded-b-[30px] flex flex-col '>
              <View className=' Headersec-top w-full h-9 px-6  mt-3 flex  flex-row items-center justify-between   '>
                <View className='flex flex-row items-center justify-center  gap-2 '>
                  <Entypo name="menu" size={30} color="white" />
                  <MaterialIcons name="location-on" size={24} color="white" />
                  <Text className=' w-40  text-wrap  leading-3 py-1 text-white font-semibold  items-center flex '>
                    Bhumkarchowk pune
                  </Text>
                </View>
                <View className='  flex flex-row items-center  '>
                  <FontAwesome5 name="bell" size={23} color="white" className='mr-4' />
                  <FontAwesome5 name="user-alt" size={18} color="#FACC15" className='bg-white p-2  rounded-full' />
                </View>
              </View>
              {/* Searchbar */}
              <View className=" searchBar h-20 flex justify-center mt-3 flex-row items-center p-4 ">
                <TextInput
                  className="w-10/12 bg-white h-full border border-gray-300 border-r-0 rounded-r-none rounded-full px-4 py-2 pl-4 shadow-sm text-gray-700"
                  placeholder="Search destinations, guides..."
                  value={searchText}
                  onChangeText={setSearchText}
                  onSubmitEditing={handleSearch} // Trigger search on submit
                />
                <Fontisto name="search" size={17} color="gray" onPress={handleSearch} className='bg-white border h-full border-gray-300 rounded-full border-l-0 rounded-l-none p-3 pr-5' />
              </View>
            </View>

            <View className=' options  h-24 flex flex-row items-center justify-evenly my-4 mb-1 '>
              {/* Explore */}
              <View className=' h-28  items-center  rounded-full  w-28 '>
                <View className='h-[60px] w-[60px]   bg-yellow-100 p-3  justify-center rounded-full' >
                  <MaterialCommunityIcons name="account-group-outline" size={35} color="#5B5B5D" />
                </View>
                <Text className=' text-gray-600'>
                  Group Tours
                </Text>
              </View>

              <View className=' h-28  items-center  rounded-full  w-28 '>
                <View className='h-[60px] w-[60px]   bg-yellow-100 p-3 rounded-full'>
                  <Image className=' h-[40px] w-[40px] '
                    source={require('../../assets/hotel.png')}
                  />
                </View>
                <Text className=' text-gray-600'>
                  Hotel's
                </Text>
              </View>

              <View className=' h-28  items-center rounded-full   w-28 '>
                <View className='h-[60px] w-[60px]   bg-yellow-100 p-3 rounded-full'>
                  <Image className=' h-[40px] w-[40px] '
                    source={require('../../assets/guide.png')}
                  />
                </View>
                <Text className=' text-gray-600 mt-1'>
                  Live Guide
                </Text>
              </View>
            </View>

            {/*  Available guide component */}
            <GuideScroll />

            {/* Just Line */}
            <View className='Line w-full items-center my-2 mt-0'>
              <View className=' w-3/4 bg-gray-400 h-[3px] rounded-full'></View>
            </View>

            <PopularAttractions />
          </View>
        </View>


      </ScrollView>
        {/* BuddyAi */}
        <View className="absolute w-16 h-16 items-center justify-center bottom-32 right-9 bg-yellow-400 p-4  rounded-full shadow-black shadow-lg ">
          <Text className="text-white text-center  text-2xl font-bold">Ai</Text>
        </View>
        <NavbarBtm selectedTab={selectedTab} setSelectedTab={setSelectedTab} navigation={navigation} />
    </SafeAreaView>
  );
}



export default HomeScreen;

