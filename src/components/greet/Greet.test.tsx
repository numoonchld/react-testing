import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe("Greet", () => {

    it('Greet renders correctly', () => {
        render(<Greet />)
    
        const text = screen.getByText("Hello")
        expect(text).toBeInTheDocument()
        
    })
    
    test("Greet renders with a name", () => {
        render(<Greet name="Ancilla" />)
    
        const greetingText = screen.getByText('Hello Ancilla')
        expect(greetingText).toBeInTheDocument()
    })

} )