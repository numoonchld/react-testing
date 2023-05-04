import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe('Application Form', () => {


    beforeEach(() => {})

    test('renders name text box', () => {
        render(<Application />)


        const nameTextBox = screen.getByRole('textbox')
        expect(nameTextBox).toBeInTheDocument()
    })


    test('renders select combo box', () => {
        render(<Application />)


        const selectComboBox = screen.getByRole('combobox')
        expect(selectComboBox).toBeInTheDocument()
    })


    test('renders terms checkbox', () => {
        render(<Application />)


        const termsCheckBox = screen.getByRole('checkbox')
        expect(termsCheckBox).toBeInTheDocument()
    })


    test('renders submit button', () => {
        render(<Application />)


        const submitButton = screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()
    })

    


})