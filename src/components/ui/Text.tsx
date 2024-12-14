import * as React from "react";
import { Text as RNText } from "react-native";
import { StyleSheet, type UnistylesVariants } from "react-native-unistyles";

type TextProps = React.ComponentPropsWithoutRef<typeof RNText> &
  UnistylesVariants<typeof styles>;

const Text = React.forwardRef<React.ElementRef<typeof RNText>, TextProps>(
  ({ className, style, variant, overlay, center, color, muted, ...props }, forwardedRef) => {
    styles.useVariants({
      variant,
      overlay,
      color,
      muted,
      center,
    });

    return (
      <RNText
        ref={(ref) => {
          if (typeof forwardedRef === "function") {
            forwardedRef(ref);
          } else if (forwardedRef) {
            // @ts-ignore - this is necessary for Expo Web compatibility
            forwardedRef.current = ref;
          }
        }}
        style={[styles.container, style]}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";


const styles = StyleSheet.create((th, rt) => {
  const textColors = Object.entries(th.colors.text).reduce((acc, [name, value]) => {
    acc[name] = { color: value };
    return acc;
  }, {} as { [key: string]: { color: string } });
  return {
    container: {
      fontFamily: th.fontFamily.BodySemiBold,
      fontSize: th.fontSize(1),
      lineHeight: th.fontSize(1) * 1.4,
      color: th.colors.foreground,
      variants: {
        overlay: {
          true: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 5,
            margin: 'auto',
            textAlign: 'center',
          },
        },
        variant: {
          h1: {
            fontFamily: th.fontFamily.HeadingBlack,
            fontSize: th.fontSize(1.6),
            lineHeight: th.fontSize(1.6) * 1.5,
            letterSpacing: -0.2,
          },
          h2: {
            fontFamily: th.fontFamily.HeadingBold,
            fontSize: th.fontSize(1.25),
            lineHeight: th.fontSize(1.25) * 1.5,
            letterSpacing: -0.2,
          },
          h3: {
            fontFamily: th.fontFamily.HeadingBold,
            fontSize: th.fontSize(1.125),
            lineHeight: th.fontSize(1.125) * 1.5,
            letterSpacing: -0.2,
          },
          caption: {
            fontFamily: th.fontFamily.BodySemiBold,
            fontSize: th.fontSize(0.875),
          },
          p: {
            paddingHorizontal: th.gap(2),
            paddingVertical: th.gap(1),
          }
        },
        center: {
          true: {
            textAlign: "center",
          }
        },
        color: {
          ...textColors
        },
        muted: {
          true: {
            color: th.colors.foreground,
          },
        },
      },
      compoundVariants: [
        {
          color: "primary",
          muted: true,
          styles: {
            color: th.colors.primary,
          },
        },
        {
          color: "secondary",
          muted: true,
          styles: {
            color: th.colors.foreground,
          },
        },
      ],
    },
  };
});

export { Text };

export type { TextProps };