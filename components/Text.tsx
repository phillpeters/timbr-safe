import { Text as RNText, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  color?: string;
}

export function Text({ children, style, ...props }: CustomTextProps) {
  return (
    <RNText style={[{ color: "white" }, style]} {...props}>
      {children}
    </RNText>
  );
}
