import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { format, addDays, addWeeks, isSameDay, setHours, setMinutes } from 'date-fns';

interface DateTimePickerProps {
  onSelect: (date: Date) => void;
  bookedDates?: Date[];
  availableDates?: Date[];
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  onSelect,
  bookedDates = [],
  availableDates = [],
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(addDays(new Date(), 1));
  const [selectedTime, setSelectedTime] = useState<string>('11:00');
  const [showTimePicker, setShowTimePicker] = useState(false);
  
  // Initialize with tomorrow at 11 AM
  useEffect(() => {
    const tomorrow = addDays(new Date(), 1);
    const defaultTime = setHours(setMinutes(tomorrow, 0), 11);
    setSelectedDate(defaultTime);
    onSelect(defaultTime);
  }, []);

  // Generate dates for next 3 weeks
  const dates = Array.from({ length: 21 }, (_, i) => addDays(new Date(), i));
  const weeks = Array.from({ length: 3 }, (_, i) => addWeeks(new Date(), i));

  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return [`${hour}:00`, `${hour}:30`];
  }).flat();

  const isDateBooked = (date: Date) => 
    bookedDates.some(bookedDate => isSameDay(date, bookedDate));

  const isDateAvailable = (date: Date) => 
    availableDates.some(availableDate => isSameDay(date, availableDate));

  const getDateColor = (date: Date) => {
    if (isDateBooked(date)) return 'bg-green-500';
    if (isDateAvailable(date)) return 'bg-yellow-500';
    return 'bg-gray-100';
  };

  const handleDateSelect = (date: Date) => {
    const [hours, minutes] = selectedTime.split(':').map(Number);
    const newDate = setHours(setMinutes(date, minutes), hours);
    setSelectedDate(newDate);
    onSelect(newDate);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    const [hours, minutes] = time.split(':').map(Number);
    const newDate = setHours(setMinutes(selectedDate, minutes), hours);
    setSelectedDate(newDate);
    onSelect(newDate);
    setShowTimePicker(false);
  };

  return (
    <View className="bg-white rounded-lg w-[300px]  shadow-lg  p-2">
      {/* Selected DateTime Display */}
        <TouchableOpacity onPress={() => setShowTimePicker(true)}>
          <Text className="text-blue-500">Change Time</Text>
        </TouchableOpacity>
      <View className="flex-row items-center justify-between mb-4 border rounded-lg p-3">
        <Text className="text-lg">
          {format(selectedDate, 'MMM dd, yyyy')} at {format(selectedDate, 'hh:mm a')}
        </Text>
      </View>

      {/* Calendar View */}
      <View className="mb-4   ">
        {weeks.map((weekStart, weekIndex) => (
          <View key={weekIndex} className="flex-row justify-between gap-1 mb-1">
            {Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)).map((date, dateIndex) => (
              <TouchableOpacity
                key={dateIndex}
                onPress={() => handleDateSelect(date)}
                className={`p-2 rounded-full  w-10 h-10 items-center justify-center ${
                  getDateColor(date)
                } ${isSameDay(date, selectedDate) ? 'border-2 border-blue-500' : ''}`}
              >
                <Text className={`text-sm ${
                  isSameDay(date, selectedDate) ? 'font-bold' : ''
                }`}>
                  {format(date, 'd')}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Time Picker Modal */}
      <Modal
        visible={showTimePicker}
        transparent
        animationType="slide"
        onRequestClose={() => setShowTimePicker(false)}
      >
        <View className="flex-1 justify-end">
          <View className="bg-white rounded-t-3xl shadow-lg">
            <View className="p-4 border-b">
              <Text className="text-lg font-bold text-center">Select Time</Text>
            </View>
            <ScrollView className="max-h-96 p-4">
              {timeSlots.map((time) => (
                <TouchableOpacity
                  key={time}
                  onPress={() => handleTimeSelect(time)}
                  className={`p-4 border-b ${
                    selectedTime === time ? 'bg-blue-50' : ''
                  }`}
                >
                  <Text className={`text-center ${
                    selectedTime === time ? 'font-bold text-blue-500' : ''
                  }`}>
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

