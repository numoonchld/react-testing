import { render, screen } from "@testing-library/react"
import CounterTwo from "./CounterTwo"
import userEvent from "@testing-library/user-event"

describe('CounterTwo', () => {
    test("renders correctly", () => {
        render(<CounterTwo count={0} />)

        const textElement = screen.getByText("Counter Two")
        expect(textElement).toBeInTheDocument()
    })

    test('handlers are called', () => {
        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()
        render(<CounterTwo count={0} handleIncrement={incrementHandler} handleDecrement={decrementHandler} />)

        const incrementButton = screen.getByRole('button', {
            name: "Increment"
        })
        userEvent.click(incrementButton)
        expect(incrementHandler).toHaveBeenCalledTimes(1)

        const decrementButton = screen.getByRole('button', {
            name: "Decrement"
        })
        userEvent.click(decrementButton)
        expect(decrementHandler).toHaveBeenCalledTimes(1)
    })
})