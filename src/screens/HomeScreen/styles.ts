import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: 'white'
    },
    image: {
        height: height / 3,
        aspectRatio: 1,
        // height: 300,
        // width: 300
    },
    header1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15
    },
    header2: {
        fontSize: 20,
        textAlign: 'center',
        color: '#707070'
    }
})

export default styles;