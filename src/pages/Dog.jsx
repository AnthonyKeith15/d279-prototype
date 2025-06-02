import ContentBlock from "../components/ContentBlock/ContentBlock";
import TitleImage from "../components/TitleImage/TitleImage";
export default function Dog() {
  return (
    <main className="page">
      <TitleImage
        image="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Dog Care"
        subtitle="Essential tips for a happy and healthy dog"
        alt="Dog playing in the park" />
      <h1>Dog Care</h1>
      <p>Training, diet, and activity tips for your canine companion.</p>
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
    </main>
  );
}
