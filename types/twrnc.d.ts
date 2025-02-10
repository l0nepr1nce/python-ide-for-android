// types/twrnc.d.ts
declare module 'twrnc' {
    const tw: (classNames: TemplateStringsArray | string) => import('react-native').ViewStyle;
    export default tw;
}