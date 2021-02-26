import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },
    image: {
        height: height / 4,
        marginLeft: 45,
        aspectRatio: 1,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },

})
export default styles;