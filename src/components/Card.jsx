import React from 'react'

function card(props) {
  return (
    <div className={`bg-red-50 rounded-md m-1 w-fit shadow-md p-2 h-32 ${props.selectedCard && (props.selectedCard.id == props.card.id) ? 'bg-purple-400' : ''} `} onClick={() => props.handleSelectCard(props.card)}>
      <p>
        {props.card.name}
      </p>
      {/* image */}
      {/* description */}
      <p>
      Damage - {props.card.damage}
      </p>
    </div>
  )
}

export default card
