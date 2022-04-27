import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import AppHeaderContainer from "./app-header-container";
import initialState from "../../store/initial-state";

describe("AppHeaderContainer:", () => {
  test("Header exist on page", () => {
    render(renderWithRedux(<AppHeaderContainer />, initialState));
    const more_container = screen.getByTestId("span-header-more");
    expect(more_container).toContainHTML("4");
  });
});
