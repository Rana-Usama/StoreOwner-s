import React from 'react';
import { ScrollView, View } from 'react-native'

//components
import Screen from './../components/Screen';
import MiniCard from './../components/common/MiniCard';
import TwoButtonsContainer from '../components/common/TwoButtonsContainer';
import NavTitlesAndIcon from './../components/common/NavTitlesAndIcon';
import BottomTab from './../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function MyShelvesBookedScreen(props) {

    const data = [
        {
            mainTitle: 'Prime shelf',
            subTitle: 'Prime spot for your products'
        }

    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>
            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                {/* Nav Icon and titles */}
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <NavTitlesAndIcon onPress={() => props.navigation.navigate("MyShelvesScreen")} mainTitle="My Spots" sideTitle="BOOK" />
                </View>
                {/*Top Buttons */}
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <TwoButtonsContainer buttonTitle1="Ongoing" buttonTitle2="Booking History" />
                </View>
                {/* Listings */}
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {data.map((item, i) => (
                        <MiniCard number={false} key={i} title1={item.mainTitle} title2={item.subTitle} />
                    ))}
                </View>
            </ScrollView>
            {/* Bottom tab */}
            <BottomTab />
        </Screen>
    );
}

export default MyShelvesBookedScreen;