import React, { useState } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View, ScrollView, ImageBackground, Platform, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, Foundation, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";

// components
import InputField from '../components/common/InputField';
import Screen from './../components/Screen';

// config
import Colors from '../config/Colors';

// Images
import pop2 from "../../assets/images/pop2.png"

function ChooseStore(props) {

    const [searchValue, setSearchValue] = useState('')
    const [recommended, setRecommended] = useState([
        {
            id: 0,
            title: 'Ebeano Supermarket',
            category: 'Food | Home | Health | Beauty',
            rating: 5,
            distance: "1.7km",
            image: pop2,
        },

        {
            id: 1,
            title: 'Fresh Forte',
            category: 'Groceries  | Health | Beauty',
            rating: 5,
            distance: "1.7km",
            image: pop2,
        },
        {
            id: 2,
            title: 'Adiba Supermarket',
            category: ' Home | Health | Beauty',
            rating: 5,
            distance: "1.7km",
            image: pop2,
        },
        {
            id: 3,
            title: 'Ebeano Supermarket',
            category: 'Food | Home | Health | Beauty',
            rating: 5,
            distance: "1.7km",
            image: pop2,
        },
        {
            id: 4,
            title: 'Fresh Forte',
            category: 'Groceries  | Health | Beauty',
            rating: 5,
            distance: "1.7km",
            image: pop2,
        },
        {
            id: 5,
            title: 'Adiba Supermarket',
            category: ' Home | Health | Beauty',
            rating: 5,
            distance: "1.7km",
            image: pop2,
        }
    ])

    return (
        <Screen barStyle="dark-content" style={styles.container}>
            <ScrollView style={{ width: "100%" }} >
                <View style={{ marginTop: RFPercentage(1.7), marginLeft: "2%", width: "95%", justifyContent: "flex-start", alignItems: "center", flex: 1 }} >

                    <View style={{ marginTop: RFPercentage(1), flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                        <TouchableOpacity style={{ marginRight: RFPercentage(1) }} onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.5} >
                            <MaterialCommunityIcons name="arrow-left" size={RFPercentage(3)} color={Colors.grey} />
                        </TouchableOpacity>
                        <InputField
                            secure={false}
                            placeholder={'Search for spot…'}
                            placeholderColor={Colors.grey}
                            onTouchStart={() => console.log("start")}
                            width={"65%"}
                            autoFocus={true}
                            value={searchValue}
                            handleFeild={(text) => setSearchValue(text)}
                            backgroundColor={Colors.grey1}
                            handleClear={true}
                            fontSize={RFPercentage(2.2)}
                            searchMarginLeft={RFPercentage(1)}
                            leftIconName={'search'}
                            borderWidth={0}
                        />
                        <TouchableOpacity onPress={() => console.log("Recording mic")} style={{ marginLeft: RFPercentage(1), justifyContent: "center", alignItems: "center", borderRadius: RFPercentage(1), height: RFPercentage(6.5), backgroundColor: Colors.grey1, height: RFPercentage(6.5), width: RFPercentage(6.5), marginRight: RFPercentage(1) }} activeOpacity={0.5} >
                            <MaterialCommunityIcons name="microphone" size={RFPercentage(3)} color={Colors.grey} />
                        </TouchableOpacity>
                    </View>


                    {/* 12 Retail Outlets Found */}
                    <View style={{ marginTop: RFPercentage(2), width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flex: 1 }} >
                        <Text style={{ color: Colors.grey, fontSize: RFPercentage(2.3) }} >
                            12 Retail Outlets Found
                        </Text>
                    </View>

                    <ScrollView showsHorizontalScrollIndicator={false} style={{ marginTop: RFPercentage(1.5) }}>
                        {recommended.map((item, index) => (
                            <View key={index} style={{
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
                                <Image source={item.image} style={{ borderRadius: 14, width: RFPercentage(13), height: RFPercentage(10) }} />
                                <View style={{ marginLeft: RFPercentage(2), width: "70%", height: "100%", justifyContent: "space-between" }} >
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2.2) }} >{item.title}</Text>
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2), color: "#AAAAAA" }} >{item.category}</Text>
                                    <View style={{ flexDirection: "row" }} >
                                        <View style={{ flexDirection: "row" }} >
                                            <Text style={{ color: Colors.primary }} >{item.rating}</Text>
                                            <MaterialCommunityIcons name="star" size={RFPercentage(2)} color={Colors.primary} />
                                        </View>
                                        <Text style={{ color: Colors.black, marginLeft: RFPercentage(2) }} >{item.distance}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>


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

export default ChooseStore;