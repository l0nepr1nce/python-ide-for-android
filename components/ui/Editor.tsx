import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useKeyboard } from '@react-native-community/hooks';
import CodeEditor from '@/components/editor/CodeEditor';

export default function Editor() {
    const keyboard = useKeyboard();
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView>
            <CodeEditor />
        </SafeAreaView>
    );
};