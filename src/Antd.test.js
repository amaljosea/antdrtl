import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("antd select renders", () => {
  render(<App />);
  const linkElement = screen.getByTestId("people-select");
  expect(linkElement).toBeInTheDocument();
});

test("open", () => {
  render(<App />);

  // making sure the select is rendered
  let select = screen.getByTitle("Lucy");
  expect(select).toBeInTheDocument();

  // making sure the select is not opened
  let yimingheOption = screen.queryByTitle("Yiminghe");
  expect(yimingheOption).not.toBeInTheDocument();

  fireEvent.mouseDown(select);

  console.log = jest.fn();

  // making sure the select is opened after fireEvent.mouseDown(select);
  let yimingheOptionAfterOpening = screen.getByTitle("Yiminghe");
  expect(yimingheOptionAfterOpening).toBeInTheDocument();

  fireEvent.click(yimingheOptionAfterOpening);

  // making sure console.log is called
  expect(console.log.mock.calls[0][0]).toBe("selected Yiminghe!");
});
