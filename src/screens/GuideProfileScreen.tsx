import { View, Image, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import NavbarBtm from "../components/NavbarBtm";
import { NavigationProp } from '@react-navigation/native';
import { useState } from "react";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
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
            <ScrollView
                showsVerticalScrollIndicator={false}
                className=" h-full bg-gray-50"
            >

                <View >

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

                    <View className="Dp&Info flex-row py-4  items-center gap-x-4  px-4 ">

                        <Image source={guide.profilePicture} className=" "
                            style={{ height: 60, width: 60 }}
                        />
                        <View className=" flex ">
                            <Text className=" text-xl font-semibold">{guide.name}</Text>
                            <Text className="  font-normal">Professional Tour Guide</Text>
                            <View className=" flex-row items-center ">
                                <Octicons name="dot-fill" size={15} color="#22C55E" className=" m-1" />

                                <Text className="text-xl items-center  color-green-500 font-medium">
                                    Available Now
                                </Text>
                            </View>
                        </View>
                    </View>


                    <Image source={guide.coverImage} className=" h-[200px] w-[330px] mx-auto rounded-3xl my-1 " />

                    <View className=" Desc px-4 ">
                        <View className=" m-1">
                            <Text className="  font-medium  text-2xl text-gray-500">Historic Pune Tour</Text>

                            <Text className="absolute right-2 font-semibold text-yellow-500 text-2xl">
                                ₹{guide.pricePerHour}/hr
                            </Text>
                        </View>
                        <Text className=" px-1  font-medium text-[15px] text-gray-500">
                            The guide shares his 5+ years of experience, showcasing Pune's rich heritage and ensuring unforgettable tours for every traveler.                    </Text>
                    </View>

                    <View className=" mainOptions flex-row items-center justify-evenly my-3">


                        <TouchableOpacity onPressIn={() => setSelectedTab('online')} className=" items-center w-5/12    ">
                            <Text className={` text-2xl rounded-3xl p-2 w-full text-center shadow-black shadow-lg border border-gray-300
                     ${selectedTab === 'online' ? 'color-white bg-yellow-400 ' : 'text-black bg-gray-100'}`}
                            >
                                Online
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPressIn={() => setSelectedTab('offline')} className=" items-center w-5/12    ">
                            <Text className={` text-2xl rounded-3xl p-2 w-full text-center shadow-black shadow-lg border border-gray-300
                     ${selectedTab === 'offline' ? 'color-white bg-yellow-400 ' : 'text-black bg-gray-100'}`}
                            >
                                Offline
                            </Text>
                        </TouchableOpacity>



                    </View>

                    <View className="justify-evenly my-4">
                        <TouchableOpacity
                            onPress={() => setSelectedTab('option1')}
                        >
                            <View className=" px-2 py-5 border bg-white border-gray-200 shadow-black shadow-lg rounded-xl mx-4 ">

                                <View className="flex-row w-full   items-center">

                                    <View className={`w-[15px] h-[15px]  rounded-full border border-gray-400 mr-5
                                ${selectedTab === 'option1' ? 'bg-yellow-400' : 'bg-gray-100'}`} />
                                    <FontAwesome6 name="bolt" size={16} color="#F5BB1B" />
                                    <Text className="ml-2 text-2xl font-semibold ">Instant Guide</Text>
                                    <Text className=" absolute right-2  font-semibold text-yellow-500 text-2xl">
                                        ₹{guide.pricePerHour}/hr
                                    </Text>
                                </View>

                                <View className={`h-7
                                ${selectedTab === 'option1' ? 'flex' : 'hidden'}
                                `}>
                                    <Text>chetu</Text>
                                </View>
                            </View>

                        </TouchableOpacity>


                    </View>

                </View>
            </ScrollView>

            <NavbarBtm navigation={navigation} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </View >
    );
};

export default GuideProfileScreen;