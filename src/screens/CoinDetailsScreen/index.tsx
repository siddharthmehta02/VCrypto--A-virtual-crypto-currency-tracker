import React, { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles'
const image = require('../../../assets/images/Saly-16.png')
import { AntDesign } from '@expo/vector-icons'
import Percentchange from '../../components/PercentChange'



const CoinDetailsScreen = () => {
    const [coinData, setCoinData] = useState({
        id: '1',
        image: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
        name: 'Bitcoin',
        symbol: 'BTC',
        valueChange24H: -1.12,
        valueChange1D: 1.12,
        valueChange7D: -1.12,
        currentPrice: 59420,
        amount: 2,

    })
    const onBuy = () => {

    }
    const onSell = () => {

    }
    return (
        <View style={styles.root}>
            <View style={styles.topContainer}>
                <View style={styles.left}>
                    <Image style={styles.image} source={{ uri: coinData.image }} />
                    <View>
                        <Text style={styles.name}>{coinData.name}</Text>
                        <Text style={styles.symbol}>{coinData.symbol}</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'flex-end' }}>
                    <AntDesign name={'staro'} size={30} color={'#2f95dc'} />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.valueContainer}>
                    <Text style={styles.label}>Current price</Text>
                    <Text style={styles.value}>{coinData.currentPrice}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>1 hour</Text>
                        <Percentchange value={coinData.valueChange24H} />
                    </View>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>7 days</Text>
                        <Percentchange value={coinData.valueChange1D} />
                    </View>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>7 days</Text>
                        <Percentchange value={coinData.valueChange7D} />
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <Text>Position</Text>
                <Text>{coinData.symbol} {coinData.amount}  (${coinData.currentPrice * coinData.amount}) </Text>
            </View>

            <View style={[styles.row, { marginTop: 'auto' }]}>
                <Pressable style={[styles.button, { backgroundColor: '#20b100' }]} onPress={onBuy}>
                    <Text style={styles.buttonText}>Buy</Text>
                </Pressable>
                <Pressable style={[styles.button, { backgroundColor: '#ff0000' }]} onPress={onSell}>
                    <Text style={styles.buttonText}>Sell</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default CoinDetailsScreen;
