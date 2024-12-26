import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, FontAwesome5, Fontisto } from '@expo/vector-icons';

interface NavbarProps {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  navigation: any;
}

const NavbarBtm: React.FC<NavbarProps> = ({ selectedTab, setSelectedTab, navigation }) => {
  return (
    <View className="NavBar w-full bg-gray-50 border border-gray-400 shadow-sm shadow-black h-[55px] absolute bottom-0 flex flex-row justify-evenly items-center">

      <TouchableOpacity onPressIn={() => { 
        setSelectedTab('home');
        if (selectedTab!='home') {
          navigation.navigate('Home'); 
        }
      }}
       className="p-0 px-1 justify-center items-center">
        <Ionicons name={selectedTab === 'home' ? "home" : "home-outline"} size={25} color={selectedTab === 'home' ? "#FACC15" : "gray"} />
        <Text className={selectedTab === 'home' ? 'text-yellow-500' : 'text-black'}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPressIn={() => setSelectedTab('saved')} className="p-0 px-1 justify-center items-center">
        <Ionicons name={selectedTab === 'saved' ? "heart-sharp" : "heart-outline"} size={25} color={selectedTab === 'saved' ? "#FACC15" : "gray"} />
        <Text className={selectedTab === 'saved' ? 'text-yellow-500' : 'text-black'}>Saved</Text>
      </TouchableOpacity>

      <TouchableOpacity onPressIn={() => {
        setSelectedTab('search')
        if (selectedTab!='search') {
          navigation.navigate('Search'); 
        }
        }} className="p-0 px-1 justify-center items-center">
        <Fontisto name="search" size={20} color={selectedTab === 'search' ? "#FACC15" : "gray"} />
        <Text className={selectedTab === 'search' ? 'text-yellow-500' : 'text-black'}>Explore</Text>
      </TouchableOpacity>

      <TouchableOpacity onPressIn={() => setSelectedTab('booking')} className="p-0 px-1 justify-center items-center">
        <FontAwesome name="calendar-check-o" size={20} color={selectedTab === 'booking' ? "#FACC15" : "gray"} />
        <Text className={selectedTab === 'booking' ? 'text-yellow-500' : 'text-black'}>Bookings</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPressIn={() => setSelectedTab('profile')} className="p-0 px-1 justify-center items-center">
        <FontAwesome5 name={selectedTab === 'profile' ? "user-alt" : "user"} size={23} color={selectedTab === 'profile' ? "#FACC15" : "gray"} />
        <Text className={selectedTab === 'profile' ? 'text-yellow-500' : 'text-black'}>Profile</Text>
      </TouchableOpacity>

    </View>
  );
};

export default NavbarBtm;
