import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe('Application Form', () => {

    beforeEach(() => {
        render(<Application />)
    })

    test('renders headings for the job application', () => {
        const pageHeading = screen.getByRole("heading", {
            level: 1 // associated text content for disambiguation when multiple headings roles are present
        })
        expect(pageHeading).toBeInTheDocument()

        const sectionHeading = screen.getByRole("heading", {
            level: 2
        })
    })

    test('renders paragraph element - by text', () => {
        const paraTextElement = screen.getByText('All fields are mandatory')
        expect(paraTextElement).toBeInTheDocument()
    })

    test('renders image element', () => {
        const imageElement = screen.getByAltText('a person with a laptop')
        expect(imageElement).toBeInTheDocument()
    })

    test('renders name text input and bio text box', () => {

        const nameTextBox = screen.getByRole('textbox', {
            name: 'Name' // associated label for disambiguation when multiple text box roles are present
        })
        expect(nameTextBox).toBeInTheDocument()

        const bioTextArea = screen.getByRole('textbox', {
            name: 'Bio' // associated label for this text box role
        })
        expect(bioTextArea).toBeInTheDocument()
    })

    test('renders Name text field - by label', () => {

        const nameFieldByLabel = screen.getByLabelText('Name', {
            selector: 'input' // useful optional option for disambiguation when multiple of the same labels exist
        })
        expect(nameFieldByLabel).toBeInTheDocument()
    })

    test('renders Name text field - by placeholder', () => {

        const nameFieldByPlaceholder = screen.getByPlaceholderText('full name')
        expect(nameFieldByPlaceholder).toBeInTheDocument()
    })


    test('renders select combo box', () => {

        const selectComboBox = screen.getByRole('combobox')
        expect(selectComboBox).toBeInTheDocument()
    })


    test('renders terms checkbox', () => {

        const termsCheckBox = screen.getByRole('checkbox')
        expect(termsCheckBox).toBeInTheDocument()
    })

    test('renders terms checkbox - by wrapper label text', () => {

        const termsCheckBoxByLabel = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsCheckBoxByLabel).toBeInTheDocument()
    })


    test('renders submit button', () => {

        const submitButton = screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()
    })




})