import { View, Image, Text, SafeAreaView, TouchableOpacity } from "react-native";
import NavbarBtm from "../components/NavbarBtm";
import { NavigationProp } from '@react-navigation/native';
import { useState } from "react";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


interface GuideProfileProps {
    navigation: NavigationProp<any>;
    route: any;
}
const GuideProfileScreen = ({ route, navigation }: GuideProfileProps) => {
    const [selectedTab, setSelectedTab] = useState('explore'); // Default selected tab

    // const { guide } = route.params;
    const guide =
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
    }



    return (
        <View className=' flex-1 pt-10 bg-white'>

            <View className=" h-full bg-yellow-200">

                <View className="Topbar">
                    <View className=" h-14 bg-white border-b items-center px-4   flex-row justify-between border-b-gray-300 ">

                        <View className=" flex-row items-center ">
                            <TouchableOpacity onPress={() => navigation.goBack()} className=' mr-3 '>
                                <Feather name="arrow-left" size={24} color="gray" />
                            </TouchableOpacity>

                            <Text className=" text-[20px] font-semibold">
                                Book Your Tour Now...
                            </Text>

                        </View>

                        <TouchableOpacity className=' mr-4 '>
                            <FontAwesome5 name="bell" size={23} color="gray" className='' />
                        </TouchableOpacity>

                    </View>


                </View>

                <View className="Dp&Info flex  px-4 bg-yellow-500 ">

                    <Image source={guide.profilePicture} className=" "
                        style={{ height: 60, width: 60 }}
                    />
                    <View>
                        <Text>hello</Text>
                    </View>
                </View>

            </View>
            <NavbarBtm navigation={navigation} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </View >
    );
};

export default GuideProfileScreen;