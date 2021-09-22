import React, { useState } from 'react';
import { ImageBackground, Image, Modal, TouchableOpacity, View, Text, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from "@expo/vector-icons";


//components
import Screen from '../components/Screen';
import InputField from '../components/common/InputField';
import BottomTab from '../components/common/BottomTab';
import MyAppButton from '../components/common/MyAppButton';
import ImageAddingComponent from '../components/common/ImageAddingComponent';
import LoadingModal from '../components/common/LoadingModel';
import PopUp from '../components/common/PopUp';

//config
import Colors from '../config/Colors';

const { height } = Dimensions.get("window");


function CreateStoreScreen(props) {

    const [pickerModel, setPickerModel] = useState(false);
    const [currentImageBox, setcurrentImageBox] = useState(null);

    const [shelfMainPhoto, setshelfMainPhoto] = useState(false)
    const [shelfPhotoGall1, setshelfPhotoGall1] = useState(false)
    const [shelfPhotoGall2, setshelfPhotoGall2] = useState(false)
    const [shelfPhotoGall3, setshelfPhotoGall3] = useState(false)

    const [bottomTab, setBottomTab] = useState(true);
    const [model, setModel] = useState(false);
    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Enter your business name",
            value: "",
        },
        {
            placeholder: "Enter your location (Google Address)",
            value: "",
        },
        {
            placeholder: "Select Store category",
            dropdownIcon: true,
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);
    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[2].value === "") {
            alert("Please fill all the feilds !");
            showIndicator(false);
            return true;
        }
        setModel(true);

        try {
            // API integration will come here

        } catch (error) {
            alert("Login Error");
        }

        showIndicator(false);
    };


    const uploadImages = async (imageSelecor) => {
        try {
            await ImagePicker.requestMediaLibraryPermissionsAsync();
            await ImagePicker.requestCameraPermissionsAsync()
            await ImagePicker.getCameraPermissionsAsync()
            let permissionResult = await ImagePicker.getMediaLibraryPermissionsAsync();

            if (permissionResult.granted === false) {
                alert("Permission to access camera roll is required!");
                return;
            }
            let pickerResult;
            if (imageSelecor === "camera") {
                pickerResult = await ImagePicker.launchCameraAsync();
            }
            else if (imageSelecor === "gallery") {
                pickerResult = await ImagePicker.launchImageLibraryAsync();
            }


            if (currentImageBox === 1) {
                setshelfMainPhoto(pickerResult)
                setPickerModel(false)
            }
            else if (currentImageBox === 2) {
                setshelfPhotoGall1(pickerResult)
                setPickerModel(false)
            }
            else if (currentImageBox === 3) {
                console.log("here")
                setshelfPhotoGall2(pickerResult)
                setPickerModel(false)
            }
            else if (currentImageBox === 4) {
                setshelfPhotoGall3(pickerResult)
                setPickerModel(false)
            }

        } catch (error) {

        }
    }


    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.white }}>
            <LoadingModal show={indicator} />
            {/* Top Image */}
            <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: RFPercentage(25) }} source={require('../../assets/images/buyer.png')}>
                <View style={{ backgroundColor: Colors.white, position: 'absolute', bottom: 0, width: '100%', height: RFPercentage(4), borderTopLeftRadius: RFPercentage(5), borderTopRightRadius: RFPercentage(5) }}>
                </View>
                {/* Icon */}
                <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={0.5} style={{ position: 'absolute', top: RFPercentage(8), left: RFPercentage(4) }}>
                    <Image source={require('../../assets/images/notiDash.png')} />
                </TouchableOpacity>
                {/*Image Heading */}
                <Text style={{ fontWeight: 'bold', color: Colors.white, bottom: RFPercentage(2.3), fontSize: RFPercentage(2.7) }}>
                    Add Store
                </Text>
            </ImageBackground>
            {/* Central heading */}
            <Text style={{ color: '#313942', fontSize: RFPercentage(2.3), marginTop: RFPercentage(1.5), fontFamily: 'Montserrat_500Medium' }}>
                STORE INFORMATION
            </Text>

            {/* ScrollView */}
            <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%' }} >

                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                >
                    {/* Input Fields */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(4) }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: RFPercentage(2) }} >
                                <InputField
                                    placeholder={item.placeholder}
                                    backgroundColor={Colors.background}
                                    borderColor={Colors.background}
                                    height={RFPercentage(7.3)}
                                    fontSize={RFPercentage(2)}
                                    onTouchStart={() => { i === 1 ? props.navigation.navigate("TypeLocationScreen") : setBottomTab(false) }}
                                    onTouchEnd={() => setBottomTab(true)}
                                    placeholderColor={'#82867D'}
                                    fontFamily={'Quicksand_400Regular'}
                                    dropdownIcon={item.dropdownIcon}
                                    borderRadius={RFPercentage(20)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    width={"90%"}
                                />
                            </View>
                        ))}
                    </View>
                </KeyboardAvoidingView>
                {/* Image Adding Component */}
                <ImageAddingComponent onUploadImage1={() => {
                    setcurrentImageBox(1)
                    setPickerModel(true)
                }} shelfMainPhoto={shelfMainPhoto} title1="Shelf Main Photo" title2="Upload the main photo for this listing" />

                <ImageAddingComponent
                    onUploadImage1={() => {
                        setcurrentImageBox(2)
                        setPickerModel(true)
                    }}
                    onUploadImage2={() => {
                        setcurrentImageBox(3)
                        setPickerModel(true)
                    }}
                    onUploadImage3={() => {
                        setcurrentImageBox(4)
                        setPickerModel(true)
                    }}
                    shelfMainPhoto={shelfPhotoGall1}
                    shelfPhotoGall2={shelfPhotoGall2}
                    shelfPhotoGall3={shelfPhotoGall3}
                    threeBoxes={true} title1="Shelf Photo Gallery" title2="Upload other photos for this listing" />

                {/* Create profile button */}
                <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(5), marginBottom: RFPercentage(25) }}>
                    <MyAppButton
                        title="Create Profile"
                        bold={false}
                        onPress={() => handleLogin()}
                        backgroundColor={"#FD6721"}
                        color={Colors.white}
                        width={"90%"}
                    />
                </View>
            </ScrollView>
            {bottomTab ?
                <View style={{ position: 'absolute', width: '100%', bottom: 0 }}>
                    {/* Bottom Tab */}
                    <BottomTab onPressNotification={() => props.navigation.navigate("NotificationScreen")} />
                </View> :
                null
            }
            {/* Modal for adding photo */}
            <Modal visible={pickerModel} transparent={true} >
                <View style={{ justifyContent: "flex-end", flex: 1, height: height, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)" }} >
                    <View style={{ alignItems: "center", borderTopLeftRadius: RFPercentage(3), borderTopRightRadius: RFPercentage(3), backgroundColor: Colors.white, width: "100%", height: RFPercentage(25) }} >
                        <View style={{ width: "90%", marginTop: RFPercentage(1.5) }} >
                            <TouchableOpacity onPress={() => setPickerModel(false)} >
                                <Entypo size={RFPercentage(3)} name="cross" color={Colors.grey} />
                            </TouchableOpacity>
                            <Text style={{ marginTop: RFPercentage(1), marginLeft: RFPercentage(1), fontSize: RFPercentage(2), fontWeight: "bold" }} >Select Photo</Text>

                            <TouchableOpacity onPress={() => uploadImages("camera")} style={{ backgroundColor: "#F7F7F7", marginTop: RFPercentage(1), borderRadius: RFPercentage(1), justifyContent: "center", width: "96%", marginLeft: "2%", height: RFPercentage(5.5), borderWidth: 1, borderColor: "#3A3384" }} >
                                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2.2) }} >Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => uploadImages("gallery")} style={{ backgroundColor: "#F7F7F7", marginTop: RFPercentage(1), borderRadius: RFPercentage(1), justifyContent: "center", width: "96%", marginLeft: "2%", height: RFPercentage(5.5), borderWidth: 0, borderColor: "#3A3384" }} >
                                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2.2) }} >Photo Gallery</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* PopUp */}
            <PopUp title="Your paymet has been confirmed. You can check the details for departure. " buttonTitle="Continue" showModel={model} onPress={() => { props.navigation.navigate("MyStoresScreen"), setModel(false) }} />
        </Screen>
    );
}

export default CreateStoreScreen;