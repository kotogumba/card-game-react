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
  const [playerCards, setPlayerCards] = useState([
    { id: 1, name: "Card 1", damage: 1 },
    { id: 2, name: "Card 2", damage: 1 },
    { id: 3, name: "Card 3", damage: 1 },
    { id: 4, name: "Card 4", damage: 2 },
    { id: 5, name: "Card 5", damage: 2 },
    { id: 6, name: "Card 6", damage: 3 },
    { id: 7, name: "Card 7", damage: 3 },
    { id: 8, name: "Card 8", damage: 3 },
    { id: 9, name: "Card 9", damage: 5 },
    { id: 10, name: "Card 10", damage: 5 },
  ]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [dealedCards, setDealedCards] = useState([]);
  const [turn, setTurn] = useState(1);

  const handleSelectCard = (card) => {
    setSelectedCard([card]);
  };

  const handleAttack = () => {
    if (selectedCard.length === 0) {
      alert("Please select at least one card to play.");
      return;
    }

    let totalDamage = 0;
    selectedCard.forEach((card) => {
      totalDamage += card.damage;
    });
    setEnemyHealth(enemyHealth - totalDamage);
    setSelectedCard([]);
    setDealedCards([])
    setTurn(turn + 1);
  };

  const dealCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      let randomCard = playerCards[Math.floor(Math.random() * playerCards.length)];
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
        <Card key={card.id} card={card} handleSelectCard={handleSelectCard}/>
      );
    });
  };




  return (
    <div className="App container h-screen bg-gray-400 flex justify-center">
      <div className='w-fit h-fit bg-white rounded-lg border-2 border-black p-3'>
        {enemyHealth <= 0 && (
          <div className="absolute top-0 left-0 w-32 h-32 bg-white flex justify-center items-center">
            <h1 className="text-5xl">You Win!</h1>
            <button onClick={() => setEnemyHealth(10)}>Play Again</button>
          </div>

        )}


          <div>
            <div>Select Cards:</div>
            <div className='flex flex-row bg-green-400'>
              {renderCards()}
            </div>
          </div>
          <div>
            <div>Selected Cards:</div>
            <div>
              {selectedCard[0] && <Card id={selectedCard[0].id} card={selectedCard[0]} />}
            </div>
          </div>
          <button onClick={handleAttack} disabled={selectedCard.length === 0} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Attack
          </button>
          <div className='grid grid-cols-2 gap-10 mt-10 mb-10 content-end'>
            <Hero health={playerHealth}/>
            <Enemy health={enemyHealth} totalHealth={totalHealth}/>
          </div>
      </div>
    </div>
  )
}

export default App
