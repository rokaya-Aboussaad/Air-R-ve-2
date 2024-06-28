import React from 'react';
import './Reservations.css';

const reservationsData = [
  {
    hotelName: "Four Seasons Hotel",
    address: "Boulevard de la Corniche, Casablanca 20050, Maroc",
    reservationDate: "2024-06-25",
    room: "Chambre Familiale Deluxe",
    totalPrice: "10000 MAD",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOxGaXh2b_CGllinv6hAcxkmaHjyMX9kHFQ&s"
  },


  /*
  {
    hotelName: "Sofitel Marrakech Lounge and Spa",
    address: "Rue Harroun Errachid, Marrakech 40000, Maroc",
    reservationDate: "2024-08-15",
    room: "Suite Deluxe",
    totalPrice: "6500 MAD",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArm17YxXtAg1PWF0gfA7_056aGE3IxBHGNg&s"
  },
  {
    hotelName: "Hyatt Regency",
    address: "Place des Nations Unies, Casablanca 20000, Maroc",
    reservationDate: "2023-08-05",
    room: "Chambre Double",
    totalPrice: "2000 MAD",
    imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/480469795.jpg?k=af11037c6acbf8dcafd1e83488276b543959d53e365ac00a52fbbc5031489200&o=&hp=1"
  }*/
];

const Reservations = () => {
  return (
    <div className="container">
      <h1 className="title">Liste des Réservations</h1>
      {reservationsData.map((reservation, index) => (
        <div className="reservation-item" key={index}>
          <img className="hotel-image" src={reservation.imageUrl} alt={`Photo de ${reservation.hotelName}`} />
          <div className="reservation-details">
            <h2 className="hotel-name">{reservation.hotelName}</h2>
            <p className="reservation-detail">Adresse: {reservation.address}</p>
            <p className="reservation-detail">Date de réservation: {reservation.reservationDate}</p>
            <p className="reservation-detail">Chambre: {reservation.room}</p>
            <p className="reservation-detail">Prix total: {reservation.totalPrice}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reservations;
