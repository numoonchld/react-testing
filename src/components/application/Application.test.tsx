import { logRoles, render, screen } from "@testing-library/react"
import Application from "./Application"

describe('Application Form', () => {

    beforeEach(() => {

    })

    test('renders headings for the job application - by role', () => {
        render(<Application />)
        const pageHeading = screen.getByRole("heading", {
            level: 1 // associated text content for disambiguation when multiple headings roles are present
        })
        expect(pageHeading).toBeInTheDocument()

        const sectionHeading = screen.getByRole("heading", {
            level: 2
        })
        expect(sectionHeading).toBeInTheDocument()
    })

    test('renders paragraph element - by text', () => {
        render(<Application />)
        const paraTextElement = screen.getByText('All fields are mandatory')
        expect(paraTextElement).toBeInTheDocument()
    })

    test('renders image element - by alt text', () => {
        render(<Application />)
        const imageElement = screen.getByAltText('a person with a laptop')
        expect(imageElement).toBeInTheDocument()
    })

    test('renders span - by title', () => {
        render(<Application />)
        const spanElement = screen.getByTitle('close')
        expect(spanElement).toBeInTheDocument()
    })

    test('renders div - by data-testid', () => {
        render(<Application />)
        const divElement = screen.getByTestId('custom-element')
        expect(divElement).toBeInTheDocument()
    })

    test('renders name text input and bio text box - by role', () => {
        render(<Application />)
        const nameTextBox = screen.getByRole('textbox', {
            name: 'Name' // associated label for disambiguation when multiple text box roles are present
        })
        expect(nameTextBox).toBeInTheDocument()

        const bioTextArea = screen.getByRole('textbox', {
            name: 'Bio' // associated label for this text box role
        })
        expect(bioTextArea).toBeInTheDocument()
    })

    test('renders Name text field - by label text', () => {
        render(<Application />)
        const nameFieldByLabel = screen.getByLabelText('Name', {
            selector: 'input' // useful optional option for disambiguation when multiple of the same labels exist
        })
        expect(nameFieldByLabel).toBeInTheDocument()
    })

    test('renders Name text field - by placeholder text', () => {
        render(<Application />)
        const nameFieldByPlaceholder = screen.getByPlaceholderText('full name')
        expect(nameFieldByPlaceholder).toBeInTheDocument()
    })

    test('renders select combo box - by role', () => {
        render(<Application />)
        const selectComboBox = screen.getByRole('combobox')
        expect(selectComboBox).toBeInTheDocument()
    })

    test('renders terms checkbox - by role', () => {
        render(<Application />)
        const termsCheckBox = screen.getByRole('checkbox')
        expect(termsCheckBox).toBeInTheDocument()
    })

    test('renders terms checkbox - by wrapper label text', () => {
        render(<Application />)
        const termsCheckBoxByLabel = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsCheckBoxByLabel).toBeInTheDocument()
    })

    test('renders submit button - by role', () => {
        render(<Application />)
        const submitButton = screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()
    })


})

describe('roles debug', () => {

    test('shows roles for the dom tree', () => {
        const { container } = render(<Application />)
        logRoles(container)
    })
})