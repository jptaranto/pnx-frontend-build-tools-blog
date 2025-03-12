import { describe, test, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/dom'
import Component from '../card.html.twig'
import { composeStories } from '@storybook/react'
import * as CardStories from '../Card.stories.js'

const { Card } = composeStories(CardStories)

describe('Card', () => {
  test('link element', async () => {
    const container = document.createElement('div')
    container.innerHTML = Component(Card.args)
    document.body.appendChild(container)
    const link = screen.getByRole('link')
    await userEvent.click(link)
    await expect(link).toBeInTheDocument()
  })
})
