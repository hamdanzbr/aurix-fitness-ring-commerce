import { SelectOptionType } from "../types/shop.types";

export const filterCategories=[
  {label:"Smart Ring",value:"smart-ring"},
  {label:"Fitness Ring",value:"fitness-ring"},
  {label:"Sleep Monitoring",value:"sleep-monitoring"},
  {label:"Wellness",value:"wellness"}
]

export const filterFeatures=[
  {label:"Heart Rate",value:"heart-rate"},
  {label:"Waterproof",value:"waterproof"},
  {label:"Sleep Tracking",value:"sleep-tracking"},
  {label:"Stress Analysis",value:"stress-analysis"},
  {label:"Long Battery",value:"long-battery"},
]

export const filterFinishes=[
  {label:"Titanium",value:"titanium"},
  {label:"Matte Black",value:"matte-black"},
  {label:"Silver",value:"silver"},
  {label:"Rose Gold",value:"rose-gold"}
]
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