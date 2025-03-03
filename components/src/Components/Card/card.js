Drupal.behaviors.Card = {
  attach(context) {
    const cards = once('card', '.card', context)
    cards.forEach(card => {
      // Do something to cards
    })
  },
}
