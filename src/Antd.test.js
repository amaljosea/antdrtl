import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("antd select renders", () => {
  render(<App />);
  const linkElement = screen.getByTestId("people-select");
  expect(linkElement).toBeInTheDocument();
});

test("open", () => {
  const { container } = render(<App />);
  let select = screen.getByTitle("Lucy");
  expect(select).toBeInTheDocument();

  let yimingheOption = screen.queryByTitle("Yiminghe");
  expect(yimingheOption).not.toBeInTheDocument();

  fireEvent.mouseDown(select);
  console.log = jest.fn();

  let yimingheOptionAfterOpening = screen.getByTitle("Yiminghe");
  expect(yimingheOptionAfterOpening).toBeInTheDocument();

  // fireEvent.keyDown(container.ownerDocument, {
  //   key: "Enter",
  //   code: "Enter",
  //   charCode: 13,
  // });

  // fireEvent.keyDown(container.ownerDocument, {
  //   key: "ArrowDown",
  //   code: "ArrowDown",
  //   charCode: 40,
  // });

  // expect(console.log.mock.calls[0][0]).toBe("selected Yiminghe");
});
