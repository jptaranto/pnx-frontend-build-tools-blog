import { Card } from './Components/Card/card.js'

Drupal.behaviors.Card = {
  attach(context) {
    const cards = once('card', '.card', context)
    cards.forEach(card => {
      Card(card)
    })
  },
}
