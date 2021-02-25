import React from 'react'
import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import MarketCoin from '../../components/MarketCoin'
import styles from './styles'
const image = require('../../../assets/images/Saly-17.png')

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const portfolioCoins = [{
    id: '1',
    image: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    name: 'Virtual Dollars',
    symbol: 'USD',
    valueChange24H: 69.420,
    valueUSD: 69420
},
{
    id: '2',
    name: 'Bitcoin',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
    symbol: 'BTC',
    valueChange24H: -1.12,
    valueUSD: 59420
},
{
    id: '3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
    name: 'Etherium',
    symbol: 'ETH',
    valueChange24H: 3.54,
    valueUSD: 30120
},
]

const MarketScreen = () => {
    return (
        <View style={styles.root}>


            <FlatList
                style={{ width: width }}
                data={portfolioCoins}
                renderItem={({ item }) => <MarketCoin marketCoin={item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{ alignItems: 'center' }}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image} />

                        <Text style={styles.label}>Market</Text>


                    </>
                )}
            />

        </View>
    )
}


export default MarketScreen;
