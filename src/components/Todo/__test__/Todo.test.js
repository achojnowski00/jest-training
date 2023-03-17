import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputEelement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: "Add" });
  tasks.forEach((task) => {
    fireEvent.change(inputEelement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo tests", () => {
  test("should render same text passed into input", async () => {
    render(<MockTodo />);
    addTask(["Go shopping"]);
    const taskElement = screen.getByText("Go shopping");
    expect(taskElement).toBeInTheDocument();
  });

  test("should render multiple items", async () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping", "pet a cat", "take a walk"]);
    const tasksElement = screen.getAllByTestId("task-container");
    expect(tasksElement.length).toBe(3);
  });

  test("task should not have completed class when initially rendered", async () => {
    render(<MockTodo />);
    addTask(["Go shopping"]);
    const taskElement = screen.getByText("Go shopping");
    expect(taskElement).not.toHaveClass("todo-item-active");
  });

  test("task should have completed class after clicking on it", async () => {
    render(<MockTodo />);
    addTask(["Go shopping"]);
    const taskElement = screen.getByText("Go shopping");
    fireEvent.click(taskElement);
    expect(taskElement).toHaveClass("todo-item-active");
  });

  test("task should not have completed class after clicking on it twice", async () => {
    render(<MockTodo />);
    addTask(["Go shopping"]);
    const taskElement = screen.getByText("Go shopping");
    fireEvent.click(taskElement);
    fireEvent.click(taskElement);
    expect(taskElement).not.toHaveClass("todo-item-active");
  });
});
