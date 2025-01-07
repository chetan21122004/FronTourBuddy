import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Feather, FontAwesome5, Octicons, FontAwesome6, FontAwesome, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';


interface PaymentScreenProps {
    navigation: NavigationProp<any>;
    route: any;

}
 
const PaymentScreen: React.FC<PaymentScreenProps> = ({ navigation,route }) => {
    const {amt}= route.params;
    const amount = '₹300'||`₹${amt}`;
    const [selectedPayment, setSelectedPayment] = useState<string | null>('Credit Card');
    const [selectedBank, setSelectedBank] = useState<string>('');
    const handlePayment = () => {

        // Simulate payment processing
        console.log('Payment processed');
    };

    return (
        <View className="flex-1 pt-10 bg-white ">


            <View className="Topbar">
                <View className=" h-14 bg-white border-b items-center px-4   flex-row justify-between border-b-gray-300 ">

                    <View className=" flex-row items-center ">
                        <TouchableOpacity onPress={() => navigation.goBack()} className=' mr-3 '>
                            <Feather name="arrow-left" size={24} color="gray" />
                        </TouchableOpacity>


                    </View>
                    <Text className=" text-[20px] mx-auto pr-2 font-semibold">
                        Payment
                    </Text>

                </View>


            </View>

            <ScrollView className='Screen bg-gray-50 px-4 h-full pb-4 '>
                <View className='amount flex-row bg-white p-4 px-6 rounded-xl border border-gray-300 justify-between items-center  my-3'>
                    <Text className=' text-xl text-gray-500 font-medium'>
                        Total Amount:
                    </Text>
                    <Text className=' text-xl text-gray-500 font-medium'>
                    ₹{amt}
                    </Text>
                </View>

                <View className='  bg-white p-2 rounded-xl border border-gray-300'>
                    <Text className=' text-2xl ml-5  font-medium'>
                        Payment Method
                    </Text>

                    <View className='PaymentType gap-y-4 flex  justify-between my-4'>
                        <TouchableOpacity
                            className={`flex-row items-center p-4 rounded-3xl border border-gray-200  ${selectedPayment === 'UPI' ? 'bg-yellow-400' : ''}`}
                            onPress={() => setSelectedPayment('UPI')}
                        >
                            <MaterialIcons name="qr-code-scanner" size={22} color={selectedPayment === 'UPI' ? 'white' : 'black'} />
                            <Text className={`ml-5 text-xl font-medium ${selectedPayment === 'UPI' ? 'text-white' : 'text-gray-600'}`}>UPI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className={`flex-row items-center p-4 rounded-3xl border border-gray-200 ${selectedPayment === 'Net Banking' ? 'bg-yellow-400' : ''}`}
                            onPress={() => setSelectedPayment('Net Banking')}
                        >
                            <FontAwesome name="bank" size={20} color={selectedPayment === 'Net Banking' ? 'white' : 'black'} />
                            <Text className={`ml-5 text-xl font-medium ${selectedPayment === 'Net Banking' ? 'text-white' : 'text-gray-600'}`}>Net Banking</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className={`flex-row items-center p-4 rounded-3xl border border-gray-200 ${selectedPayment === 'Credit Card' ? 'bg-yellow-400' : ''}`}
                            onPress={() => setSelectedPayment('Credit Card')}
                        >
                            <FontAwesome name="credit-card-alt" size={18} color={selectedPayment === 'Credit Card' ? 'white' : 'black'} />
                            <Text className={`ml-5 text-xl font-medium ${selectedPayment === 'Credit Card' ? 'text-white' : 'text-gray-600'}`}>Credit Card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className={`flex-row items-center p-4 rounded-3xl border border-gray-200 ${selectedPayment === 'Pay After Tour' ? 'bg-yellow-400' : ''}`}
                            onPress={() => setSelectedPayment('Pay After Tour')}
                        >
                            <FontAwesome6 name="clock" size={21} color={selectedPayment === 'Pay After Tour' ? 'white' : 'black'} />
                            <Text className={`ml-6 text-xl font-medium ${selectedPayment === 'Pay After Tour' ? 'text-white' : 'text-gray-600'}`}>Pay After Tour</Text>
                        </TouchableOpacity>
                    </View>

                    <View className=' OnSelectedOptions p-4 border-gray-200 rounded-3xl  border'>
                        {selectedPayment === 'UPI' && (
                            // Render UPI QR code component here
                            <Text>UPI QR Code will be displayed here</Text>
                        )}
                        {selectedPayment === 'Net Banking' && (
                            <View className="">
                                <Text className="font-medium text-[16px] ml-2 ">Select Bank</Text>
                                <View className=" BankOptions border border-gray-300 rounded-3xl "  >
                                    <Picker
                                        selectedValue={selectedBank}
                                        onValueChange={(itemValue) => setSelectedBank(itemValue)}
                                    >
                                        <Picker.Item label="Select a bank" value="" />

                                        <Picker.Item label="Bank A" value="bankA" />
                                        <Picker.Item label="Bank B" value="bankB" />
                                        <Picker.Item label="Bank C" value="bankC" />
                                        {/* Add more banks as needed */}
                                    </Picker>
                                </View>
                                <Text className="font-medium text-[16px] ml-2 ">Account Number</Text>
                                <TextInput
                                    placeholder="Account Number"
                                    keyboardType="numeric"
                                    className="border border-gray-300 rounded-3xl m-1 p-2 px-3 mb-2"
                                />
                                <Text className="font-medium text-[16px] ml-2 ">IFSC Code</Text>
                                <TextInput
                                    placeholder="IFSC Code"
                                    className="border border-gray-300 rounded-3xl m-1 p-2 px-3 mb-2"
                                />
                                <Text className="font-medium text-[16px] ml-2 ">Account Holder Name</Text>
                                <TextInput
                                    placeholder="Account Holder Name"
                                    className="border border-gray-300 rounded-3xl m-1 p-2 px-3 mb-2"
                                />
                            </View>
                        )}
                        {selectedPayment === 'Credit Card' && (
                            <View className="">
                                <Text className="font-medium text-[16px] ml-2 ">Card Number</Text>
                                <TextInput
                                    placeholder="Card Number"
                                    keyboardType="numeric"
                                    className="border border-gray-300 rounded-3xl m-1 p-2 px-3 mb-2"
                                />
                                <Text className="font-medium text-[16px] ml-2 ">Card Holder Name</Text>
                                <TextInput
                                    placeholder="Card Holder Name"
                                    className="border border-gray-300 rounded-3xl m-1 p-2 px-3 mb-2"
                                />
                                <View className="flex flex-row justify-between">
                                    <View className="w-1/2">
                                        <Text className="font-medium text-[16px] ml-2 ">Exp Date (MM/YY)</Text>
                                        <TextInput
                                            placeholder="Exp Date (MM/YY)"
                                            keyboardType="numeric"
                                            className="border border-gray-300 rounded-3xl m-1 p-2 px-3"
                                        />
                                    </View>
                                    <View className="w-1/2">
                                        <Text className="font-medium text-[16px] ml-2 ">CVV</Text>
                                        <TextInput
                                            placeholder="CVV"
                                            keyboardType="numeric"
                                            className="border border-gray-300 rounded-3xl m-1 p-2 px-3"
                                        />
                                    </View>
                                </View>
                            </View>
                        )}
                        {selectedPayment === 'Pay After Tour' && (
                            // Show a message for Pay After Tour option
                            <Text>Please pay after the tour.</Text>
                        )}
                    </View>

                </View>
                    <View className='Confirm '>
                       <Text className='my-3 p-3 text-white font-semibold border border-gray-300 rounded-3xl bg-yellow-400 text-center text-2xl '
                         onPress={handlePayment}>
                        Confirm
                       </Text>
                       </View>
            </ScrollView>

        </View>
    );
};

export default PaymentScreen;
