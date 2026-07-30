function Dashboard(){


    const user = JSON.parse(
        localStorage.getItem("user")
    );



    return(

        <div className="container py-5">


            <div className="card shadow p-5">


                <h1>
                    Welcome {user?.firstname}
                </h1>


                <h3>
                    Hotel Management Dashboard
                </h3>


                <p>
                    Email : {user?.email}
                </p>


            </div>


        </div>

    );

}


export default Dashboard;