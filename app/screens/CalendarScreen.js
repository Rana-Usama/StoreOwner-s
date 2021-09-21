import React, { useState } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, Foundation, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";
import { CalendarList } from 'react-native-calendars';
import Constants from 'expo-constants';
import moment from 'moment';

// components
import Screen from './../components/Screen';

// config
import Colors from '../config/Colors';

// images
import pop3 from "../../assets/images/pop3.png"

const { height } = Dimensions.get('window')

function CalendarScreen(props) {

    const [selectedDay, setSelectedDay] = useState({
        [`${moment().format('YYYY')}-${moment().format('MM')}-${moment().format(
            'DD'
        )}`]: {
            selected: true,
            selectedColor: '#2E66E7',
        },
    })

    const [taskText, setTaskText] = useState('')
    const [notesText, setNotesText] = useState('')
    const [currentDay, setCurrentDay] = useState(moment().format())
    const [alarmTime, setAlarmTime] = useState(moment().format())
    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false)


    const handleDatePicked = date => {
        const selectedDatePicked = currentDay;
        const hour = moment(date).hour();
        const minute = moment(date).minute();
        const newModifiedDay = moment(selectedDatePicked).hour(hour).minute(minute);

        setAlarmTime(newModifiedDay)
        setIsDateTimePickerVisible(false);
    };

    // "react-native-calendar-events": "^2.2.0",
    // "react-native-modal-datetime-picker": "^10.0.0"

    const addEventsToCalendar = async calendarId => {
        try {
            await CreateNewEvent(taskText, notesText, alarmTime)
        } catch (error) {
            console.log("Create Event Error: ", error);
        }
    };

    return (
        <Screen barStyle="dark-content" style={styles.container}>
            <ScrollView style={{ width: "100%" }} >
                <View style={{ marginTop: RFPercentage(1.7), marginLeft: "2%", width: "95%", justifyContent: "space-between", alignItems: "center", flex: 1 }} >
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }} >
                        <TouchableOpacity style={{ width: "33%" }} onPress={() => props.navigation.navigate('CartDetails2')} activeOpacity={0.5} >
                            <MaterialCommunityIcons name="arrow-left" size={RFPercentage(3)} color={Colors.black} />
                        </TouchableOpacity>

                        <Text style={{ width: "60%", fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.8) }} >Select  date</Text>
                    </View>

                    <ScrollView style={{ width: "100%", backgroundColor: "rgba(244, 244, 244, 0.3)", marginTop: RFPercentage(1.5) }}  >
                        <View style={{
                            width: "90%",
                            height: RFPercentage(12),
                            borderRadius: 14,
                            backgroundColor: Colors.white,
                            margin: RFPercentage(1),
                            padding: RFPercentage(2),
                            alignItems: "center",
                            justifyContent: "flex-start",
                            flexDirection: "row"
                        }} >
                            <Image source={pop3} style={{ borderRadius: 14, width: RFPercentage(13), height: RFPercentage(10) }} />
                            <View style={{ marginLeft: RFPercentage(2), width: "70%", height: "100%", justifyContent: "space-between" }} >
                                <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2.2) }} >Primo Spot</Text>
                                <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2), color: "#AAAAAA" }} >Grocery | Canned Food</Text>
                                <View style={{ flexDirection: "row", width: "80%" }} >
                                    <Text style={{ color: Colors.primary }} >₦50,000 </Text>
                                    <Text style={{ color: "#AAAAAA" }} > / month</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>



                <View style={{
                    marginTop: RFPercentage(1),
                    width: 350,
                    height: 350,
                    alignSelf: 'center',
                    backgroundColor: "white"
                }}>
                    <CalendarList style={{ width: 350, height: 350, backgroundColor: "white" }}
                        current={currentDay}
                        // minDate={moment().format()}
                        horizontal
                        pastScrollRange={0}
                        pagingEnabled
                        calendarWidth={350}
                        onDayPress={day => {
                            setSelectedDay({
                                [day.dateString]: {
                                    selected: true,
                                    selectedColor: '#2E66E7',
                                },
                            })
                            setCurrentDay(day.dateString)
                            setAlarmTime(day.dateString)
                        }}
                        monthFormat="yyyy MMMM"
                        hideArrows
                        // markingType="period"
                        theme={{
                            selectedDayBackgroundColor: '#40aa95',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#2E66E7',
                            backgroundColor: 'white',
                            calendarBackground: "white",
                            textDisabledColor: '#d9dbe0',
                        }}
                        markedDates={selectedDay}
                    />
                </View>

                <View style={{ marginTop: RFPercentage(5), justifyContent: "center", alignItems: "center", flexDirection: "row", width: "95%", marginLeft: "2.5%", height: RFPercentage(8), borderRadius: RFPercentage(10), backgroundColor: Colors.primary }} >
                    <TouchableOpacity>
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.8) }} >CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </Screen >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: "center"
    }
})

export default CalendarScreen;