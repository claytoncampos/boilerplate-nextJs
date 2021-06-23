import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main>', () => {
  it('sloud render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /next avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
