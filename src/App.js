import React from 'react'
import Box from './components/Box'
import "./App.css"

const App = () => {
  const image1 = "https://ng.jumia.is/cms/0-6-anniversary/2024/Collections/Thunbmails/Artboard_1_copy_6.png"
  const image2 ="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/7109041/1.jpg?7067"
  const image3 = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/0615812/1.jpg?3830"
  const image4 = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/2927732/1.jpg?9345"
  return (
    <>
    <main>
      <h1>All Products</h1>
      <div className='box-container'>
      <Box image={image1} name="Adiddas DML 1" price="75,000" description="A nice white sneakers built for durability.A nice white sneakers built for durability"/>
      <Box image={image2} name="LG Double door fridge" price="100,000" description="A very durable fridge with inverter.A nice refrigerator sneakers built for durability" />
      <Box image={image3} name= "Iphone 18 promax" price="10,000" description="A phone we are yet to see but keep the the money till it arrives.happy dreaming."/>
      <Box image={image4} name="Good luck serum" price="3,000,000" description="It grants all your wishes,A nice good luck serum built for durability and successjoker."/>
      </div>
    </main>
    </>
  )
}

export default App
