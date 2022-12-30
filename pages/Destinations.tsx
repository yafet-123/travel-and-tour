import { Navbar } from '../components/Navbar';
import { useState } from 'react'
import { DestinationsHero } from '../components/DestinationsHero';
import { DestinationsDetail } from '../components/DestinationsDetail';
import { Footer } from '../components/Footer';

export default function Destinations() {
  const [ destinationState, setdestinationState] = useState("")
  const handledestinationChange = ({name}) =>{
    setdestinationState(name)
  }
  console.log(destinationState)
  return (
    <div className="flex flex-col">
      <Navbar />
      <DestinationsHero handledestinationChange={handledestinationChange} />
      <DestinationsDetail state = {setdestinationState} />
      <Footer />
    </div>
  );
}
