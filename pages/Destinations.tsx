import { Navbar } from '../components/Navbar';
import { useState } from 'react'
import { DestinationsHero } from '../components/DestinationsHero';
import { DestinationsDetail } from '../components/DestinationsDetail';
import { Footer } from '../components/Footer';

export default function Destinations() {
  const [ destinationState, setdestinationState] = useState("HistoricalDetail")
  const handledestinationChange = (name) =>{
    console.log(name)
    setdestinationState(name)
  }
  console.log(destinationState)
  return (
    <div className="flex flex-col">
      <Navbar />
      <DestinationsHero handledestinationChange={handledestinationChange} state = {destinationState}/>
      <DestinationsDetail state = {destinationState} />
      <Footer />
    </div>
  );
}
