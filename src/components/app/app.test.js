import { render, screen } from "@testing-library/react";
import App from "./app";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";

describe("Component App", () => {
  test("Main div exist on page", () => {
    render(renderWithRedux(<App />, {}));
    const main_div = screen.queryByTestId("main-div-app");
    expect(main_div).toBeDefined();
  });
});
