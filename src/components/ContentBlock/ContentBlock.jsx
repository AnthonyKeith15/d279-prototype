import './ContentBlock.css';

export default function ContentBlock({ 
  title, 
  subtitle, 
  children, 
  image, 
  imageAlt = '', 
  imagePosition = 'left' 
}) {
  return (
    <div className={`content-block ${imagePosition === 'right' ? 'image-right' : ''}`}>
      <img src={image} alt={imageAlt} className="block-image" />
      
      <div className="block-text">
        <h4 className="block-title">{title}</h4>
        <p className="block-subtitle">{subtitle}</p>
        {children}
      </div>
    </div>
  );
}

