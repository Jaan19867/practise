import { useEffect, useState } from "react"
// import { BusinessCard } from "./components/BusinessCard"
import UserInput from "./input/UserInput"
import BusinessCards from "./components/BusinessCards"

import "./App.css"

function App() {
  let count=1;
  const [cards, setCards] = useState([])

  function addingCard(card) {
    console.log("functin is call")
    setCards([...cards, card])
    console.log(cards)
  }
 

  useEffect(() => {
    console.log("useEffect is call")
    console.log(cards)
  }, [cards])
  return (
    <>
      <UserInput addingCard={addingCard} />
      {cards.map((singleCard) => {
        return (
          <div key={count++}>
            <BusinessCards
              title={singleCard.title}
              description={singleCard.description}
              interest={singleCard.interest}
              link={singleCard.link}
            />
          </div>
        )
      })}
    </>
  )
}

export default App
