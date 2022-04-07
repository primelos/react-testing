import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { replaceCamelCaseWithSpaces } from "./App";

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

  //  find an element with a role of button and text of 'Change color to MidnightBlue
  const colorButton = screen.getByRole("button", {
    name: /change to MidnightBlue/i,
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("button turns blue when clicked", () => {
  // render the component')
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  fireEvent.click(colorButton);
  //
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  // expect(colorButton).toHaveTextContent("Change to MediumVioletRed");
  // or
  expect(colorButton).toHaveTextContent("Change to MediumVioletRed");
  //
});

// test("button turns MidnightBlue when clicked", async () => {
//   // render the component')
//   const eve = userEvent.setup();
//   render(<App />);
//   const colorButton = await eve.click(
//     screen.getByRole("button", { name: "Change to MidnightBlue" })
//   );
// });

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toBeEnabled();
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checked conditions", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  // expect(colorButton.textContent).toBe("Change to MidnightBlue");
  const checkbox = screen.getByRole("checkbox", { name: "check test" });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("check button disabled and button color changes gray", async () => {
  const checkEvent = userEvent.setup();
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "check test" });

  expect(checkbox).not.toBeChecked();
  await checkEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  expect(checkbox).toBeChecked();
  await checkEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  await checkEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  await checkEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
});
// Jest describe global
describe("spaces before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });

  test("works for one inner capital letter", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("works for two inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("CrimsonAzure")).toBe("Crimson Azure");
  });
});
