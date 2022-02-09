import { render, screen } from "@testing-library/react";
import App from "./App";

test("antd select renders", () => {
  render(<App />);
  const linkElement = screen.getByTestId("people-select");
  expect(linkElement).toBeInTheDocument();
});
