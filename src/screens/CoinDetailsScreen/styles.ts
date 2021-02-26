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

    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: 'center',
        width: width - 20
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 20,
        borderRadius: 25,
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
    row: {
        flexDirection: 'row',
        width: width - 20,
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    label: {
        color: '#545454',
        marginBottom: 5,
    },
    value: {
        fontSize: 24,
    },
    valueContainer: {
        alignItems: 'center',
        marginHorizontal: 5
    },
    button: {
        flex: 1,
        margin: 10,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        color: '#fff',
        fontSize: 15
    }

})
export default styles;