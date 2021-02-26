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
        marginLeft: 45,
        aspectRatio: 1,
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: 'center',
        width: width - 20,
    },
    userImage: {
        height: 80,
        width: 80,
        marginRight: 20,
        borderRadius: 50,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold',
    },
    email: {
        marginBottom: 5
    },
    value: {
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 18
    },

})
export default styles;