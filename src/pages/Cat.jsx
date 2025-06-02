import ContentBlock from "../components/ContentBlock/ContentBlock";
import TitleImage from "../components/TitleImage/TitleImage";
import "./Cat.css";


export default function Cat() {
  return (
    <main className="page">
      <TitleImage
        image="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Cat Feeding & Diet Guide"
        subtitle="Proper nutrition for every stage of your cat's life"
        alt="Cat sitting on a couch" />
      <h1>Understanding Your Cat's Nutritional Needs</h1>
      <p>Cats were first domesticated around 7500 BCE in the western Asia region and are currently the second most popular domestic pet in the United States. While there are over 60 unique documented cat breeds, care and diet can differ between breeds. However, some diets and practices are generally recommended for the well-being of your fluffy family member regardless of breed.</p>
      <ContentBlock
        title="Zero to Four Weeks"
        subtitle="Nutrition Tips"
        image="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Newborn kitten"
        imagePosition="left"
      >
        <p>
          It is important the queen (a term commonly used for a female cat that is either pregnant or nursing) directly nurse her young if possible...
        <ul>
          <li>Too many siblings competing for mom's milk</li>
          <li>Gastrointestinal disease</li>
          <li>Environmental conditions such as extreme heat, cold, or unsanitary surroundings</li>
        </ul>
        </p>
      </ContentBlock>
      <ContentBlock
        title="Four Weeks to One Year"
        subtitle="Nutrition Tips"
        image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Sitting Kitten"
        imagePosition="right"
      >
        <p>Kittens can start being introduced to soft wet kitten food typically around three to four weeks after birth. According to the <a href="https://www.aspca.org/pet-care/cat-care/cat-nutrition-tips" target="_blank" rel="noreferrer">ASPCA</a>, kittens at this age should eat half to one cup of dry kitten food or six to nine ounces of wet kitten food per day. If your kitten has difficulties eating hard food, a small amount of water can be added to soften the food. Cat food that is optimized for kittens provides the additional nutrients that are needed for growth, energy, and wellness. Depending on the breed, your cat may have different dietary requirements. You should always consult with your veterinarian for recommendations.</p>
      </ContentBlock>
      <ContentBlock
        title="One Year to Seven Years"
        subtitle="Nutrition Tips"
        image="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Cool Cat Wearing Sunglasses"
        imagePosition="left"
      >
        <p>This age is when kittens reach the cat stage and do not need as many nutrients. At this age, their level of activity decreases, and so does their metabolism. It is not recommended to leave food out for the cats all day. Instead, provide food a couple times a day so they eat meals rather than snacking throughout the day. This practice reduces the risk of obesity and other weight-related feline ailments.</p> 
      </ContentBlock>
      <ContentBlock
        title="Seven Years and More"
        subtitle="Nutrition Tips"
        image="https://images.unsplash.com/photo-1701363529871-b673e8591bb8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Aging Cat Playing with a Toy"
        imagePosition="right"
      >
      <p>Much like many living organisms, the body begins to deteriorate and experience a lot of changes. Cats at this age should eat less fats and calories and more quality proteins. This means when you are purchasing packaged foods for your cat, look for food that states a particular protein (such as "salmon") and not just a category (such as fish). This usually means they are byproducts, or combinations, of lesser quality proteins.</p>
      </ContentBlock>


    </main>
  );
}
