import * as React from "react";
import { DimensionValue, SafeAreaView as RNView } from "react-native";
import { Text } from './Text'
import { StyleSheet, type UnistylesVariants } from "react-native-unistyles";
type ProgressBarProps = React.ComponentPropsWithoutRef<typeof RNView> &
{ value: number, text?: string, children: React.ReactNode } &
    UnistylesVariants<typeof styles>;

const ProgressBar = React.forwardRef<React.ElementRef<typeof RNView>, ProgressBarProps>(
    ({ value, center, text, children, ...props }, ref) => {
        styles.useVariants({});
        return (
            <RNView ref={ref} style={[styles.outer]}  {...props}>
                {children}
                <RNView style={[{ width: `${value}%` }, styles.inner]} />
            </RNView>
        );
    }
);

ProgressBar.displayName = "View";

const styles = StyleSheet.create((th, rt) => ({
    outer: {
        height: 30,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: th.colors.foreground,
        variants: {
            center: {
                true: { alignItems: "center" },
            }
        }
    },
    inner: {
        backgroundColor: th.colors.primary,
    }
    //   view: {
    //     backgroundColor: th.colors.background,
    //     variants: {
    //       flex: {
    //         row: { display: "flex", flexDirection: "row" },
    //         col: { display: "flex", flexDirection: "column" },
    //       },
    //       center: {
    //         true: { alignItems: "center" },
    //       },
    //       mxAuto: {
    //         true: { marginHorizontal: "auto" },
    //       },
    //       spaceAround: {
    //         true: { justifyContent: "space-around" },
    //       },
    //       container: {
    //         true: {
    //           height: rt.screen.height,
    //           width: rt.screen.width,
    //           paddingTop: rt.insets.top,
    //           paddingBottom: rt.insets.bottom,
    //           paddingLeft: rt.insets.left,
    //           paddingRight: rt.insets.right,
    //         }
    //       },
    //       subcontainer: {
    //         true: {
    //           backgroundColor: th.colors.foreground,
    //           width: '90%',
    //           paddingTop: rt.insets.top,
    //           paddingBottom: rt.insets.bottom,
    //           paddingLeft: rt.insets.left,
    //           paddingRight: rt.insets.right,
    //         }
    //       },
    //       variant: {
    //         primary: {
    //           backgroundColor: th.colors.primary,
    //         },
    //         secondary: {
    //           backgroundColor: th.colors.secondary,
    //         },
    //         card: {
    //           backgroundColor: th.colors.foreground,
    //           borderRadius: '8px',
    //           padding: th.gap(4),
    //           shadowColor: th.colors.background,
    //           shadowOffset: { width: 0, height: 2 },
    //           shadowOpacity: 0.25,
    //           shadowRadius: 3.84,
    //           elevation: 5,
    //         }
    //       },
    //     },
    //   },
}));

export { ProgressBar };
export type { ProgressBarProps };