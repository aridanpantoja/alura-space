import { Navbar } from '@/components/navbar'
import '@testing-library/react'
import { render } from '@testing-library/react'

describe('Navbar', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Navbar />)
    const navElement = getByRole('navigation')

    expect(navElement).toBeInTheDocument()
  })
})
