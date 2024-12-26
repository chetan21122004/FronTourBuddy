import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


type Attraction = {
  id: number;
  name: string;
  description: string;
  image: any;
};


// Api object
const attractions: Attraction[] = [
  {
    id: 1,
    name: "Agakhan Palace",
    description: "A historical palace known for its stunning architecture and gardens.",
    image: require('../../assets/AgaKhanPalace.jpg'),
  },
  {
    id: 2,
    name: "Shaniwar Wada",
    description: "A majestic fort with rich history, showcasing Maratha architecture.",
    image: require('../../assets/ShaniwarWada.jpg'),
  },
  {
    id: 3,
    name: "Lal Mahal",
    description: "A beautiful palace that reflects the grandeur of Pune's history.",
    image: require('../../assets/LalMahal.jpeg'),
  },
  // Add more attractions as needed
];

const AttractionCard: React.FC<{ attraction: Attraction }> = ({ attraction }) => (
  <View className="h-[240px] w-[240px] border-2  bg-gray-50 border-gray-400 overflow-hidden rounded-3xl m-2 mt-0">
    {/* Attraction Image */}
    <View className="image w-[390]">
      <Image
        className="h-[130px] w-full rounded-t-3xl"
        source={attraction.image}
        resizeMode="cover"
      />
    </View>

    {/* Attraction Details */}
    <View className="para px-3 pt-1 flex  ">
      <Text className="text-[17px] font-medium text-gray-800 ">{attraction.name}</Text>
      <Text className="  m-1 font-medium h-10 text-gray-500">{attraction.description}</Text>
    </View>

    {/* Explore Button */}
    <TouchableOpacity className="bg-yellow-400 rounded-full mx-auto py-2 w-11/12   flex items-center">
      <Text className="text-white text-lg font-semibold">Explore</Text>
    </TouchableOpacity>
  </View>
);

const PopularAttractions: React.FC = () => {
  return (<>
    <View className='InfoHeader  ml-6 flex flex-row items-center gap-2 justify-start '>
                <Text className='  font-semibold  color-yellow-500 mb-1'>
                  Tourist Places near by...
                </Text>
                <MaterialCommunityIcons name="map-search" size={20} color="#FACC15" />
              </View>

    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 2, alignItems: "center" }}
      className="pl-2"
    >
      {attractions.map((attraction) => (
        <AttractionCard key={attraction.id} attraction={attraction} />
      ))}
    </ScrollView>
      </>
  );
};

export default PopularAttractions;
