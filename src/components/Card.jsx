import React from 'react'
import sword from '../assets/sword.png'

function card(props) {
  return (
    <div className={`bg-red-50 flex flex-col items-center rounded-md m-1 w-fit shadow-md p-2 h-fit ${props.selectedCard && (props.selectedCard.id == props.card.id) ? 'bg-purple-400' : ''} `} onClick={() => props.handleSelectCard(props.card)}>
      <p>
        {props.card.name}
      </p>
      <img src={sword} alt="sword" className='h-20 w-10'/>
      {/* description */}
      <p>
      Damage - {props.card.damage}
      </p>
    </div>
  )
}

export default card
