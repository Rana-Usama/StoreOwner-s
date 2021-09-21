import React from 'react';
import { ScrollView, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import MiniCard from './../components/common/MiniCard';
import TwoButtonsContainer from './../components/common/TwoButtonsContainer';
import NavTitlesAndIcon from './../components/common/NavTitlesAndIcon';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';
import MyShelvesBookedScreen from './MyShelvesBookedScreen';
import ViewShelfEditScreen from './ViewShelfEditScreen';


function MyShelvesScreen(props) {

    const data = [
        {
            mainTitle: 'Prime shelf',
            subTitle: 'Prime spot for your products'
        },
        {
            mainTitle: 'Prime shelf',
            subTitle: 'Prime spot for your products'
        },
        {
            mainTitle: 'Prime shelf',
            subTitle: 'Prime spot for your products'
        },
        {
            mainTitle: 'Prime shelf',
            subTitle: 'Prime spot for your products'
        },
    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>
            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Nav Icon and titles */}
                    <NavTitlesAndIcon mainTitle="My Shelves" sideTitle="ADD" />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/*Top Buttons */}
                    <TwoButtonsContainer buttonTitle1="Available" buttonTitle2="Booked" onPressButton2={() => props.navigation.navigate("MyShelvesBookedScreen")} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Listings */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', top: RFPercentage(1), marginBottom: RFPercentage(35) }}>
                        {data.map((item, i) => (
                            <MiniCard onPressImage={() => props.navigation.navigate("ViewShelfEditScreen")} onPressTitle={() => props.navigation.navigate("ViewShelfEditScreen")} key={i} title1={item.mainTitle} title2={item.subTitle} />
                        ))}

                    </View>
                </View>
            </ScrollView>

            {/* Bottom tab */}
            <BottomTab />
        </Screen>
    );
}

export default MyShelvesScreen;