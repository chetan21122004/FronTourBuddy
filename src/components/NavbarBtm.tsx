import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome, Ionicons, FontAwesome5,Fontisto  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation



interface NavbarProps {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

const NavbarBtm: React.FC<NavbarProps> = ({ selectedTab, setSelectedTab }) => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View className='NavBar w-full bg-gray-50 border  border-gray-400 shadow-sm shadow-black h-[55px] absolute bottom-0 flex flex-row justify-evenly items-center'>
      <View className='p-0 px-1 justify-center items-center' onTouchStart={() => {
        setSelectedTab('home')
        navigation.navigate('Home'); // Navigate to the Home screen

        }}>
        <Ionicons name={selectedTab === 'home' ? "home" : "home-outline"} size={25} color={selectedTab === 'home' ? "#FACC15" : "gray"} className='my-1 p-0' />
        <Text className={`relative bottom-2 p-0  ${selectedTab === 'home' ? 'text-yellow-500' : 'text-black'}`}>Home</Text>
      </View>
      <View className='p-0 px-1 justify-center items-center'  onTouchStart={() => setSelectedTab('saved')}>
        <Ionicons name={selectedTab === 'saved' ? "heart-sharp" : "heart-outline"} size={25} color={selectedTab === 'saved' ? "#FACC15" : "gray"} className='my-1 p-0' />
        <Text className={`relative bottom-2 p-0  ${selectedTab === 'saved' ? 'text-yellow-500' : 'text-black'}`}>Saved</Text>
      </View>
      <View className='p-0 px-1 justify-center items-center'  onTouchStart={() => setSelectedTab('search')}>
        <Fontisto name="search" size={20}  color={selectedTab === 'search' ? "#FACC50" : "gray"} className='my-2 mb-2 p-0' />

        <Text className={`relative bottom-2 p-0  ${selectedTab === 'search' ? 'text-yellow-500' : 'text-black'}`}>Explore</Text>
      </View>
      <View className='pt-1 px-1 justify-center items-center' onTouchStart={() => setSelectedTab('booking')}>
        <FontAwesome name="calendar-check-o" size={20} color={selectedTab === 'booking' ? "#FACC50" : "gray"} className='my-2 mb-2 p-0' />
        <Text className={`relative bottom-2  ${selectedTab === 'booking' ? 'text-yellow-500' : 'text-black'}`}>Booking's</Text>
      </View>
      <View className='pt-1 px-1 justify-center items-center' onTouchStart={() => setSelectedTab('profile')}>
        <FontAwesome5 name={selectedTab === 'profile' ? "user-alt" : "user"} size={23} color={selectedTab === 'profile' ? "#FACC50" : "gray"} className='my-2 p-0' />
        <Text className={`relative bottom-2 p-0  ${selectedTab === 'profile' ? 'text-yellow-500' : 'text-black'}`}>Profile</Text>
      </View>
    </View>
  );
};

export default NavbarBtm;