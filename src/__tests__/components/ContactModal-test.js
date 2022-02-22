import { render } from "@testing-library/react";
import ContactModal from "../../components/ContactModal";

describe("Test on <ContactModal />", () => {
  it("should be render", () => {
    const { baseElement } = render(<ContactModal />);
    expect(baseElement).toBeInTheDocument();
  });
});
