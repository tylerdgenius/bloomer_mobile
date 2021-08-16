import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wallet from '../WalletViews/WalletHome';
import FundMyWallet from '../WalletViews/FundMyWallet';
import WalletTransactionHistory from '../WalletViews/WalletTransactionHistory';

const Stack = createNativeStackNavigator()

const WalletParentStackNav = props => {
    return(
        <Stack.Navigator initialRouteName="WalletHomePage">
            <Stack.Screen name="WalletHomePage" component={Wallet} />
            <Stack.Screen name="FundWallet" component={FundMyWallet} />
            <Stack.Screen name="WalletTransactionHistory" component={WalletTransactionHistory} />
        </Stack.Navigator>
    )
}

export default WalletParentStackNav