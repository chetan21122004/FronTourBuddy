import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

type FormData = {
  name: string;
  email: string;
  phone_no: string;
  price_per_hour: string;
  description: string;
  experience: string;
  filters: string[]; // Array for multi-select filters
};

const CreateGuideForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone_no: '',
    price_per_hour: '',
    description: '',
    experience: '',
    filters: [], // Start with no filters selected
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [coverImage, setCoverImage] = useState<string | null>(null);

  const availableFilters = [
    { id: 1, label: 'History' },
    { id: 2, label: 'Nature' },
    { id: 3, label: 'Adventure' },
    { id: 4, label: 'English' },
    { id: 5, label: 'Spanish' },
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFilterChange = (selectedFilter: string) => {
    setFormData((prev) => {
      const updatedFilters = prev.filters.includes(selectedFilter)
        ? prev.filters.filter((filter) => filter !== selectedFilter)
        : [...prev.filters, selectedFilter];
      return { ...prev, filters: updatedFilters };
    });
  };

  const pickImage = async (setImage: React.Dispatch<React.SetStateAction<string | null>>) => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled && result.assets) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick an image');
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone_no) {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
      return;
    }

    if (!profileImage || !coverImage) {
      Alert.alert('Validation Error', 'Please select both profile and cover images.');
      return;
    }

    const data = new FormData();
    data.append('json_data', JSON.stringify(formData));
    data.append('profile_image', {
      uri: profileImage,
      type: 'image/jpeg',
      name: 'profile.jpg',
    } as any);
    data.append('cover_image', {
      uri: coverImage,
      type: 'image/jpeg',
      name: 'cover.jpg',
    } as any);

    const API_URL = 'http://192.168.185.150:6543/guides/create';

    try {
      console.log('Submitting to:', API_URL);
      console.log('FormData:', data);

      const response = await axios.post(API_URL, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      });
      Alert.alert('Success', 'Guide created successfully!');
    } catch (error) {
      console.error('Error creating guide:', error);
      Alert.alert('Error', 'Failed to create guide. Please try again.');
    }
  };

  return (
    <ScrollView className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-4 text-gray-800">Create Guide</Text>

      <TextInput
        className="border border-gray-300 rounded px-3 py-2 mb-4"
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => handleInputChange('name', text)}
      />
      <TextInput
        className="border border-gray-300 rounded px-3 py-2 mb-4"
        placeholder="Email"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <TextInput
        className="border border-gray-300 rounded px-3 py-2 mb-4"
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={formData.phone_no}
        onChangeText={(text) => handleInputChange('phone_no', text)}
      />
      <TextInput
        className="border border-gray-300 rounded px-3 py-2 mb-4"
        placeholder="Price per Hour"
        keyboardType="numeric"
        value={formData.price_per_hour}
        onChangeText={(text) => handleInputChange('price_per_hour', text)}
      />
      <TextInput
        className="border border-gray-300 rounded px-3 py-2 mb-4"
        placeholder="Description"
        value={formData.description}
        onChangeText={(text) => handleInputChange('description', text)}
      />
      <TextInput
        className="border border-gray-300 rounded px-3 py-2 mb-4"
        placeholder="Experience (Years)"
        keyboardType="numeric"
        value={formData.experience}
        onChangeText={(text) => handleInputChange('experience', text)}
      />

      <Text className="font-bold text-gray-800 mb-2">Filters</Text>
      {availableFilters.map((filter) => (
        <TouchableOpacity
          key={filter.id}
          onPress={() => handleFilterChange(filter.label)}
          className={`p-2 border ${
            formData.filters.includes(filter.label) ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
          } rounded mb-2`}
        >
          <Text>{filter.label}</Text>
        </TouchableOpacity>
      ))}

      <View className="mb-4">
        <TouchableOpacity
          onPress={() => pickImage(setProfileImage)}
          className="bg-gray-200 rounded py-2 px-4 text-center"
        >
          <Text className="text-gray-800">Select Profile Image</Text>
        </TouchableOpacity>
        {profileImage && (
          <Image
            source={{ uri: profileImage }}
            className="w-24 h-24 rounded mt-4"
          />
        )}
      </View>

      <View className="mb-4">
        <TouchableOpacity
          onPress={() => pickImage(setCoverImage)}
          className="bg-gray-200 rounded py-2 px-4 text-center"
        >
          <Text className="text-gray-800">Select Cover Image</Text>
        </TouchableOpacity>
        {coverImage && (
          <Image
            source={{ uri: coverImage }}
            className="w-24 h-24 rounded mt-4"
          />
        )}
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-blue-500 rounded py-2 px-4"
      >
        <Text className="text-white text-center font-bold">Create Guide</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateGuideForm;
