import './ResourceCard.css';

export default function ResourceCard({ image, title, link }) {
  return (
    <div className="resource-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
      )}
    </div>
  );
}
