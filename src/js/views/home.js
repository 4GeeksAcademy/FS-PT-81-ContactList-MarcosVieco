import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Card } from "../component/card.jsx";



export const Home = () => {
	const { store, actions } = useContext(Context)

	return (
		<>
			<div className="container-fluid mt-5">
				<Navbar />
				{store.contacts?.map(el=>(
					<Card 
					key={el.id}
					theId={el.id}
					name={el.name}
					email={el.email}
					phone={el.phone}
					address={el.address}
				/>)
				)}
				{console.log(store.contacts)}
				<Footer />
			</div>

		</>
	)

}
