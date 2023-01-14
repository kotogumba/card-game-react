import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from './components/Hero'
import Enemy from './components/Enemy'
import Deck from './components/Deck'
import Card from './components/Card'

const totalHealth = 10

function App() {
  const [playerHealth, setPlayerHealth] = useState(10);
  const [enemyHealth, setEnemyHealth] = useState(10);
  console.log('rendering App')
  let playerCards = [
    { id: 1, name: "Kick", damage: 1 },
    { id: 2, name: "Kick", damage: 1 },
    { id: 3, name: "Kick", damage: 1 },
    { id: 4, name: "Blow", damage: 2 },
    { id: 5, name: "Blow", damage: 2 },
    { id: 6, name: "Blow", damage: 3 },
    { id: 7, name: "Blow", damage: 3 },
    { id: 8, name: "Blow", damage: 3 },
    { id: 9, name: "Super smash", damage: 5 },
    { id: 10, name: "Super smash", damage: 5 },
  ]

  const [selectedCard, setSelectedCard] = useState(null);
  const [dealedCards, setDealedCards] = useState([]);
  const [turn, setTurn] = useState(1);

  const handleSelectCard = (card) => {
    setSelectedCard(card);
  };

  const handleAttack = () => {

    if (!selectedCard) {
      alert("Please select at least one card to play.");
      return;
    }

    setEnemyHealth(enemyHealth - selectedCard.damage);
    setSelectedCard(null);
    setDealedCards([])
    setTurn(turn + 1);

  };

  const dealCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      let randomCard = playerCards.splice(Math.floor(Math.random() * playerCards.length), 1)[0];
      cards.push(randomCard);
    }
    setDealedCards(cards);
  };

  useEffect(() => {
    dealCards();
  }, [turn]);

  const renderCards = () => {
    return dealedCards.map((card) => {
      return (
        <Card key={card.id} card={card} handleSelectCard={handleSelectCard} selectedCard={selectedCard}/>
      );
    });
  };




  return (
    <div className="App h-screen bg-gray-400 flex justify-center">

      <div className='relative w-fit h-screen bg-stone-500 rounded-lg border-2 border-black p-3'>
        {enemyHealth <= 0 && (
          <div className="absolute top-1/2 left-1/2 w-fit h-fit bg-white flex flex-col justify-center items-center rounded-lg shadow-lg p-3">
            <h1 className="text-5xl">You Win!</h1>
            <button className="bg-green-400 rounded-lg p-1 border-black border-2 hover:bg-green-600"onClick={() => setEnemyHealth(10)}>Play Again</button>
          </div>

        )}

        <div className='flex flex-col justify-center items-center '>

          <div>Turn - {turn} </div>
          <p>Select Cards:</p>
          <div className='flex flex-row justify-center'>
            {renderCards()}
          </div>
          <button onClick={handleAttack} className='bg-stone-400 w-24 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded mt-3 shadow-lg'>
            Attack
          </button>
        </div>

        <div className='grid grid-cols-2 gap-20 h-full content-center'>
          <Hero health={playerHealth}/>
          <Enemy health={enemyHealth} totalHealth={totalHealth}/>
        </div>

      </div>
    </div>
  )
}

export default App
