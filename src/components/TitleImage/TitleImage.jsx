import './TitleImage.css';

export default function TitleImage({ image, title, subtitle, alt = '' }) {
  return (
    <div className="title-image-container">
      <img src={image} alt={alt} className="title-image" />
      <div className="title-overlay">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
