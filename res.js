import React from "react";
import ReactDOM from "react-dom/client"
//main component will act as applayout
const AppLayout = () =>{
    return(
        <div className="app">
            <Header />
            <Body />
           
        </div>
    )
}
const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/736x/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.jpg"/>
                 </div>
                 <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Cart</li>
                        <li>Customer</li>
                    </ul>

                 </div>
        </div>
    )
}

const RestaurantCard =(props)=>{
    const {resData} = props;
    const{cloudinaryImageId,name,avgRating,costForTwo,cuisines} = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ 
                resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            
        </div>
    )
}

const styleCard ={
    backgroundColor: "#f0f0f0"
}
const resObj =  [{
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "881204",
                                            "name": "Big Bowl",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_881204.JPG",
                                            "locality": "Tukoganj Main road",
                                            "areaName": "Treasure Island Indore",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Tibetan",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "434792",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "475",
                                            "sla": {
                                                "deliveryTime": 50,
                                                "lastMileTravel": 5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "5.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-15 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹129"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/big-bowl-tukoganj-main-road-treasure-island-indore-rest881204",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "80653",
                                            "name": "Sweet Truth - Cake and Desserts",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/24b0d5d2-89c8-433a-871c-ad0ad7ee79fe_80653.jpg",
                                            "locality": "Raghav Regency",
                                            "areaName": "Sudama Nagar",
                                            "costForTwo": "₹450 for two",
                                            "cuisines": [
                                                "Desserts",
                                                "Ice Cream",
                                                "Bakery",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "4444",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "1.6K+",
                                            "sla": {
                                                "deliveryTime": 35,
                                                "lastMileTravel": 6.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "6.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-15 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "60% OFF",
                                                "subHeader": "UPTO ₹110"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/sweet-truth-cake-and-desserts-raghav-regency-sudama-nagar-rest80653",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "1072626",
                                            "name": "Cheesecake & Co.",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/7f6b41f0-6c0d-4cbe-b42f-06ac566ec970_1072626.jpg",
                                            "locality": "Godbole Colony",
                                            "areaName": "Sudama Nagar",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Desserts"
                                            ],
                                            "avgRating": 4,
                                            "veg": true,
                                            "parentId": "387417",
                                            "avgRatingString": "4.0",
                                            "totalRatingsString": "4",
                                            "sla": {
                                                "deliveryTime": 24,
                                                "lastMileTravel": 4.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "4.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-15 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "subHeader": "UPTO ₹100"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "isNewlyOnboarded": true,
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/cheesecake-and-co-godbole-colony-sudama-nagar-rest1072626",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "1035602",
                                            "name": "Olio - The Wood Fired Pizzeria",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/0d4733bd-4da5-47fb-9675-d5b5b114e955_1035602.jpg",
                                            "locality": "1&2 Kibe Compound",
                                            "areaName": "Madhumilan Square",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Pastas",
                                                "Fast Food",
                                                "Snacks",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "11633",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "349",
                                            "sla": {
                                                "deliveryTime": 46,
                                                "lastMileTravel": 4.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "45-50 mins",
                                                "lastMileTravelString": "4.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-16 05:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹499"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "isNewlyOnboarded": true,
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/olio-the-wood-fired-pizzeria-1-and-2-kibe-compound-madhumilan-square-rest1035602",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "938376",
                                            "name": "Cheesecakes By CakeZone",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/9/51f29a3e-18ee-4d38-b7c1-28244b60ad5f_938376.jpg",
                                            "locality": "GOPUR SQUARE",
                                            "areaName": "SAHJIVAN NAGAR",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Desserts",
                                                "Beverages",
                                                "Ice Cream",
                                                "Sweets",
                                                "Juices",
                                                "Bengali"
                                            ],
                                            "avgRating": 3.3,
                                            "veg": true,
                                            "parentId": "348057",
                                            "avgRatingString": "3.3",
                                            "totalRatingsString": "11",
                                            "sla": {
                                                "deliveryTime": 34,
                                                "lastMileTravel": 5.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "5.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-16 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹69"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/cheesecakes-by-cakezone-gopur-square-sahjivan-nagar-rest938376",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "84070",
                                            "name": "Gurukripa Restaurant - Sarwate",
                                            "cloudinaryImageId": "g5txnz35wlrgbskk3r8y",
                                            "locality": "Sarwate",
                                            "areaName": "South Tukoganj",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Thalis",
                                                "Indian",
                                                "Fast Food",
                                                "Chinese",
                                                "Beverages",
                                                "Desserts",
                                                "Jain",
                                                "Punjabi"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "92204",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "126K+",
                                            "sla": {
                                                "deliveryTime": 34,
                                                "lastMileTravel": 4.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "4.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-15 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "subHeader": "UPTO ₹100"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/gurukripa-restaurant-sarwate-sarwate-south-tukoganj-rest84070",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "359782",
                                            "name": "Grameen Kulfi",
                                            "cloudinaryImageId": "wsm4rrcc2ed2ves9kvoi",
                                            "locality": "SHRIKRISNA CHAMBER",
                                            "areaName": "DHENU MARKET",
                                            "costForTwo": "₹120 for two",
                                            "cuisines": [
                                                "Ice Cream",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.8,
                                            "veg": true,
                                            "parentId": "12175",
                                            "avgRatingString": "4.8",
                                            "totalRatingsString": "599",
                                            "sla": {
                                                "deliveryTime": 32,
                                                "lastMileTravel": 5.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "5.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-15 23:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹125 OFF",
                                                "subHeader": "ABOVE ₹399",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/grameen-kulfi-shrikrisna-chamber-dhenu-market-rest359782",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "103357",
                                            "name": "Gurukripa Southtukoganj (Dutt)",
                                            "cloudinaryImageId": "wbhvshhcwdzvrvuxfpsq",
                                            "locality": "South Tukoganj",
                                            "areaName": "South Tukoganj",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Chinese",
                                                "Snacks",
                                                "Thalis",
                                                "Desserts",
                                                "Punjabi",
                                                "Beverages",
                                                "Indian",
                                                "Jain"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "92206",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "71K+",
                                            "sla": {
                                                "deliveryTime": 36,
                                                "lastMileTravel": 5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "35-40 mins",
                                                "lastMileTravelString": "5.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-15 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "subHeader": "UPTO ₹100"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.1",
                                                    "ratingCount": "13K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/gurukripa-southtukoganj-dutt-south-tukoganj-rest103357",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "174979",
                                            "name": "Karnawat Bhojan Prasadi",
                                            "cloudinaryImageId": "nvebstizpqoxu4crvyqo",
                                            "locality": "Kalani Nagar",
                                            "areaName": "Sarafa",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Chinese",
                                                "South Indian",
                                                "Fast Food",
                                                "Beverages",
                                                "Street Food"
                                            ],
                                            "avgRating": 4.2,
                                            "veg": true,
                                            "parentId": "9466",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "2.9K+",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 2.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-15 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "30% OFF",
                                                "subHeader": "UPTO ₹75"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/karnawat-bhojan-prasadi-kalani-nagar-sarafa-rest174979",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "148404",
                                            "name": "Om Namkeen",
                                            "cloudinaryImageId": "okkh43ib3xm733hebgus",
                                            "locality": "Jawahar Marg",
                                            "areaName": "Lodhipura",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Snacks"
                                            ],
                                            "avgRating": 4.8,
                                            "veg": true,
                                            "parentId": "7861",
                                            "avgRatingString": "4.8",
                                            "totalRatingsString": "25K+",
                                            "sla": {
                                                "deliveryTime": 14,
                                                "lastMileTravel": 1.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "1.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-15 21:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                                                        "description": "bolt!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/om-namkeen-jawahar-marg-lodhipura-rest148404",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "199639",
                                            "name": "Apna Sweets",
                                            "cloudinaryImageId": "kt09zylanc2qd5eg116a",
                                            "locality": "Bhakt Prahlad Nagar",
                                            "areaName": "Bhakt Prahlad Nagar",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Sweets",
                                                "Thali",
                                                "Desserts",
                                                "South Indian",
                                                "Snacks",
                                                "Bakery"
                                            ],
                                            "avgRating": 4.7,
                                            "veg": true,
                                            "parentId": "8960",
                                            "avgRatingString": "4.7",
                                            "totalRatingsString": "16K+",
                                            "sla": {
                                                "deliveryTime": 15,
                                                "lastMileTravel": 1.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "1.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-15 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹75 OFF",
                                                "subHeader": "ABOVE ₹149",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.1",
                                                    "ratingCount": "1.7K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/apna-sweets-bhakt-prahlad-nagar-rest199639",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "882432",
                                            "name": "Theobroma",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/ed7d2ac3-3660-48e4-b7d4-b8a4a0f5909a_882432.jpg",
                                            "locality": "Near Janjeerwala Square",
                                            "areaName": "Darshan Mall, Race Course Rd",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Desserts",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "1040",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "852",
                                            "sla": {
                                                "deliveryTime": 35,
                                                "lastMileTravel": 6.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "6.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-16 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/theobroma-near-janjeerwala-square-darshan-mall-race-course-rd-rest882432",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "74959",
                                            "name": "Hotel Rajhans",
                                            "cloudinaryImageId": "fszewn7vnsi1ydlpsulu",
                                            "locality": "Sudama Nagar",
                                            "areaName": "Sarafa",
                                            "costForTwo": "₹500 for two",
                                            "cuisines": [
                                                "Thalis",
                                                "Rajasthani",
                                                "Indian"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "101336",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "8.7K+",
                                            "sla": {
                                                "deliveryTime": 19,
                                                "lastMileTravel": 2.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "2.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-15 21:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.2",
                                                    "ratingCount": "1.8K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/hotel-rajhans-sudama-nagar-sarafa-rest74959",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "1063280",
                                            "name": "Anna Dosa Corner",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/14/04c6b17b-632a-47a7-a9b3-d84c68efdd47_1063280.jpg",
                                            "locality": "Sarafa",
                                            "areaName": "Sarafa",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Snacks",
                                                "Fast Food",
                                                "Cafe"
                                            ],
                                            "veg": true,
                                            "parentId": "33776",
                                            "avgRatingString": "NEW",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 2.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-15 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "40% OFF",
                                                "subHeader": "UPTO ₹80"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "isNewlyOnboarded": true,
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/anna-dosa-corner-sarafa-rest1063280",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "292524",
                                            "name": "Agrawal Sweets",
                                            "cloudinaryImageId": "ph5fgabgg3iqxlut4x34",
                                            "locality": "Dravid Nagar",
                                            "areaName": "Sudama Nagar",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Sweets",
                                                "Bakery",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.7,
                                            "parentId": "6374",
                                            "avgRatingString": "4.7",
                                            "totalRatingsString": "344",
                                            "sla": {
                                                "deliveryTime": 17,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-15 20:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹75 OFF",
                                                "subHeader": "ABOVE ₹199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-e8b03714-b511-4f91-9c1d-cafce16bd88d"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/indore/agrawal-sweets-dravid-nagar-sudama-nagar-rest292524",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    }
]

const Body =()=>{
    return <div className="body">
        <div className="res-search">
            Search
        </div>
        <div className="res-container">
          {
            resObj.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData ={restaurant}/>
            ))
          }
            
 {/* restaurant card banega here */}
        </div>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
