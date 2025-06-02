import './FishTank.css';

export default function FishTank({
  title,
  subtitle,
  image,
  description,
  stats = []
}) {
  return (
    <div className="fish-tank">
      <div className="tank-header">
        <h4 className="tank-subtitle">{subtitle}</h4>
        <h3 className="tank-title">{title}</h3>
      </div>
      <img src={image} alt={title} className="tank-image" />
      <p className="tank-description">{description}</p>
      <ul className="tank-stats">
        {stats.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
