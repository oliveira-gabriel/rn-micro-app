import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { multiply, TextLabel } from "rn-micro-core";

export default function App() {
  const [result, setResult] = useState();

  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Universal React with Expo</Text>
      <Text>Result: {result}</Text>
      <TextLabel />
      {/* AQUI JUNTARIA TUDO  */}
    </View>
  );
}
