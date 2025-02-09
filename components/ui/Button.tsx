import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

interface ButtonProps {
    children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
    return(
        <div className="common-button" style={styles.commonButton}>
            <p>{children}</p>
        </div>
    );
}

const styles = StyleSheet.create({
    commonButton: {
        backgroundColor: '#068FFF',
        borderRadius: 40,
        fontFamily: 'AlbertSans',
        color: '#fff',
        fontSize: 15,
        paddingInline: '5rem',
        paddingTop: '1.2rem',
        paddingBottom: '1.2rem',
        marginTop: 'auto'
    }
});