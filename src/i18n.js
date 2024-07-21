import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        men: "Men",
        women: "Women",
        customize: "Tailoring",
        ourStory: "Story",
        toggleLanguage: "FR",
      },
      header: {
        welcome: "Welcome to Maison Bellucci",
        description: "Craft your bespoke fragrance, a signature scent tailored exclusively for you",
        discover: "Discover Your Essence"
      },
      carousel: {
        title: "Fragrance Fusion"
      },
      ourStory: {
        title: "Story",
        paragraph1: "Maison Bellucci was founded in 1892 in the charming town of Lucca, Italy, by Francesco Bellucci and his brother, Alessandro Bellucci. Nestled in the heart of Tuscany, Lucca is a land known for its rich heritage and timeless beauty. Since its inception, our maison has been dedicated to the art of perfumery, crafting bespoke, luxurious fragrances that capture the essence of sophistication and individuality.",
        paragraph2: "For over a century, Maison Bellucci has carved a niche in the luxury fragrance industry through a harmonious blend of tradition and innovation. This synergy is essential for a creative industry that seeks to evoke a sense of beauty and elegance in every scent.",
        paragraph3: "Our fragrances are meticulously crafted using the finest ingredients, ensuring that each perfume is a masterpiece. Maison Bellucci’s creations include an array of signature scents, each designed to tell a unique story and provide a memorable olfactory experience. We invite you to discover our bespoke perfume line, where every scent is an invitation to immerse yourself in the sublime.",
        paragraph4: "Maison Bellucci's vision is guided by three core principles: Artistry, Quality, and Individuality. Our perfumes are crafted in our historic atelier, where skilled artisans blend creativity with precision, producing scents that are as unique as the individuals who wear them.",
        paragraph5: "Through these guiding principles, Maison Bellucci breaks the mold of conventional perfumery to offer a new vision of beauty where individuality is celebrated. Our fragrances are designed as evolving objects of desire, reflecting the wearer’s unique essence and style.",
        paragraph6: "Maison Bellucci ~ Your Signature, Your Scent."
      },
      filterComponent: {
        filterFragrances: "Filter Fragrances",
        priceRange: "Price Range",
        gender: "Gender",
        fragranceFamily: "Fragrance Family",
        men: "Men",
        women: "Women",
        unisex: "Unisex",
        floral: "Floral",
        woody: "Woody",
        citrus: "Citrus",
        clearFilters: "Clear"
      }
    }
  },
  fr: {
    translation: {
      navbar: {
        men: "Homme",
        women: "Femme",
        customize: "Personnalisation",
        ourStory: "Histoire",
        toggleLanguage: "EN",
      },
      header: {
        welcome: "Bienvenue chez Maison Bellucci",
        description: "Créez votre parfum sur mesure, un parfum signature exclusivement pour vous",
        discover: "Découvrez votre essence"
      },
      carousel: {
        title: "Fusion de Parfums"
      },
      ourStory: {
        title: "Histoire",
        paragraph1: "Maison Bellucci a été fondée en 1892 dans la charmante ville de Lucca, en Italie, par Francesco Bellucci et son frère, Alessandro Bellucci. Nichée au cœur de la Toscane, Lucca est une terre connue pour son riche patrimoine et sa beauté intemporelle. Depuis sa création, notre maison s'est consacrée à l'art de la parfumerie, créant des parfums sur mesure et luxueux qui capturent l'essence de la sophistication et de l'individualité.",
        paragraph2: "Depuis plus d'un siècle, Maison Bellucci s'est taillé une niche dans l'industrie des parfums de luxe grâce à un mélange harmonieux de tradition et d'innovation. Cette synergie est essentielle pour une industrie créative qui cherche à évoquer un sentiment de beauté et d'élégance dans chaque parfum.",
        paragraph3: "Nos parfums sont méticuleusement fabriqués avec les meilleurs ingrédients, garantissant que chaque parfum est un chef-d'œuvre. Les créations de Maison Bellucci incluent une gamme de parfums signature, chacun conçu pour raconter une histoire unique et offrir une expérience olfactive mémorable. Nous vous invitons à découvrir notre ligne de parfums sur mesure, où chaque parfum est une invitation à vous immerger dans le sublime.",
        paragraph4: "La vision de Maison Bellucci est guidée par trois principes fondamentaux : l'Art, la Qualité et l'Individualité. Nos parfums sont fabriqués dans notre atelier historique, où des artisans qualifiés allient créativité et précision, produisant des parfums aussi uniques que les individus qui les portent.",
        paragraph5: "Grâce à ces principes directeurs, Maison Bellucci brise le moule de la parfumerie conventionnelle pour offrir une nouvelle vision de la beauté où l'individualité est célébrée. Nos parfums sont conçus comme des objets de désir évolutifs, reflétant l'essence et le style uniques de celui qui les porte.",
        paragraph6: "Maison Bellucci ~ Votre Signature, Votre Parfum."
      },
      filterComponent: {
        filterFragrances: "Filtrer les Parfums",
        priceRange: "Gamme de Prix",
        gender: "Genre",
        fragranceFamily: "Famille de Parfum",
        men: "Homme",
        women: "Femme",
        unisex: "Unisexe",
        floral: "Floral",
        woody: "Boisé",
        citrus: "Agrumes",
        clearFilters: "Effacer"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
