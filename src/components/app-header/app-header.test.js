import React from "react";
import { render, screen } from "@testing-library/react";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import AppHeader from "./app-header";

describe("Component Header", () => {
  test("Header exist on page", () => {
    render(renderWithRedux(<AppHeader more={1} done={2} />, {}));
    const main_div = screen.queryByTestId("main-div-header");
    expect(main_div).toBeDefined();
    const app_name = screen.queryByText(/Todo List/i);
    expect(app_name).toBeDefined();
  });
});
