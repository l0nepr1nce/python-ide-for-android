import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native"
import { StyleProps } from "react-native-reanimated";

export type touchableButtonProps = TouchableOpacityProps & {
    title: string,
    style?: StyleProps
}

export default function TouchableButton({ title, style }: touchableButtonProps) {
    return(
        <TouchableOpacity style={StyleSheet.compose(styles.box, style)}><Text style={styles.text}>{title}</Text></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#068FFF',
        borderRadius: 40,
        paddingHorizontal: 50,
        paddingVertical: 15,
    },
    text: {
        fontFamily: 'AlbertSans',
        fontSize: 15,
        color: '#fff',
    }
});