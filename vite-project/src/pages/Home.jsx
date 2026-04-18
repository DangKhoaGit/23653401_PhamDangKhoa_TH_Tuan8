import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer"

const data = [
  { id: 1, title: "Italian tomato", time: 14, img: "/assets/1.jpg" },
  { id: 2, title: "Spaghetti", time: 15, img: "/assets/2.jpg" },
  { id: 3, title: "Lotus salad", time: 20, img: "/assets/3.jpg" },
  { id: 4, title: "Snack cakes", time: 21, img: "/assets/4.jpg" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section
        title="This Summer Recipes"
        desc="We have all your Independence Day sweets covered."
        data={data}
      />

      <Section
        title="Recipes With Videos"
        desc="Cooking Up Culinary Creations with Step-by-Step Videos"
        data={data}
      />

      <Section
        title="Editor's pick"
        desc="Curated Culinary Delights"
        data={data}
      />

      <Footer></Footer>
    </>
  );
}