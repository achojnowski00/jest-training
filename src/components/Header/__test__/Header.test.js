import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render same text passed into title prop", () => {
  render(<Header title="Testing header" />);
  const headerElement = screen.getByText(/Testing header/i);
  expect(headerElement).toBeInTheDocument();
});

test("should render by Role", () => {
  render(<Header title="My header" />);
  const headerElement = screen.getByRole("heading", { name: "My header" });
  expect(headerElement).toBeInTheDocument();
});

test("should render elements by title", () => {
  render(<Header title="My header" />);
  const headerElement = screen.getAllByTitle("Header");
  headerElement.forEach((element) => {
    expect(element).toBeInTheDocument();
  });
});

// FIND BY
test("should render same text passed into title prop with findByText", async () => {
  render(<Header title="Testing header" />);
  const headerElement = await screen.findByText(/Testing header/i);
  expect(headerElement).toBeInTheDocument();
});

// QUERY BY
test("should render same text passed into title prop with queryByText", () => {
  render(<Header title="Testing header" />);
  const headerElement = screen.queryByText(/dogs/i);
  expect(headerElement).not.toBeInTheDocument();
});
