import { Text } from "@/components/ui/Text";
import * as React from "react";
import { View } from "react-native";
import { Pressable } from "react-native";
import { StyleSheet, type UnistylesVariants } from "react-native-unistyles";

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  UnistylesVariants<typeof styles>;

type ButtonViewProps = UnistylesVariants<typeof styles> & {
  children: React.ReactNode;
};

const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(({ children, variant, size, ...props }, ref) => {
  return (
    // biome-ignore lint/a11y/useSemanticElements: <explanation>
    <Pressable ref={ref} role="button" {...props}>
      {({ pressed, hovered }) => {
        return typeof children === "function" ? (
          children({ pressed, hovered })
        ) : (
          <ButtonView
            variant={variant}
            size={size}
            pressed={pressed}
            hovered={hovered}
          >
            {children}
          </ButtonView>
        );
      }}
    </Pressable>
  );
});
Button.displayName = "Button";

const ButtonView = ({
  children,
  variant,
  size,
  pressed,
  hovered,
}: ButtonViewProps) => {
  styles.useVariants({
    variant,
    size,
    pressed,
    hovered,
  });
  return (
    <View style={styles.buttonView}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create((th, rt) => ({
  buttonView: {
    borderRadius: th.borderRadius(2),
    backgroundColor: th.colors.button,
    variants: {
      variant: {
        ghost: {
          backgroundColor: "transparent",
          borderWidth: 2,
          borderColor: th.colors.button,
        },
        fab: {
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: th.colors.primary,
          borderRadius: th.borderRadius(20),
          right: rt.insets.right + th.gap(6),
          bottom: rt.insets.bottom + th.gap(2),
          width: th.gap(15),
          height: th.gap(15),
        },
      },
      size: {
        sm: {
          paddingHorizontal: th.gap(3),
          paddingVertical: th.gap(2),
        },
        md: {
          paddingHorizontal: th.gap(4),
          paddingVertical: th.gap(3),
        },
        default: {
          paddingHorizontal: th.gap(4),
          paddingVertical: th.gap(3),
        },
      },
      pressed: {
        true: {
          backgroundColor: th.colors.button,
        },
      },
      hovered: {
        true: {
          backgroundColor: th.colors.button,
        },
      },
    },
    compoundVariants: [
      {
        variant: "ghost",
        pressed: true,
        styles: {
          borderWidth: 2,
          borderColor: th.colors.button,
          backgroundColor: th.colors.button,
        },
      },
      {
        variant: "ghost",
        hovered: true,
        styles: {
          borderWidth: 2,
          borderColor: th.colors.button,
        },
      },
    ],
  },
  text: {
    textAlign: "center",
    fontFamily: th.fontFamily.BodyBold,
    fontSize: th.fontSize(1),
    lineHeight: th.fontSize(1) * 1.5,
    color: th.colors.background,
    variants: {
      variant: {
        ghost: {
          color: th.colors.foreground,
        },
        fab: {
          color: th.colors.background,
          fontSize: th.fontSize(1),
          fontWeight: "bold",
        }
      },
      size: {
        sm: {
          fontSize: th.fontSize(1),
        },
        md: {
          fontSize: th.fontSize(1.5),
        },
      },
      pressed: {},
      hovered: {},
    },
    compoundVariants: [
      {
        variant: "ghost",
        pressed: true,
        styles: {
          color: th.colors.background,
        },
      },
    ],
  },
}));

export { Button };

export type { ButtonProps };