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

    test("renders login button", () => {
        const loginButton = screen.getByRole('button', {
            name: "Login"
        })
        expect(loginButton).toBeInTheDocument()

    })

    test("Start learning button is not rendered", () => {
        const startLearningButton = screen.queryByRole('button', {
            name: 'Start Learning'
        })
        expect(startLearningButton).not.toBeInTheDocument()
    })

    test("Start learning button is eventually displayed", async () => {
        // screen.debug()
        const startLearningButton = await screen.findByRole('button', {
            name: 'Start Learning'
        },
            {
                timeout: 2000, // default: 1000ms if unspecfied
            })

        // screen.debug()
        expect(startLearningButton).toBeInTheDocument()
    })



})