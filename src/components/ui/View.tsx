import * as React from "react";
import { SafeAreaView as RNView } from "react-native";
import { StyleSheet, type UnistylesVariants } from "react-native-unistyles";
type ViewProps = React.ComponentPropsWithoutRef<typeof RNView> &
  UnistylesVariants<typeof styles>;

const View = React.forwardRef<React.ElementRef<typeof RNView>, ViewProps>(
  ({ variant, flex, container, subcontainer, center, mxAuto, spaceAround, spaceCenter, spaceEvenly, style, ...props }, ref) => {
    styles.useVariants({ variant, flex, container, center, mxAuto, spaceAround, spaceCenter, spaceEvenly, subcontainer });
    return <RNView ref={ref} style={[styles.view, style]} {...props} />;
  }
);

View.displayName = "View";

const styles = StyleSheet.create((th, rt) => ({
  view: {
    backgroundColor: th.colors.background,
    variants: {
      flex: {
        row: { display: "flex", flexDirection: "row" },
        col: { display: "flex", flexDirection: "column" },
      },
      center: {
        true: { alignItems: "center" },
      },
      mxAuto: {
        true: { marginHorizontal: "auto" },
      },
      spaceAround: {
        true: { justifyContent: "space-around" },
      },
      spaceCenter: {
        true: { justifyContent: "center" },
      },
      spaceEvenly: {
        true: { justifyContent: "space-evenly" },
      },
      root: {
        true: {
          backgroundColor: th.colors.background,
          height: rt.screen.height,
          width: rt.screen.width,
        }
      },
      container: {
        true: {
          backgroundColor: th.colors.background,
          height: "100%",
          width: rt.screen.width,
          paddingTop: rt.insets.top,
          paddingBottom: rt.insets.bottom,
          paddingLeft: rt.insets.left,
          paddingRight: rt.insets.right,
        }
      },
      subcontainer: {
        true: {
          backgroundColor: th.colors.foreground,
          width: '90%',
          paddingTop: rt.insets.top,
          paddingBottom: rt.insets.bottom,
          paddingLeft: rt.insets.left,
          paddingRight: rt.insets.right,
        }
      },
      variant: {
        primary: {
          backgroundColor: th.colors.primary,
        },
        secondary: {
          backgroundColor: th.colors.secondary,
        },
        card: {
          backgroundColor: th.colors.foreground,
          borderRadius: '8px',
          padding: th.gap(4),
          shadowColor: th.colors.background,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }
      },
    },
  },
}));

export { View };
export type { ViewProps };