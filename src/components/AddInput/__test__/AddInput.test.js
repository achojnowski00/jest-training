import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput describe block", () => {
  test("renders AddInput component", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const addInputElement = screen.getByText(/Add/i);
    expect(addInputElement).toBeInTheDocument();
  });

  test("should render input eleement", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputEelement = screen.getByPlaceholderText(
      /Add a new task here.../i
    );
    expect(inputEelement).toBeInTheDocument();
  });

  test("should be able to type into input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputEelement = screen.getByPlaceholderText(
      /Add a new task here.../i
    );
    fireEvent.change(inputEelement, {
      target: { value: "Go Grochery Shopping" },
    });
    expect(inputEelement.value).toBe("Go Grochery Shopping");
  });

  test("should have empty input value after clicking add button", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputEelement = screen.getByPlaceholderText(
      /Add a new task here.../i
    );
    const addButtonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputEelement, {
      target: { value: "Go Grochery Shopping" },
    });
    fireEvent.click(addButtonElement);

    expect(inputEelement.value).toBe("");
  });
});
