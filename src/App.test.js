import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText("Learn React");
//   expect(linkElement).toBeInTheDocument();
// });

// test("has a word edit", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Edit/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("has a word edit", () => {
//   render(<App />);
//   const linkElement = screen.getByRole("link", { name: /react/i });
//   expect(linkElement).toBeInTheDocument();
// });

// FUNCTIONAL TESTING -----------------------------------
test("button has correct initial color", () => {
  // render the component')
  render(<App />);

  //  find an element with a role of button and text of 'Change color to blue
  const colorButton = screen.getByRole("button", { name: /change to blue/i });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {
  // render the component')
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);

  //
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  // expect(colorButton).toHaveTextContent("Change to red");
  // or
  expect(colorButton.textContent).toBe("Change to red");
  //
});

// test("button turns blue when clicked", async () => {
//   // render the component')
//   const eve = userEvent.setup();
//   render(<App />);
//   const colorButton = await eve.click(
//     screen.getByRole("button", { name: "Change to blue" })
//   );
// });
