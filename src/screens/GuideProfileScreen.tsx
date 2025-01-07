import { View, Image, Text, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from "react-native";
import NavbarBtm from "../components/NavbarBtm";
import { NavigationProp } from '@react-navigation/native';
import { useState } from "react";
import { Feather, FontAwesome5, Octicons, FontAwesome6, AntDesign, Ionicons } from '@expo/vector-icons';

import { DateTimePicker } from "../components/DateTimePicker";

interface GuideProfileProps {
    navigation: NavigationProp<any>;
    route: any;
}
const GuideProfileScreen = ({ route, navigation }: GuideProfileProps) => {
    const [selectedTab, setSelectedTab] = useState('explore'); // Default selected tab
    const [type, setType] = useState('online'); // Default selected tab
    const [subType, setSubType] = useState(''); // Default selected tab
    const [showDatePicker, setShowDatePicker] = useState(false); // State to control date picker visibility
    const [scheduledDate, setScheduledDate] = useState(new Date()); // State to hold the selected date
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const bookedDates = [
        new Date(2025, 1 - 1, 3),
        new Date(2024, 12 - 1, 30),
    ];

    const availableDates = [
        new Date(2024, 12 - 1, 29),
        new Date(2024, 12 - 1, 31),
    ];

    const handleDateTimeSelect = (date: Date) => {
        console.log('Selected date and time:', date);
        // Handle the selected date and time
    };
    // Example data - replace with your actual data

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        setShowCalendar(false);
    }
    const { guide } = route.params;
    // const guide =
    // {
    //     id: "g-0701",
    //     name: "Arjun Mehta",
    //     rating: 4.7,
    //     reviews: 120,
    //     pricePerHour: 350,
    //     languages: ["English", "Hindi"],
    //     description: "Experienced in heritage and cultural tours.",
    //     profilePicture: require('../../assets/guideDp1.png'),
    //     coverImage: require('../../assets/guide1.png'),
    // }



    return (
        <View className=' flex-1 pt-10 bg-white pb-16'>
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
            <View className="Dp&Info flex-row py-2   items-center gap-x-4  px-4 ">

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
            <ScrollView
                showsVerticalScrollIndicator={false}
                className=" h-full bg-gray-50  "
            >

                <View className="pb-3" >




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


                    <View className=" mainOptions flex-row items-center  justify-evenly my-3">


                        <TouchableOpacity onPressIn={() => setType('online')} className=" items-center w-5/12    ">
                            <Text className={` text-2xl rounded-3xl p-2 w-full text-center shadow-black shadow-lg border border-gray-300
                     ${type === 'online' ? 'color-white bg-yellow-400 ' : 'text-black bg-gray-100'}`}
                            >
                                Online
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPressIn={() => setType('offline')} className=" items-center w-5/12    ">
                            <Text className={` text-2xl rounded-3xl p-2 w-full text-center shadow-black shadow-lg border border-gray-300
                     ${type === 'offline' ? 'color-white bg-yellow-400 ' : 'text-black bg-gray-100'}`}
                            >
                                Offline
                            </Text>
                        </TouchableOpacity>



                    </View>



                    <View className=" info flex-row flex  mx-6 border px-2 border-gray-400 rounded-3xl items-center p-1 bg-yellow-100 ">
                        <Ionicons name="information-circle-outline" size={20} color="black" />
                        <Text className="text-gray-600 text-[14px] px-1 font-medium ">
                            Prices vary based on the Online or Offline service
                        </Text>
                    </View>



                    <View className="RadioOptions justify-evenly flex gap-y-3 my-4">
                        <TouchableOpacity
                            onPress={() => setSubType('instant')}
                        >
                            <View className=" px-2 py-5 border bg-white border-gray-200  rounded-xl mx-4 ">
                                <View className="flex-row w-full   items-center">

                                    <FontAwesome6 name="bolt" size={17} color="#F5BB1B" />
                                    <Text className="ml-2 text-2xl color-gray-500 font-semibold ">Instant Guide</Text>
                                    <Text className=" absolute right-12  font-semibold text-yellow-500 text-[20px]">
                                        ₹{guide.pricePerHour + (type === 'offline' ? 100 : 0)}/tour
                                    </Text>
                                    <View className={` radioIcon w-[15px] h-[15px] absolute right-0  rounded-full border border-gray-400 mr-5
                                          ${subType === 'instant' ? 'bg-yellow-400' : 'bg-gray-100'}`} />

                                </View>
                                <Text className=" ml-7 text-[15px] text-gray-500 font-semibold ">Guide in under 15 mins</Text>


                                <View className={` OnclickInfo px-4
                                ${subType === 'instant' ? 'flex' : 'hidden'}
                                `}>
                                    <Text className="text-[14px] ml-3 text-gray-600 font-medium">Get immediate assistance and personalized tours with our Instant Guide service!</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                        {/* Schedule */}



                        <View className=" px-2 py-5 border bg-white border-gray-200  rounded-xl mx-4 ">
                            <TouchableOpacity
                                onPress={() => setSubType('scheduled')}
                            >
                                <View className="flex-row w-full   items-center">
                                    <AntDesign name="clockcircle" size={16} color="#F5BB1B" />
                                    <Text className="ml-2 text-2xl color-gray-500 font-semibold ">Schedule Guide</Text>
                                    <Text className=" absolute right-12  font-semibold text-yellow-500 text-[20px] ">
                                        ₹{guide.pricePerHour - 100 + (type === 'offline' ? 100 : 0)}/tour
                                    </Text>
                                    <View className={`w-[15px] h-[15px] absolute right-0 rounded-full border border-gray-400 mr-5
                                ${subType === 'scheduled' ? 'bg-yellow-400' : 'bg-gray-100'}`} />
                                </View>
                                <Text className=" ml-7 text-[15px] text-gray-500 font-semibold ">
                                    Fixed timing assistance
                                </Text>
                            </TouchableOpacity>


                            <View className={` justify-center
                                ${subType === 'scheduled' ? 'flex' : 'hidden'}
                                `}>
                                <Text className="text-[14px] px-4 ml-3 text-gray-600 font-medium">
                                    Plan your tour in advance with our Scheduled Guide service for a tailored experience!
                                </Text>
                                <TouchableOpacity onPress={() => setShowCalendar(!showCalendar)} className="mt-2 ml-6">
                                    <Text className="text-blue-500">Select Date & Time</Text>
                                </TouchableOpacity>

                                <View className="">
                                    {showCalendar && (
                                        <DateTimePicker
                                            onSelect={handleDateTimeSelect}
                                            bookedDates={bookedDates}
                                            availableDates={availableDates}
                                        />
                                    )}
                                </View>
                            </View>
                        </View>


                        {/* Vip */}


                        <TouchableOpacity
                            onPress={() => setSubType('vip')}
                        >
                            <View className=" px-2 py-5 border bg-white border-gray-200  rounded-xl mx-4 ">
                                <View className="flex-row w-full   items-center">
                                    <FontAwesome5 name="crown" size={16} color="#F5BB1B" />
                                    <Text className="ml-2 text-2xl text-gray-500 font-semibold ">VIP Guide</Text>
                                    <Text className=" absolute right-12  font-semibold text-yellow-500 text-[20px]">
                                        ₹{guide.pricePerHour + 250 + (type === 'offline' ? 100 : 0)}/tour
                                    </Text>
                                    <View className={`w-[15px] h-[15px] absolute right-0 rounded-full border border-gray-400 mr-5
                                ${subType === 'vip' ? 'bg-yellow-400' : 'bg-gray-100'}`} />
                                </View>
                                <Text className=" ml-8 text-[15px] text-gray-500 font-semibold ">
                                    Exclusive dedicated guide
                                </Text>
                                <View className={` px-4
                                ${subType === 'vip' ? 'flex' : 'hidden'}
                                `}>
                                    <Text className="text-[14px] ml-4 text-gray-600 font-medium">Experience exclusive tours with our VIP Guide service for a premium experience!</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>



                    <View className=" Price bg-white mx-4  border border-gray-300 rounded-xl px-5 p-3">
                        <View className=" Info&Coupon  ">
                            <Text className=" text-2xl mb-2 font-semibold">
                                Price Details
                            </Text>
                            <View className="flex flex-row ">
                                <TextInput
                                    placeholder="Enter coupon code"
                                    className="border border-gray-300 rounded-xl w-3/4 rounded-r-none border-r-0  p-2 px-4"
                                />
                                <TouchableOpacity className="bg-yellow-400 rounded-xl items-center  p-1 px-4 ml-1 border-l-0 rounded-l-none">
                                    <Text className="text-white font-semibold text-xl">Apply</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View className=" h-20 my-4 px-1 py-3  border-y border-gray-300">
                            <View className="flex my-auto flex-row justify-between items-center">
                                <Text className="   text-[15px] text-gray-500">
                                    Tour Price
                                </Text>
                                <Text className=" text-[15px]">+ ₹{guide.pricePerHour + (type === 'offline' ? 100 : 0) + (subType === 'instant' ? 0 : subType === 'scheduled' ? -100 : 250)}</Text>
                            </View>
                            <View className="flex  my-auto flex-row justify-between items-center">
                                <Text className=" text-[15px] text-gray-500">
                                    Discount
                                </Text>
                                <Text className=" text-[15px]">- ₹150</Text>
                            </View>
                        </View>
                        <View className="flex   flex-row justify-between pl-2 px-1 items-center">
                            <Text className=" text-[15px] text-gray-500  font-bold">
                                Total
                            </Text>
                            <Text className=" text-[15px]"> ₹{
                                (guide.pricePerHour + (type === 'offline' ? 100 : 0) + (subType === 'instant' ? 0 : subType === 'scheduled' ? -100 : 250)) - 150
                            }</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            const amt = (guide.pricePerHour + (type === 'offline' ? 100 : 0) + (subType === 'instant' ? 0 : subType === 'scheduled' ? -100 : 250)) - 150
                            navigation.navigate('Payment', { amt });
                        }}
                        className=" items-center w-11/12 mx-auto mt-4 shadow    ">
                        <Text className={` text-2xl rounded-2xl p-2 color-white bg-yellow-400 w-full text-center font-semibold  border border-gray-300 `}
                        >
                            Book Now
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <NavbarBtm navigation={navigation} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </View >
    );
};

export default GuideProfileScreen;