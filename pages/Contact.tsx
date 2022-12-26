import { Navbar } from '../components/Navbar';
import { HeroContact } from '../components/HeroContact';
import { ContactList } from '../components/ContactList';
import { Footer } from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroContact />
      <ContactList />
      <Footer />
    </div>
  );
}
