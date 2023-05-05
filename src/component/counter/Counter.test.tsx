import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "./Counter"



describe("Counter", () => {

    test('renders correctly', () => {
        render(< Counter />)

        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()

        const incrementButton = screen.getByRole('button', {
            name: "Increment"
        })
        expect(incrementButton).toBeInTheDocument()
    })


    test('renders a count of 0 initially', () => {
        render(<Counter />)

        const countElementIntitial = screen.getByRole('heading')
        expect(countElementIntitial).toHaveTextContent('0')
    })

    test('renders count of 1 after first increment button click', () => {
        render(<Counter />)

        const countElementIntitial = screen.getByRole('heading')
        expect(countElementIntitial).toHaveTextContent('0')
        const incrementButton = screen.getByRole('button', {
            name: "Increment"
        })
        // state update event calls for act
        act(() => {
            userEvent.click(incrementButton)
        })
        expect(countElementIntitial).toHaveTextContent('1')

    })

    test('renders a count of 10 after clicking the set button', () => {
        render(<Counter />)

        const amountInput = screen.getByRole('spinbutton')
        act(() => {
            userEvent.type(amountInput, '10')
        })
        expect(amountInput).toHaveValue(10)

        const setButton = screen.getByRole('button', {
            name: "Set"
        })

        act(() => {
            userEvent.click(setButton)
        })
        const countElementIntitial = screen.getByRole('heading')
        expect(countElementIntitial).toHaveTextContent('10')

    })

    test('elements are focussed in the right order', () => {
        render(<Counter />)

        const amountInput = screen.getByRole('spinbutton')

        const setButton = screen.getByRole('button', {
            name: "Set"
        })

        const incrementButton = screen.getByRole('button', {
            name: "Increment"
        })

        userEvent.tab()
        expect(incrementButton).toHaveFocus()
        userEvent.tab()
        expect(amountInput).toHaveFocus()
        userEvent.tab()
        expect(setButton).toHaveFocus()


    })
})