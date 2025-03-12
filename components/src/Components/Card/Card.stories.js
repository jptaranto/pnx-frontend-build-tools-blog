import Component from './card.html.twig'
import { userEvent, within, expect } from '@storybook/test'

const meta = {
  component: Component,
  args: {
    title: `<a href="#">Card title</a>`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link')
    await userEvent.click(link)
    await expect(link).toBeInTheDocument()
  },
}
export default meta

export const Card = {}
