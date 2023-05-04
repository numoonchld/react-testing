import { render, screen } from "@testing-library/react"
import Skills from "./Skills"

describe("Skills", () => {
    const skills = ['HTML', 'CSS', "JavaScript"]

    beforeEach(() => {
        render(<Skills skills={skills} />)

    })

    test('renders correctly', () => {
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()

    })

    test("renders a list of skills", () => {
        const listItemElements = screen.getAllByRole('listitem')
        expect(listItemElements).toHaveLength(skills.length)
    })
})