import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("Followerslist tests", () => {
  //   beforeEach(() => {
  //     console.log("RUNNING BEFORE EACH TEST");
  //   });

  //   beforeAll(() => {
  //     console.log("RUNNING ONCE BEFORE ALL TESTS");
  //   });

  test("should render first follower on list", async () => {
    render(<MockFollowersList />);
    const followersElements = await screen.findByTestId("follower-item-0");
    expect(followersElements).toBeInTheDocument();
  });

  test("should render 5 followers in list", async () => {
    render(<MockFollowersList />);
    const followersElements = await screen.findAllByTestId(/follower-item/i);
    // screen.debug();
    expect(followersElements.length).toBe(5);
  });
});
