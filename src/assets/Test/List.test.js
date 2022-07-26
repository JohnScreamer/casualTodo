import { render, screen } from "@testing-library/react";
const frameWorks = ["react", "angular", "vue", "svelte"];
import { List } from "./List";
describe("List component", () => {
    // test("valid data", () => {
    //     render(<List list={frameWorks} />);
    //     expect(screen.getByText("react")).toBeInTheDocument;
    // });
    // test(" not valid data", () => {
    //     render(<List />);
    //     expect(screen.queryByRole("list")).toBeNull;
    // });
    test("List snapshot", () => {
        const x = render(<List list={frameWorks} />);
        expect(x).toMatchSnapshot();
    });
});
