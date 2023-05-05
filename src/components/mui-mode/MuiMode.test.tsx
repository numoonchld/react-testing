import { render, screen } from '../../utils/test-utills'
import { MuiMode } from './MuiMode'


describe('MuiMode', () => {
    test('renders text correctly', () => {
        render(<MuiMode />)

        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('dark mode')
    })
})
