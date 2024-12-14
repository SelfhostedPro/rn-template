import { View } from "react-native";

type ViewProps = React.ComponentPropsWithoutRef<typeof View> & {
    height: number;
}

export const Spacer = ({ height, style, ...rest }: ViewProps) => {
    return <View style={[style, { height }]} {...rest} />;
};