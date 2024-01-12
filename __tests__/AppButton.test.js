import { render, screen } from "@testing-library/react-native";
import AppButton from "../components/atoms/AppButton";

test("should render correctly", () => {
  render(<AppButton>Test button</AppButton>);

  expect(screen.getByLabelText("Test button")).toBeDefined();
});
