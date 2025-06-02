// src/pages/Home.jsx
import ResourceCard from '../components/ResourceCard/ResourceCard';
import HeroImage from '../components/HeroImage/HeroImage';
import bannerImg from '../images/placeholder.png'
import './Home.css';

export default function Home() {
  const resources = [
    {
      image: 'https://yt3.googleusercontent.com/7LGzZMaGiRUIGYE_eGPjFwGKYC2QZEUJgRe9EgFOh4pi7n9sHoCc-GdE5VZWve1mv-kW258T=s900-c-k-c0x00ffffff-no-rj',
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

  return (
    <>
    <HeroImage
      image={bannerImg}
      title="Welcome to Paradigm Pet Professionals"
      subtitle="Evidence-based pet care advice for every pet lover"
    />
      <main className="page">
        <h2>Looking for your new best friend? The following organizations can help you find and adopt the perfect companion:</h2>
        <div className="resource-card-grid">
          {resources.map((res, i) => (
            <ResourceCard
              key={i}
              image={res.image}
              title={res.title}
              link={res.link}
            />
          ))}
        </div>
      </main>
    </>
  );
}

