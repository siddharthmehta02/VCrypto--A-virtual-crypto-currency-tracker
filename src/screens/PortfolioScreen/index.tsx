import React from 'react'
import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import PortfolioCoin from '../../components/PortfolioCoin'
import styles from './styles'
const image = require('../../../assets/images/Saly-10.png')

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const portfolioCoins = [{
    id: '1',
    image: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    name: 'Virtual Dollars',
    symbol: 'USD',
    amount: 69.420,
    valueUSD: 69420
},
{
    id: '2',
    name: 'Bitcoin',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
    symbol: 'BTC',
    amount: 1.12,
    valueUSD: 59420
},
{
    id: '3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
    name: 'Etherium',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30120
},
{
    id: '3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
    name: 'Etherium',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30120
}, {
    id: '3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
    name: 'Etherium',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30120
}, {
    id: '3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
    name: 'Etherium',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30120
}, {
    id: '3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
    name: 'Etherium',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30120
}, {
    id: '3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
    name: 'Etherium',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30120
}, {
    id: '3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
    name: 'Etherium',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30120
}, {
    id: '3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
    name: 'Etherium',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30120
}, {
    id: '3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
    name: 'Etherium',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30120
},
]

const PortfolioScreen = () => {
    return (
        <View style={styles.root}>


            <FlatList
                style={{ width: width }}
                data={portfolioCoins}
                renderItem={({ item }) => <PortfolioCoin portfolioCoin={item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{ alignItems: 'center' }}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image} />
                        <View style={styles.balanceContainer}>
                            <Text style={styles.label}>Portfolio balance</Text>
                            <Text style={styles.balance}>$69.420</Text>
                        </View>
                    </>
                )}
            />

        </View>
    )
}

export default PortfolioScreen;
