import React from "react";

const { Provider: FakeApiProvider, Consumer: FakeApiConsumer } =
  React.createContext(undefined);

export { FakeApiProvider, FakeApiConsumer };
