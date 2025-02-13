import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, StyleSheet } from "react-native";
import { faPython } from '@fortawesome/free-brands-svg-icons/faPython'
import tw from 'twrnc';

export default function ExploreMenuPlank() {
    return(
        <View className='pl-box-item' style={styles.box}>
            <View className='pl-box-item-wrap' style={tw`w-auto`}>
                <FontAwesomeIcon icon={faPython} size={48} color='#fff'/>
            </View>
            <View className='pl-box-item-wrap'>
                <Text style={styles.text}>Some Example Project</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        flexDirection: 'row',
        boxSizing: 'border-box',
        gap: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.4)',
        borderRadius: 15,
        padding: 10,
        marginBottom: 5,
    },
    text: {
        color: '#fff',
        fontFamily: 'AlbertSans',
        fontSize: 20,
        fontWeight: 500
    }
})