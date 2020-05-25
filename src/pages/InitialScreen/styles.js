import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        color: "#000",
        paddingTop: Constants.statusBarHeight = 20,
        padding: 20,
    },

    pokedex: {
        alignSelf: 'stretch',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: "center"
    },

    avatar: {
        width: 84,
        height: 84,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#737373',
        margin: 10,
    },

    navigateButtons: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    
    prevButton: {
        width: 100,
        backgroundColor: "#666666",
        borderRadius: 5,
    },

    nextButton: {
        width: 100,
        backgroundColor: "#000",
        borderRadius: 5,
    },

    detailsButton: {
        backgroundColor: "red",
        width: 100,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        textAlign: "center"
    },

    inputSearch: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    searchArea: {
        borderWidth: 1,
        borderColor: "#000",
        height: 40,
        padding: 5,
        
    }
});