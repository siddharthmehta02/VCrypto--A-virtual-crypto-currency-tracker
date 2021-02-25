import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 20
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    symbol: {
        color: '#6b6b6b'
    },
    value: {
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 18
    },
})
export default styles;