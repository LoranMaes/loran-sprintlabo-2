import React from "react";
import renderer from "react-test-renderer";
import AppButton from "../../components/atoms/AppButton";

describe("<AppButton />", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<AppButton />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("should display the loading indicator when loading", () => {
    const tree = renderer.create(<AppButton loading={true} />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("should display the text", () => {
    const tree = renderer.create(<AppButton>Test button</AppButton>).toJSON();
    expect(tree.children[0]).toBe("Test button");
  });
});
