import React, { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles'
const image = require('../../../assets/images/Saly-16.png')



const ProfileScreen = () => {
    const [user, setUser] = useState({
        id: '1',
        name: 'Siddharth',
        email: 'sidmehta0201@gmail.com',
        image: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
        netWorth: 12312

    })

    const signOut = () => {
        console.warn("Thankyou");
    }
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image} />
            <View style={styles.userContainer}>
                <View style={styles.left}>
                    <Image style={styles.userImage} source={{ uri: user.image }} />
                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>

                    </View>
                </View>

                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.value}>${user.netWorth}</Text>
                </View>
            </View>
            <Pressable onPress={signOut} style={{ marginTop: 'auto', backgroundColor: 'blue', padding: 20, borderRadius: 10, elevation: 10 }}>
                <Text style={{ color: '#fff' }}>Sign out</Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen;
