import { collection } from "@/modules/home/types/home.types";
import { SelectOptionType } from "../types/shop.types";

export const productCollections: collection[] = [
  {
    id: 1,
    name: "Aurix Stealth",
    price: 999,
    image:
      "https://app.banani.co/api/flow-image/4%3A5%0AMatte%20black%20smart%20ring%2C%20clean%20luxury%20presentation%2C%20dark%20background%2C%20highly%20detailed",
    avgRating: 4.9,
    totalRatings: 1240,
  },
  {
    id: 2,
    name: "Aurix Titanium",
    price: 699,
    image:
      "https://app.banani.co/api/flow-image/4%3A5%0ABrushed%20silver%20titanium%20smart%20ring%2C%20clean%20luxury%20presentation%2C%20dark%20background%2C%20highly%20detailed",
    avgRating: 4.8,
    totalRatings: 856,
  },
  {
    id: 3,
    name: "Aurix Gold",
    price: 888,
    image:
      "https://app.banani.co/api/flow-image/4%3A5%0A18k%20gold%20smart%20ring%2C%20luxury%20studio%20lighting%2C%20dark%20background",
    avgRating: 4.9,
    totalRatings: 432,
  },
  {
    id: 4,
    name: "Aurix Rose",
    price: 777,
    image:
      "https://app.banani.co/api/flow-image/4%3A5%0ARose%20gold%20smart%20ring%2C%20premium%20jewelry%20presentation%2C%20dark%20background",
    avgRating: 4.7,
    totalRatings: 215,
  },
  {
    id: 5,
    name: "Aurix Obsidian",
    price: 1099,
    image:
      "https://app.banani.co/api/flow-image/4%3A5%0ABlack%20ceramic%20smart%20ring%2C%20minimal%20luxury%20presentation%2C%20cinematic%20lighting",
    avgRating: 4.9,
    totalRatings: 980,
  },
  {
    id: 6,
    name: "Aurix Carbon",
    price: 849,
    image:
      "https://app.banani.co/api/flow-image/4%3A5%0ACarbon%20fiber%20smart%20ring%2C%20futuristic%20luxury%20style%2C%20dark%20studio",
    avgRating: 4.6,
    totalRatings: 674,
  },
  {
    id: 7,
    name: "Aurix Platinum",
    price: 1299,
    image:
      "https://app.banani.co/api/flow-image/4%3A5%0APlatinum%20smart%20ring%2C%20premium%20jewelry%20photography%2C%20dark%20background",
    avgRating: 5.0,
    totalRatings: 341,
  },
  {
    id: 8,
    name: "Aurix Lunar",
    price: 749,
    image:
      "https://app.banani.co/api/flow-image/4%3A5%0ASilver%20smart%20ring%20with%20moonlight%20reflection%2C%20luxury%20dark%20theme",
    avgRating: 4.5,
    totalRatings: 598,
  },
  {
    id: 9,
    name: "Aurix Ember",
    price: 899,
    image:
      "https://app.banani.co/api/flow-image/4%3A5%0ARed%20accent%20smart%20ring%2C%20premium%20dark%20presentation%2C%20cinematic",
    avgRating: 4.7,
    totalRatings: 481,
  },
  {
    id: 10,
    name: "Aurix Arctic",
    price: 799,
    image:
      "https://app.banani.co/api/flow-image/4%3A5%0AWhite%20ceramic%20smart%20ring%2C%20minimal%20luxury%20design%2C%20dark%20background",
    avgRating: 4.6,
    totalRatings: 712,
  },
  {
    id: 11,
    name: "Aurix Nova",
    price: 949,
    image:
      "https://app.banani.co/api/flow-image/4%3A5%0AFuturistic%20smart%20ring%20with%20blue%20glow%2C%20luxury%20dark%20presentation",
    avgRating: 4.8,
    totalRatings: 390,
  },
  {
    id: 12,
    name: "Aurix Vertex",
    price: 1150,
    image:
      "https://app.banani.co/api/flow-image/4%3A5%0ATitanium%20black%20smart%20ring%20floating%20display%2C%20premium%20studio%20lighting",
    avgRating: 4.9,
    totalRatings: 528,
  },
];

export const sortOptions:SelectOptionType[]=[
            {
              label: "Price: Low to High",
              value: "price-low",
            },
            {
              label: "Price: High to Low",
              value: "price-high",
            },
            {
              label: "Customer Rating",
              value: "rating",
            },
          ]