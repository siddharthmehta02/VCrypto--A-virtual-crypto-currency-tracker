import React from 'react'
import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import UserRankingItem from '../../components/UserRankingItem'
import styles from './styles'
const image = require('../../../assets/images/Saly-20.png')

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const portfolioCoins = [{
    id: '1',
    image: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    name: 'Virtual Dollars',
    netWorth: 69420
},
{
    id: '2',
    name: 'Bitcoin',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
    netWorth: 59420
},
{
    id: '3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
    name: 'Etherium',
    netWorth: 30120
},
]

const RankingScreen = () => {
    return (
        <View style={styles.root}>


            <FlatList
                style={{ width: width }}
                data={portfolioCoins}
                renderItem={({ item, index }) => <UserRankingItem user={item} place={index + 1} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{ alignItems: 'center' }}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image} />

                        <Text style={styles.label}>Rankings</Text>


                    </>
                )}
            />

        </View>
    )
}


export default RankingScreen;
