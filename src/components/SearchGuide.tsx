import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { FontAwesome } from '@expo/vector-icons';


interface Guide {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  pricePerHour: number;
  languages: string[];
  description: string;
  profilePicture: any;
  coverImage: any;

}

const GuideCardSearch: React.FC<{ guide: Guide, navigation: any }> = ({ guide, navigation }) => (
  <View className="card pb-2 w-[320px] flex  border-2 bg-gray-50 border-gray-400 overflow-hidden rounded-3xl m-2">
    {/* Guide Image */}

    <View className="image">
      <Image
        style={{ height: 150, width: 350 }}
        className="rounded-t-3xl bg-cover  "
        source={guide.coverImage}
      />
    </View>

    {/* Profile Picture, Name, Rating, and Price */}
    <View className="Dp&Rating para p-3 py-0  m-1 flex flex-row">
      <Image
        style={{ height: 56, width: 56, marginRight: 8 }}
        className="rounded-full"
        source={guide.profilePicture}
      />

      <View className="Rating">
        <Text className="text-[17px] font-medium text-gray-800">{guide.name}</Text>
        <View className="flex flex-row items-center">
          <FontAwesome name="star" size={17} color="#FACC15" className="mr-2" />
          <Text className="gap-3 flex justify-between">
            {guide.rating} ({guide.reviews} reviews)
          </Text>
        </View>

        {/* Languages */}
        <View className="languages flex flex-row items-center mt-1  justify-start flex-wrap gap-x-2 ">
          {guide.languages.map((language, index) => (
            <Text key={index} className="bg-gray-200 rounded-3xl text-center px-2 py-[2px] ">
              {language}
            </Text>
          ))}
        </View>

      </View>

      <Text className="absolute right-2 font-semibold text-yellow-500 text-xl">
        ₹{guide.pricePerHour}/hr
      </Text>
    </View>


    {/* Guide Description */}
    <Text className=" pl-3 m-1 font-medium mb-2 w-11/12 text-wrap text-gray-500">{guide.description}</Text>

    {/* Book Now Button */}
    <TouchableOpacity
      onPress={() => navigation.navigate('GuideProfile', { guide })}
      className="rounded-3xl flex h-11 bg-[#FACC15] text-white items-center justify-center mx-4">
      <Text className="text-xl color-white font-medium" >Book Now</Text>
    </TouchableOpacity>
  </View>
);

const GuideList: React.FC<{ guides: Guide[], navigation: any }> = ({ guides, navigation }) => (
  <FlatList
    data={guides}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <GuideCardSearch guide={item} navigation={navigation} />}
    showsVerticalScrollIndicator={false}
    ListHeaderComponent={
      <Text className=' ml-4 text-xl font-medium'>
        25 Guides found...
      </Text>
    }
  />
);

interface GuideNav {

  navigation: any;
}
const SearchGuide: React.FC<GuideNav> = ({ navigation }) => {

  const apiResponse: Guide[] = [
    {
      id: "g-0701",
      name: "Arjun Mehta",
      rating: 4.7,
      reviews: 120,
      pricePerHour: 350,
      languages: ["English", "Hindi"],
      description: "Experienced in heritage and cultural tours.",
      profilePicture: require('../../assets/guideDp1.png'),
      coverImage: require('../../assets/guide1.png'),
    },
    {
      id: "g-0702",
      name: "Kavya Reddy",
      rating: 4.9,
      reviews: 215,
      pricePerHour: 400,
      languages: ["English", "Telugu"],
      description: "Specialized in nature trails and photography tours.",
      profilePicture: require('../../assets/guideDp2.png'),
      coverImage: require('../../assets/guide2.png'),
    },
    {
      id: "g-0703",
      name: "Aarav Singh",
      rating: 4.6,
      reviews: 150,
      pricePerHour: 300,
      languages: ["English", "Punjabi"],
      description: "Mountain guide with expertise in trekking routes.",
      profilePicture: require('../../assets/guideDp3.png'),
      coverImage: require('../../assets/guide3.png'),
    },
    {
      id: "g-0704",
      name: "Ishika Jain",
      rating: 4.8,
      reviews: 200,
      pricePerHour: 320,
      languages: ["English", "Gujarati"],
      description: "Food and cultural tour expert with 4+ years of experience.",
      profilePicture: require('../../assets/guideDp4.png'),
      coverImage: require('../../assets/guide4.png'),
    },
    {
      id: "g-0705",
      name: "Rohan Das",
      rating: 4.5,
      reviews: 180,
      pricePerHour: 280,
      languages: ["English", "Bengali"],
      description: "Wildlife guide with in-depth knowledge of national parks.",
      profilePicture: require('../../assets/guideDp5.png'),
      coverImage: require('../../assets/guide5.png'),
    },
    {
      id: "g-0706",
      name: "Meera Pillai",
      rating: 4.7,
      reviews: 230,
      pricePerHour: 360,




      languages: ["English", "Malayalam"],
      description: "Specialized in eco-tours and sustainable travel.",
      profilePicture: require('../../assets/guideDp6.png'),
      coverImage: require('../../assets/guide6.png'),
    },
    {
      id: "g-0707",
      name: "Dev Sharma",
      rating: 4.6,
      reviews: 145,
      pricePerHour: 310,
      languages: ["English", "Hindi", "Tamil"],
      description: "Adventure enthusiast with expertise in water sports.",
      profilePicture: require('../../assets/guideDp7.png'),
      coverImage: require('../../assets/guide7.png'),
    },
    {
      id: "g-0708",
      name: "Priya Sharma",
      rating: 4.8,
      reviews: 186,
      pricePerHour: 300,
      languages: ["English", "Hindi", "Marathi"],
      description: "Specialized in art and architecture tours with 5+ years experience.",
      profilePicture: require('../../assets/guideDp8.png'),
      coverImage: require('../../assets/guide8.png'),
    },
    {
      id: "g-0709",
      name: "Rahul Verma",
      rating: 4.5,
      reviews: 102,
      pricePerHour: 250,
      languages: ["English", "Marathi"],
      description: "Nature and wildlife enthusiast with 3+ years of experience.",
      profilePicture: require('../../assets/guideDp9.png'),
      coverImage: require('../../assets/guide9.png'),
    },
  ];




  return (
    <View className=' items-center'>
      <GuideList guides={apiResponse} navigation={navigation} />
    </View>
  )


};

export default SearchGuide;
