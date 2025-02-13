import { ReactNode } from 'react';
import { StyleSheet, View, Text } from 'react-native';


interface ButtonProps {
    children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
    return(
        <View className="common-button" style={styles.button}>
            <Text style={styles.buttonText}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#068FFF',
        borderRadius: 40,
        paddingHorizontal: 50,
        paddingVertical: 15,
        marginTop: 'auto',
        marginBottom: 100,
    },
    buttonText: {
        fontFamily: 'AlbertSans',
        fontSize: 15,
        color: '#fff',
    }
});
