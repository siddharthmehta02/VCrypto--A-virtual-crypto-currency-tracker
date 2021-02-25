import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    image: {
        height: height / 4,
        aspectRatio: 1,
        // height: 300,
        // width: 300
    },
    balanceContainer: {
        width: width,
        marginVertical: 20,
        paddingHorizontal: 20,

    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#777777'
    },
    balance: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000'

    }
})
export default styles;