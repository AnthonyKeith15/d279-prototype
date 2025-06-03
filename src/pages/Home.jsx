// src/pages/Home.jsx
import ResourceCard from '../components/ResourceCard/ResourceCard';
import HeroImage from '../components/HeroImage/HeroImage';
import CallToAction from '../components/CallToAction/CallToAction';

import './Home.css';

export default function Home() {
  const resources = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQ5qQq771B41-HaQp4yMQtY20oNwM-oOhwQ&s',
      title: 'General Pet Resources',
      link: 'https://bestfriends.org/pet-care-resources/issues/pet-adoption-resources'
    },
    {
      image: 'https://mma.prnewswire.com/media/546029/ASPCA_Voice_Logo.jpg?p=facebook',
      title: 'ASPCA',
      link: 'https://www.aspca.org/'
    },
    {
      image: 'https://www-sterlingshelter-org.b-cdn.net/wp-content/uploads/sterling-shelter-logo-white-393px.png',
      title: 'Fish Rescue',
      link: 'https://www.sterlingshelter.org/humane-society/koi-fish-rescue/'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWn0z9JybgK38FMqtXq3Bu7UgqxPVOFf19hg&s',
      title: 'Snake Rescue',
      link: 'https://savethesnakes.org/snakerescuecall/'
    },
    {
      image: 'https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/45761/2/?bust=1511966221',
      title: 'Bird Rescue',
      link: 'https://ftlob.rescuegroups.org/'
    },
  ];
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Virtual Consultations',
      link: ''
    },
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Group Presentations',
      link: ''
    },
    {
      image: 'https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Adoption Resources',
      link: ''
    },
  ];
  const advice = [
    {
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Cat',
      link: ''
    },
    {
      image: 'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Dog',
      link: ''
    },
    {
      image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Fish',
      link: ''
    },
  ];

  return (
    <>
    <HeroImage
      image='https://myworldaba.com/wp-content/uploads/2025/01/Group-of-Pets-Together.jpg'
      title="Welcome to Paradigm Pet Professionals"
      subtitle="Evidence-based pet care advice for every pet lover"
    />
      <main className="homepage">
      <section className="homepage-section light-bg">
        <h2>Our Services</h2>
        <div className="resource-card-grid">
          {services.map((svc, i) => (
            <ResourceCard key={i} {...svc} />
          ))}
        </div>
      </section>

      <section className="homepage-section dark-bg">
        <h2>Pet Adoption Resources</h2>
        <div className="resource-card-grid">
          {resources.map((res, i) => (
            <ResourceCard key={i} {...res} />
          ))}
        </div>
      </section>


      <section className="homepage-section light-bg">
        <h2>Expert Advice by Pet Type</h2>
        <div className="resource-card-grid rounded-cards">
          {advice.map((pet, i) => (
            <ResourceCard key={i} {...pet} />
          ))}
        </div>
      </section>
      <CallToAction
        title="Ready to give your pet the best care possible?"
        subtext="Schedule a new pet consultation with our experts and receive personalized advice tailored to your pet's specific needs.       "
        image="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Cat at the vet"
        />
      </main>
    </>
  );
}

