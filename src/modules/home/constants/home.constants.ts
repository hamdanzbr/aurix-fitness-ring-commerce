type Collection = {
  id: number;
  name: string;
  price: number;
  image: string;
  avgRating: number;
  totalRatings: number;
};

export const collections: Collection[] = [
    {
        id:1,
        name:"Aurix Stealth",
        price:999,
        image:"https://app.banani.co/api/flow-image/4%3A5%0AMatte%20black%20smart%20ring%2C%20clean%20luxury%20presentation%2C%20dark%20background%2C%20highly%20detailed",
        avgRating:4.5,
        totalRatings:120
    },
        {
        id:2,
        name:"Aurix Titanium",
        price:699,
        image:"https://app.banani.co/api/flow-image/4%3A5%0ABrushed%20silver%20titanium%20smart%20ring%2C%20clean%20luxury%20presentation%2C%20dark%20background%2C%20highly%20detailed",
        avgRating:3.5,
        totalRatings:110
    },
        {
        id:3,
        name:"Aurix Gold",
        price:888,
        image:"https://app.banani.co/api/flow-image/4%3A5%0A18k%20gold%20smart%20ring%2C%20clean%20luxury%20presentation%2C%20dark%20background%2C%20highly%20detailed",
        avgRating:4.0,
        totalRatings:101
    },
        {
        id:4,
        name:"Aurix Rose",
        price:777,
        image:"https://app.banani.co/api/flow-image/4%3A5%0ARose%20gold%20smart%20ring%2C%20clean%20luxury%20presentation%2C%20dark%20background%2C%20highly%20detailed",
        avgRating:4.5,
        totalRatings:469
    }
]
