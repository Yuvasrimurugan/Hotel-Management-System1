import React, { useState } from "react";
import HotelCard from "../../components/customer/HotelCard";
import SearchBar from "../../components/customer/SearchBar";

function Hotels() {

    const hotels = [

        {
            id:1,
            name:"Sea View Resort",
            city:"Chennai",
            price:3500,
            rating:4.5,
            image:"https://images.unsplash.com/photo-1566073771259-6a8506099945"
        },

        {
            id:2,
            name:"Royal Palace",
            city:"Trichy",
            price:2500,
            rating:4.2,
            image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
        },

        {
            id:3,
            name:"Grand Residency",
            city:"Bangalore",
            price:5000,
            rating:5,
            image:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
        },

        {
            id:4,
            name:"Green Valley",
            city:"Coimbatore",
            price:2000,
            rating:4,
            image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
        }

    ];

    const [search,setSearch]=useState("");

    const [city,setCity]=useState("");

    const [minPrice,setMinPrice]=useState("");

    const filteredHotels=hotels.filter((hotel)=>{

        return(

            hotel.name.toLowerCase().includes(search.toLowerCase()) &&

            (city==="" || hotel.city===city) &&

            (minPrice==="" || hotel.price<=Number(minPrice))

        );

    });

    return(

        <div className="container mt-5">

            <h2 className="mb-4">

                Hotels

            </h2>

            <SearchBar

                search={search}

                setSearch={setSearch}

                city={city}

                setCity={setCity}

                minPrice={minPrice}

                setMinPrice={setMinPrice}

            />

            <div className="row">

                {

                    filteredHotels.length>0 ?

                    filteredHotels.map((hotel)=>(

                        <HotelCard

                            key={hotel.id}

                            hotel={hotel}

                        />

                    ))

                    :

                    <h4 className="text-center">

                        No Hotels Found

                    </h4>

                }

            </div>

        </div>

    );

}

export default Hotels;