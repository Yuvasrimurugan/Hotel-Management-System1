function FeaturedHotels() {

    const hotels = [
        {
            name:"Grand Palace",
            city:"Chennai"
        },
        {
            name:"Blue Moon",
            city:"Coimbatore"
        },
        {
            name:"Sea View",
            city:"Goa"
        },
        // {
        //     name:"Sea View",
        //     city:"Goa"
        // },
        // {
        //     name:"Sea View",
        //     city:"Goa"
        // }
    ];

    return(

<div className="container mt-3">

<h2 className="text-center mb-4">
Featured Hotels
</h2>

<div className="row">

{
hotels.map((hotel,index)=>(

<div className="col-md-4 mb-2" key={index}>

<div className="card shadow">

<img
src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
height="140"
className="card-img-top"
alt="hotel-logo"
/>

<div className="card-body">

<h5>{hotel.name}</h5>

<p>{hotel.city}</p>

<button className="btn btn-primary">
View Details
</button>

</div>

</div>

</div>

))
}

</div>

</div>

    );
}

export default FeaturedHotels;