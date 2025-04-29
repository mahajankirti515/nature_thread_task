import one from "./assets/one.png";
import two from "./assets/two.png";
import three from "./assets/three.png";

import women1 from './assets/woman1.jpeg'
import women2 from './assets/woman2.jpeg'
import women3 from './assets/woman3.jpeg'
import women4 from './assets/woman4.jpeg'

export const homeBannerSlides = [
  { image: one, altText: "Nature Banner 1" },
  { image: two, altText: "Nature Banner 2" },
  { image: three, altText: "Nature Banner 3" },
];

export const testimonialSlides = [
  { image: "/images/testimonial1.jpg", altText: "Happy Customer 1" },
  { image: "/images/testimonial2.jpg", altText: "Happy Customer 2" },
];

export  const Apparel_slides = [
     { image: women1, altText: "Model 1" },
      { image: women2, altText: "Model 2" },
      { image: women3, altText: "Model 3" },
      { image: women4, altText: "Model 3" },
];



//   import Carousel from '../components/Carousel';

// function Home() {
//   return (
//     <div>
//       <Carousel slides={homeBannerSlides} height="600px" autoplayDelay={4000} />
//       {/* Other sections */}
//     </div>
//   );
// }

// function TestimonialsSection() {
//   return (
//     <div>
//       <h2>What Our Customers Say</h2>
//       <Carousel slides={testimonialSlides} height="400px" autoplayDelay={5000} showNavigation={false} />
//     </div>
//   );
// }
