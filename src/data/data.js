import {GiChiliPepper, GiCow, GiChicken, GiPickle} from 'react-icons/gi';
import {FaLeaf, FaCheese, FaFish} from 'react-icons/fa';

export const data = [
  {
    id: 1,
    class: "pizzarollslow",
    name: 'Weirdough',
    calories: "900" ,
    tag: 'fancy',
    image: 'https://res.cloudinary.com/djlggawlm/image/upload/v1666261234/Anita%20Pizza/Pizzaswitch-4_jpknx0.png',
    exactprice: '16,50',
    price: "€€",
    type: "meat" ,
    icon:<GiChicken />,
    text: "Tomato Sauce, black Olives, red & green Bellpepper, red Onions, grilled Chicken Breast & fresh Basil.",
  },
  {
    id: 2,
    name: 'O Salame Mio',
    class: "pizzarollquick",
    calories: "1.500" ,
    tag: 'spicy',
    image: 'https://res.cloudinary.com/djlggawlm/image/upload/v1666261235/Anita%20Pizza/Pizzaswitch-6_ve87nj.png',
    price: '€€€',
    type: "meat" ,
    exactprice: '15,50',
    icon:<GiChiliPepper />,
    text: "Tomato Sauce, Salami, spicy Chorizo, Fior di Latte, Capers, Mozzarella Cheese.",
  },

  {
    id: 3,
    class: "pizzarollslow",
    name: 'Head tomatoes',
    calories: "1.200" ,
    tag: 'veggie',
    image: 'https://res.cloudinary.com/djlggawlm/image/upload/v1666261235/Anita%20Pizza/Pizzaswitch-2_j9jzjj.png',
    exactprice: '13,50',
    price: "€€",
    type: "veggie" ,
    icon:<FaLeaf />,
    text: "A classic! Tomato Sauce, diced Tomatoes, Mozzarella, Basil.",
  },
  {
    id: 4,
    class: "pizzarollslow",
    name: 'Pepperonly',
    calories: "1.350" ,
    tag: 'spicy',
    image: 'https://res.cloudinary.com/djlggawlm/image/upload/v1666261242/Anita%20Pizza/Pizzaswitch_c27l5r.png',
    exactprice: '14,50',
    price: "€€",
    type: "meat" ,
    icon:<GiChiliPepper />,
    text: "Tomato Sauce, Oregano & Cilantro, grilled Chicken Breast, Pickles, Sucuk.",
  },
  {
    id: 5,
    class: "pizzarollquick",
    name: 'Cheesus Crust',
    calories: "1.900" ,
    tag: 'cheesy',
    image: 'https://res.cloudinary.com/djlggawlm/image/upload/v1666261235/Anita%20Pizza/Pizzaswitch-5_v48idb.png',
    exactprice: '11,50',
    price: "€€",
    type: "veggie" ,
    icon:<FaCheese />,
    text: "Sauce Hollandaise, green Bellpeppers, Tomatoes, Cheddar & Mozzarella, Jalapeños.",
  },
  {
    id: 6,
    class: "pizzarollquick",
    name: 'We gotta Ricotta',
    calories: "1.860" ,
    tag: 'fancy',
    image: 'https://res.cloudinary.com/djlggawlm/image/upload/v1666261235/Anita%20Pizza/Pizzaswitch-1_trxsvd.png',
    exactprice: '18,50',
    price: "€€",
    type: "veggie" ,
    icon:<FaLeaf />,
    text: "Tomato sauce, Spinach, grated Garlic, dashes of Ricotta, Pesto Genovese, Arugula.",
  },
  {
    id: 7,
    class: "pizzarollslow",
    name: 'Olive you so much',
    calories: "1.200" ,
    tag: 'veggie',
    image: 'https://res.cloudinary.com/djlggawlm/image/upload/v1666306160/Anita%20Pizza/Pizzaswitch-3_rhc6oo.png',
    exactprice: '16,50',
    price: "€€",
    type: "veggie" ,
    icon:<FaLeaf />,
    text: "Olive oil, garlic, oregano, mozzarella, spring onions and extra-extra olives.",
  },
  {
    id: 8,
    class: "pizzarollquick",
    name: 'Cheese, please!',
    calories: "2.100" ,
    tag: 'cheesy',
    image: 'https://res.cloudinary.com/djlggawlm/image/upload/v1666306160/Anita%20Pizza/Pizzaswitch-2_gvr1uf.png',
    exactprice: '14,50',
    price: "€€",
    type: "veggie" ,
    icon:<FaCheese />,
    text: "Tomato sauce, Onions, Mozzarella, Cheddar and blue cheese, Pistachio Pesto.",
  },
  {
    id: 9,
    class: "pizzarollslow",
    name: 'Pickle me',
    calories: "1.300" ,
    tag: 'extra',
    image: 'https://res.cloudinary.com/djlggawlm/image/upload/v1666523600/Anita%20Pizza/Pizzaswitch_zv3lte.png',
    exactprice: '18,50',
    price: "€€",
    type: "meat" ,
    icon:<GiPickle />,
    text: "Sauce Hollandaise, Salami, Ham, sliced Dill-pickles, Spring onions, Blood Pudding, fresh herbs.",
  },
  {
    id: 10,
    class: "pizzarollslow",
    name: 'Mayo Mess',
    calories: "1.750" ,
    tag: 'weird',
    image: 'https://res.cloudinary.com/djlggawlm/image/upload/v1666306160/Anita%20Pizza/Pizzaswitch-1_pf6mg9.png',
    exactprice: '13,50',
    price: "€€",
    type: "meat" ,
    icon:<FaFish />,
    text: "Honestly, who puts Mayo and Tuna on their pizza? Well, here we go with this wild mess.",
  },
  {
    id: 11,
    class: "pizzarollquick",
    name: 'All the feels',
    calories: "1.500" ,
    tag: 'veggie',
    image: 'https://res.cloudinary.com/djlggawlm/image/upload/v1666450897/Anita%20Pizza/Pizzaswitch_euwnap.png',
    exactprice: '12,50',
    price: "€€",
    type: "veggie" ,
    icon:<FaLeaf />,
    text: "Tomato sauce, red onion, green bellpepper, tomatoes, marinated & grilled pumpkin.",
  },
  {
    id: 12,
    class: "pizzarollquick",
    name: 'Miss Minced',
    calories: "1.990" ,
    tag: 'meaty',
    image: 'https://res.cloudinary.com/djlggawlm/image/upload/v1666307375/Anita%20Pizza/Pizzaswitch_bihpe2.png',
    exactprice: '15,50',
    price: "€€",
    type: "meat" ,
    icon:<GiCow />,
    text: "Tomato sauce, minced Beef, Mozzarella & Cheddar Cheese.",
  }
]
