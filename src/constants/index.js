import { donut ,icon1,icon2,icon3,invoice, location, menu } from "../assets/icons"
import {food1 , food2, food3, food4, food5, food6, food7, food8, lable1, lable2, lable3, lable4, lable5, lable6, lable7, lable8, meal1, meal2, meal3} from "../assets/images"

export const guidInfo = [
    {
        img : location,
        title : "Select location",
        subTitle : "Choose the location where your food will be delivered.",
    },
    {
        img : menu,
        title : "Choose order",
        subTitle : "Check over hundreds of menus to pick your favorite food.",
    },
    {
        img : invoice,
        title : "Pay advanced",
        subTitle : "It's quick, safe, and simple. Select several methods of payment.",
    },
    {
        img : donut,
        title : "Enjoy meals",
        subTitle : "Food is made and delivered directly to your home.",
    },
]

export const restaurantsInfo = [
    {
        img: food1,
        lable: lable1,
        off: 20,
        speed: "fast",
        name: "Foodworld",
        rate: 46,
        openTime: false
    },
    {
        img: food2,
        lable: lable2,
        off: 15,
        speed: "fast",
        name: "Pizzahub",
        rate: 40,
        openTime: false
    },
    {
        img: food3,
        lable: lable3,
        off: 10,
        speed: "fast",
        name: "Donuts hut",
        rate: 46,
        openTime: true
    },
    {
        img: food4,
        lable: lable4,
        off: 15,
        speed: "fast",
        name: "Donuts hut",
        rate: 50,
        openTime: true
    },
    {
        img: food5,
        lable: lable5,
        off: 10,
        speed: "fast",
        name: "Donuts hut",
        rate: 26,
        openTime: true
    },
    {
        img: food6,
        lable: lable6,
        off: 25,
        speed: "fast",
        name: "Ruby Tuesday",
        rate: 53,
        openTime: true
    },
    {
        img: food7,
        lable: lable7,
        off: 10,
        speed: "fast",
        name: "Kuakata Fried Chicken",
        rate: 45,
        openTime: true
    },
    {
        img: food8,
        lable: lable8,
        off: 10,
        speed: "fast",
        name: "Red Square",
        rate: 35,
        openTime: true
    }, 
]

export const featuresInfo = [
    {
        icon : icon1,
        title : "Daily Discounts",
        div: true
    },
    {
        icon : icon2,
        title : "Live Tracing",
        div: true
    },
    {
        icon : icon3,
        title : "Quick Delivery",
        div: false
    },
]

export const mealCardInfo = [
    {
        img : meal1,
        title: "Best deals Crispy Sandwiches",
        subTitle: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches."
    },
    {
        img : meal2,
        title: "Celebrate  parties with Fried Chicken",
        subTitle: "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken."
    },
    {
        img : meal3,
        title: "Wanna eat hot & spicy Pizza?",
        subTitle: "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals."
    },
]

export const footerLinks = [
    {
        title : "Company",
        links : [
            "About us", "Team", "Careers", "Blog"
        ]
    },
    {
        title : "Contact",
        links : [
            "Help & Support", "Partner with us ", "Ride with us"
        ]
    },
    {
        title : "Legal",
        links : [
            "Terms & Conditions", "Refund & Cancellation", "Privacy Policy", "Cookie Policy"
        ]
    },
]