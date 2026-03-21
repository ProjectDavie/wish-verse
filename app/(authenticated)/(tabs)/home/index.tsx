import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f3e8ff" }}>
      {/* Top inset visualization */}
      {insets.top > 0 && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: insets.top,
            backgroundColor: "rgba(107,21,168,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Top inset: {insets.top.toFixed(0)} px
          </Text>
        </View>
      )}

      {/* Bottom inset visualization */}
      {insets.bottom > 0 && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: insets.bottom,
            backgroundColor: "rgba(107,21,168,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Bottom inset: {insets.bottom.toFixed(0)} px
          </Text>
        </View>
      )}

      {/* Left inset visualization */}
      {insets.left > 0 && (
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: insets.left,
            backgroundColor: "rgba(147,51,234,0.5)",
            justifyContent: "center",
            alignItems: "center",
            transform: [{ rotate: "-90deg" }],
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Left: {insets.left.toFixed(0)} px
          </Text>
        </View>
      )}

      {/* Right inset visualization */}
      {insets.right > 0 && (
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: insets.right,
            backgroundColor: "rgba(147,51,234,0.5)",
            justifyContent: "center",
            alignItems: "center",
            transform: [{ rotate: "90deg" }],
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Right: {insets.right.toFixed(0)} px
          </Text>
        </View>
      )}

      {/* Main content */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#6b21a8",
            textAlign: "center",
          }}
        >
          Safe Area Visualization
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#6b21a8",
            textAlign: "center",
            marginTop: 16,
            paddingHorizontal: 16,
          }}
        >
          The colored bars show where the safe area insets start. Purple at the
          top/bottom and lighter purple at the sides.
        </Text>
      </View>
    </SafeAreaView>
  );
}
