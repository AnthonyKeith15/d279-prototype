import TitleImage from "../components/TitleImage/TitleImage";
import FishTank from "../components/FishTanks/FishTank";
import CallToAction from "../components/CallToAction/CallToAction";
import './Fish.css';

export default function Fish() {
  return (
    <main className="page">
      <TitleImage
        image="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=1740&auto=format&fit=crop"
        title="Fish Care"
        subtitle="Essential tips for your aquatic friends"
        alt="Colorful fish swimming in an aquarium"
      />

      <h1>Creating the perfect aquatic environment</h1>
      <p>
        Fish represent a broad class of aquatic animals that can live in fresh or saltwater, depending on the species.
        Bringing fish into your home can be an exciting hobby, especially if you intend to breed them, and the presence
        of a fish tank in your home can induce feelings of peace and tranquility.
      </p>

      <p>
        Whether you are bringing your fish home for the first time or maintaining your aquarium, it is important to test
        your water <b><i>once per week</i></b> to ensure it is free from toxins that can harm your fish.
      </p>

      <section className="fish-tank-section">
        <FishTank
          title="Freshwater Fish"
          image="https://images.unsplash.com/photo-1636552201398-8eba743d2b73?q=80&w=1809&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="There are several freshwater fish to choose from when setting up your aquarium, but it is best to consult with a “Pexpert” to ensure your fish will get along!"
          stats={[
            "pH Level: 6.8–7.6 (7.0 is considered neutral)",
            "Ammonia: any level above zero is harmful to fish",
            "Nitrates: 5 to 10 ppm",
            "Nitrites: less than 0.5 ppm"
          ]}
        />

        <FishTank
          title="Saltwater Fish"
          image="https://images.unsplash.com/photo-1703437875330-fc5f65bae418?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Saltwater fish also offer several options when it comes to choosing among species for your aquarium."
          stats={[
            "Salinity: 1.020–1.028 sg",
            "pH Level: 7.6–8.4",
            "Ammonia: any level above 0.1 ppm requires attention",
            "Nitrates: 10 to 40 ppm",
            "Nitrites: less than 0.2 ppm"
          ]}
        />
      </section>

      <p>For more information on making your tap water safe for your fish, please visit:</p>
      <ul className="links">
        <li>
          <a href="http://www.theaquariumwiki.org/wiki/How_to_make_tap_water_safe_for_fish" target="_blank" rel="noopener noreferrer">
            How to make tap water safe for fish
          </a>
        </li>
        <li>
          <a href="http://fishbase.org/home.htm" target="_blank" rel="noopener noreferrer">
            FishBase
          </a>
        </li>
      </ul>
      <CallToAction
        title="Unsure where to start?"
        subtext="Book a consultation with our pexperts today!"
        image="https://images.unsplash.com/photo-1585936529565-1871537209e3?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Newborn kitten"
      />
    </main>
  );
}
