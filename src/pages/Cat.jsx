import ContentBlock from "../components/ContentBlock/ContentBlock";
import TitleImage from "../components/TitleImage/TitleImage";
export default function Cat() {
  return (
    <main className="page">
      <TitleImage
        image="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Cat Care"
        subtitle="Essential tips for a happy and healthy cat"
        alt="Cat sitting on a couch" />
      <h1>Cat Care</h1>
      <p>Feeding, health, and grooming advice for your feline friend.</p>
      <ContentBlock
        title="Feeding Your Cat"
        subtitle="Nutrition Tips"
        text="Cats require a balanced diet rich in protein. Ensure you provide high-quality cat food and fresh water daily."
        image="/images/cat-feeding.jpg"
        imageAlt="Cat eating food" />
      <ContentBlock
        title="Feeding Your Cat"
        subtitle="Nutrition Tips"
        text="Cats require a balanced diet rich in protein. Ensure you provide high-quality cat food and fresh water daily."
        image="/images/cat-feeding.jpg"
        imageAlt="Cat eating food"
        imagePosition="right" />
      <ContentBlock
        title="Feeding Your Cat"
        subtitle="Nutrition Tips"
        text="Cats require a balanced diet rich in protein. Ensure you provide high-quality cat food and fresh water daily."
        image="/images/cat-feeding.jpg"
        imageAlt="Cat eating food" />
      <ContentBlock
        title="Feeding Your Cat"
        subtitle="Nutrition Tips"
        text="Cats require a balanced diet rich in protein. Ensure you provide high-quality cat food and fresh water daily."
        image="/images/cat-feeding.jpg"
        imageAlt="Cat eating food"
        imagePosition="right" />
    </main>
  );
}
