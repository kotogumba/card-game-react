import React from 'react'

function Deck(props) {
  const cards = [
    {
      id: 1,
      title: 'Kick 1',
      image: 'https://picsum.photos/200/300',
      description: 'Kick with your left foot for 1 damage',
      damage: 1,
    },
  ]

  const heroDeck = Array(10).fill(cards[0])
  
  return (
    <div>Deck</div>
  )
}

export default Deck
