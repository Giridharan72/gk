// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import '../App.css';

// const Billing = () => {
//   const location = useLocation();
//   const { bookingDetails, customerDetails } = location.state;

//   const {
//     selectedSeats,
//     bus,
//     numPassengers,
//     discount,
//     discountAmount,
//     GST,
//     cartTotal
//   } = bookingDetails;

//   return (
//     <div className="container">
//       <h2>Booking Confirmation</h2>
//       <hr />
//       {customerDetails && (
//         <div>
//           <h4>Customer Name: {customerDetails.name}</h4>
//           <p>Phone Number: {customerDetails.phoneNumber}</p>
//           <p>Email: {customerDetails.email}</p>
//           <p>Address: {customerDetails.address}</p>
//         </div>
//       )}
//       <hr />
//       <div>
//         <h3>Bus Details:</h3>
//         <p><strong>Bus Name:</strong> {bus.busName}</p>
//         <p><strong>Bus Number:</strong> {bus.busNumber}</p>
//         <p><strong>Route:</strong> {bus.from} - {bus.to}</p>
//         <p><strong>Type:</strong> {bus.busType}</p>
//         <p><strong>Departure:</strong> {new Date(bus.departure).toLocaleString()}</p>
//         <p><strong>Arrival:</strong> {new Date(bus.arrival).toLocaleString()}</p>
//         <p><strong>Fare:</strong> ₹ {bus.fare.toLocaleString()}</p>
//         <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
//         <p><strong>Number of Passengers:</strong> {numPassengers}</p>
//       </div>
//       <hr />
//       <div className="totals">
//         <h3>Discount: ₹ {discountAmount.toLocaleString()}</h3>
//         <h3>GST (5%): ₹ {GST.toLocaleString()}</h3>
//         <h2>Total: ₹ {cartTotal.toLocaleString()}</h2>
//       </div>
//     </div>
//   );
// };

// export default Billing;


// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import '../App.css';

// const Billing = () => {
//   const location = useLocation();
//   const { bookingDetails, customerDetails } = location.state;

//   const {
//     selectedSeats,
//     bus,
//     numPassengers,
//     discountAmount,
//     GST,
//     cartTotal
//   } = bookingDetails;

//   const [passengerDetails, setPassengerDetails] = useState(
//     Array(numPassengers).fill({ name: '', age: '', gender: '' })
//   );

//   const handlePassengerChange = (index, field, value) => {
//     const updatedDetails = [...passengerDetails];
//     updatedDetails[index][field] = value;
//     setPassengerDetails(updatedDetails);
//   };

//   const handleConfirmBooking = () => {
//     console.log('Booking confirmed with the following details:');
//     console.log('Passenger Details:', passengerDetails);
//     // Add your booking confirmation logic here
//   };

//   return (
//     <div className="container">
//       <h2>Booking Confirmation</h2>
//       <hr />
//       {customerDetails && (
//         <div>
//           <h4>Customer Name: {customerDetails.name}</h4>
//           <p>Phone Number: {customerDetails.phoneNumber}</p>
//           <p>Email: {customerDetails.email}</p>
//           <p>Address: {customerDetails.address}</p>
//         </div>
//       )}
//       <hr />
//       <div>
//         <h3>Bus Details:</h3>
//         <p><strong>Bus Name:</strong> {bus.busName}</p>
//         <p><strong>Bus Number:</strong> {bus.busNumber}</p>
//         <p><strong>Route:</strong> {bus.from} - {bus.to}</p>
//         <p><strong>Type:</strong> {bus.busType}</p>
//         <p><strong>Departure:</strong> {new Date(bus.departure).toLocaleString()}</p>
//         <p><strong>Arrival:</strong> {new Date(bus.arrival).toLocaleString()}</p>
//         <p><strong>Fare:</strong> ₹ {bus.fare.toLocaleString()}</p>
//         <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
//         <p><strong>Number of Passengers:</strong> {numPassengers}</p>
//       </div>
//       <hr />
//       <div>
//         <h3>Passenger Details:</h3>
//         {passengerDetails.map((passenger, index) => (
//           <div key={index} className="passenger-form">
//             <h4>Passenger {index + 1}</h4>
//             <div className="form-group">
//               <label htmlFor={`name-${index}`}>Name</label>
//               <input
//                 type="text"
//                 id={`name-${index}`}
//                 className="form-control"
//                 value={passenger.name}
//                 onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`age-${index}`}>Age</label>
//               <input
//                 type="number"
//                 id={`age-${index}`}
//                 className="form-control"
//                 value={passenger.age}
//                 onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`gender-${index}`}>Gender</label>
//               <select
//                 id={`gender-${index}`}
//                 className="form-control"
//                 value={passenger.gender}
//                 onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//             <hr />
//           </div>
//         ))}
//       </div>
//       <div className="totals">
//         <h3>Discount: ₹ {discountAmount.toLocaleString()}</h3>
//         <h3>GST (5%): ₹ {GST.toLocaleString()}</h3>
//         <h2>Total: ₹ {cartTotal.toLocaleString()}</h2>
//       </div>
//       <button className="btn btn-primary" onClick={handleConfirmBooking}>
//         Confirm Booking
//       </button>
//     </div>
//   );
// };

// export default Billing;


// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import '../App.css';

// const Billing = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bookingDetails, customerDetails } = location.state;

//   const {
//     selectedSeats,
//     bus,
//     numPassengers,
//     discountAmount,
//     GST,
//     cartTotal
//   } = bookingDetails;

//   const [passengerDetails, setPassengerDetails] = useState(
//     Array.from({ length: numPassengers }, () => ({ name: '', age: '', gender: '' }))
//   );

//   const handlePassengerChange = (index, field, value) => {
//     const updatedDetails = passengerDetails.map((passenger, i) =>
//       i === index ? { ...passenger, [field]: value } : passenger
//     );
//     setPassengerDetails(updatedDetails);
//   };

//   const validatePassengerDetails = () => {
//     for (const passenger of passengerDetails) {
//       if (!passenger.name || !passenger.age || !passenger.gender) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const handleConfirmBooking = async () => {
//     if (!validatePassengerDetails()) {
//       alert('Please fill in all passenger details.');
//       return;
//     }

//     const bookingData = {
//       customerDetails,
//       busId: bus.busId,
//       selectedSeats,
//       passengerDetails,
//       discountAmount,
//       GST,
//       cartTotal,
//     };

//     try {
//       const response = await fetch('https://your-backend-api.com/api/bookings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Booking confirmed:', data);
//         alert('Booking confirmed successfully!');
//         navigate('/');
//       } else {
//         const errorData = await response.json();
//         console.error('Booking error:', errorData);
//         alert('Failed to confirm booking. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while confirming the booking. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Booking Confirmation</h2>
//       <hr />
//       {customerDetails && (
//         <div>
//           <h4>Customer Name: {customerDetails.name}</h4>
//           <p>Phone Number: {customerDetails.phoneNumber}</p>
//           <p>Email: {customerDetails.email}</p>
//           <p>Address: {customerDetails.address}</p>
//         </div>
//       )}
//       <hr />
//       <div>
//         <h3>Bus Details:</h3>
//         <p><strong>Bus Name:</strong> {bus.busName}</p>
//         <p><strong>Bus Number:</strong> {bus.busNumber}</p>
//         <p><strong>Route:</strong> {bus.from} - {bus.to}</p>
//         <p><strong>Type:</strong> {bus.busType}</p>
//         <p><strong>Departure:</strong> {new Date(bus.departure).toLocaleString()}</p>
//         <p><strong>Arrival:</strong> {new Date(bus.arrival).toLocaleString()}</p>
//         <p><strong>Fare:</strong> ₹ {bus.fare.toLocaleString()}</p>
//         <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
//         <p><strong>Number of Passengers:</strong> {numPassengers}</p>
//       </div>
//       <hr />
//       <div>
//         <h3>Passenger Details:</h3>
//         {passengerDetails.map((passenger, index) => (
//           <div key={index} className="passenger-form">
//             <h4>Passenger {index + 1}</h4>
//             <div className="form-group">
//               <label htmlFor={`name-${index}`}>Name</label>
//               <input
//                 type="text"
//                 id={`name-${index}`}
//                 className="form-control"
//                 value={passenger.name}
//                 onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`age-${index}`}>Age</label>
//               <input
//                 type="number"
//                 id={`age-${index}`}
//                 className="form-control"
//                 value={passenger.age}
//                 onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`gender-${index}`}>Gender</label>
//               <select
//                 id={`gender-${index}`}
//                 className="form-control"
//                 value={passenger.gender}
//                 onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//             <hr />
//           </div>
//         ))}
//       </div>
//       <div className="totals">
//         <h3>Discount: ₹ {discountAmount.toLocaleString()}</h3>
//         <h3>GST (5%): ₹ {GST.toLocaleString()}</h3>
//         <h2>Total: ₹ {cartTotal.toLocaleString()}</h2>
//       </div>
//       <button className="btn btn-primary" onClick={handleConfirmBooking}>
//         Confirm Booking
//       </button>
//     </div>
//   );
// };

// export default Billing;


// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import '../App.css';

// const Billing = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bookingDetails, customerDetails } = location.state;

//   const {
//     selectedSeats,
//     bus,
//     numPassengers,
//     discountAmount,
//     GST,
//     cartTotal
//   } = bookingDetails;

//   const [passengerDetails, setPassengerDetails] = useState(
//     Array.from({ length: numPassengers }, () => ({ name: '', age: '', gender: '' }))
//   );

//   const handlePassengerChange = (index, field, value) => {
//     const updatedDetails = passengerDetails.map((passenger, i) =>
//       i === index ? { ...passenger, [field]: value } : passenger
//     );
//     setPassengerDetails(updatedDetails);
//   };

//   const validatePassengerDetails = () => {
//     for (const passenger of passengerDetails) {
//       if (!passenger.name || !passenger.age || !passenger.gender) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const handleConfirmBooking = async () => {
//     if (!validatePassengerDetails()) {
//       alert('Please fill in all passenger details.');
//       return;
//     }

//     const bookingData = {
//       customer_name: customerDetails.name,
//       phone_number: customerDetails.phoneNumber,
//       email: customerDetails.email,
//       address: customerDetails.address,
//       bus_id: bus.busId,
//       selected_seats: selectedSeats,
//       passenger_details: passengerDetails,
//       discount_amount: discountAmount,
//       gst: GST,
//       cart_total: cartTotal,
//       route: `${bus.from} - ${bus.to}`,
//       bus_type: bus.busType
//     };

//     try {
//       const response = await fetch('http://localhost:3000/booking', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Booking confirmed:', data);
//         alert('Booking confirmed successfully!');
//         navigate('/');
//       } else {
//         const errorData = await response.json();
//         console.error('Booking error:', errorData);
//         alert('Failed to confirm booking. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while confirming the booking. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Booking Confirmation</h2>
//       <hr />
//       {customerDetails && (
//         <div>
//           <h4>Customer Name: {customerDetails.name}</h4>
//           <p>Phone Number: {customerDetails.phoneNumber}</p>
//           <p>Email: {customerDetails.email}</p>
//           <p>Address: {customerDetails.address}</p>
//         </div>
//       )}
//       <hr />
//       <div>
//         <h3>Bus Details:</h3>
//         <p><strong>Bus Name:</strong> {bus.busName}</p>
//         <p><strong>Bus Number:</strong> {bus.busNumber}</p>
//         <p><strong>Route:</strong> {bus.from} - {bus.to}</p>
//         <p><strong>Type:</strong> {bus.busType}</p>
//         <p><strong>Departure:</strong> {new Date(bus.departure).toLocaleString()}</p>
//         <p><strong>Arrival:</strong> {new Date(bus.arrival).toLocaleString()}</p>
//         <p><strong>Fare:</strong> ₹ {bus.fare.toLocaleString()}</p>
//         <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
//         <p><strong>Number of Passengers:</strong> {numPassengers}</p>
//       </div>
//       <hr />
//       <div>
//         <h3>Passenger Details:</h3>
//         {passengerDetails.map((passenger, index) => (
//           <div key={index} className="passenger-form">
//             <h4>Passenger {index + 1}</h4>
//             <div className="form-group">
//               <label htmlFor={`name-${index}`}>Name</label>
//               <input
//                 type="text"
//                 id={`name-${index}`}
//                 className="form-control"
//                 value={passenger.name}
//                 onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`age-${index}`}>Age</label>
//               <input
//                 type="number"
//                 id={`age-${index}`}
//                 className="form-control"
//                 value={passenger.age}
//                 onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`gender-${index}`}>Gender</label>
//               <select
//                 id={`gender-${index}`}
//                 className="form-control"
//                 value={passenger.gender}
//                 onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//             <hr />
//           </div>
//         ))}
//       </div>
//       <div className="totals">
//         <h3>Discount: ₹ {discountAmount.toLocaleString()}</h3>
//         <h3>GST (5%): ₹ {GST.toLocaleString()}</h3>
//         <h2>Total: ₹ {cartTotal.toLocaleString()}</h2>
//       </div>
//       <button className="btn btn-primary" onClick={handleConfirmBooking}>
//         Confirm Booking
//       </button>
//     </div>
//   );
// };

// export default Billing;


// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import '../App.css';

// const Billing = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bookingDetails, customerDetails } = location.state || {};

//   const {
//     selectedSeats,
//     bus,
//     numPassengers,
//     discountAmount,
//     GST,
//     cartTotal
//   } = bookingDetails || {};

//   const [passengerDetails, setPassengerDetails] = useState(
//     Array.from({ length: numPassengers || 0 }, () => ({ name: '', age: '', gender: '' }))
//   );

//   const handlePassengerChange = (index, field, value) => {
//     const updatedDetails = passengerDetails.map((passenger, i) =>
//       i === index ? { ...passenger, [field]: value } : passenger
//     );
//     setPassengerDetails(updatedDetails);
//   };

//   const validatePassengerDetails = () => {
//     for (const passenger of passengerDetails) {
//       if (!passenger.name || !passenger.age || !passenger.gender) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const handleConfirmBooking = async () => {
//     if (!validatePassengerDetails()) {
//       alert('Please fill in all passenger details.');
//       return;
//     }

//     const bookingData = {
//       customer_name: customerDetails?.name || 'N/A',
//       phone_number: customerDetails?.phoneNumber || 'N/A',
//       email: customerDetails?.email || 'N/A',
//       address: customerDetails?.address || 'N/A',
//       bus_id: bus?.busId || 'N/A',
//       selected_seats: selectedSeats || [],
//       passenger_details: passengerDetails,
//       discount_amount: discountAmount || 0,
//       gst: GST || 0,
//       cart_total: cartTotal || 0,
//       route: bus ? `${bus.from} - ${bus.to}` : 'N/A',
//       bus_type: bus?.busType || 'N/A'
//     };

//     try {
//       const response = await fetch('http://localhost:3000/booking', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Booking confirmed:', data);
//         alert('Booking confirmed successfully!');
//         navigate('/');
//       } else {
//         const errorData = await response.json();
//         console.error('Booking error:', errorData);
//         alert('Failed to confirm booking. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while confirming the booking. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Booking Confirmation</h2>
//       <hr />
//       {customerDetails && (
//         <div>
//           <h4>Customer Name: {customerDetails.name}</h4>
//           <p>Phone Number: {customerDetails.phoneNumber}</p>
//           <p>Email: {customerDetails.email}</p>
//           <p>Address: {customerDetails.address}</p>
//         </div>
//       )}
//       <hr />
//       {bus && (
//         <div>
//           <h3>Bus Details:</h3>
//           <p><strong>Bus Name:</strong> {bus.busName}</p>
//           <p><strong>Bus Number:</strong> {bus.busNumber}</p>
//           <p><strong>Route:</strong> {bus.from} - {bus.to}</p>
//           <p><strong>Type:</strong> {bus.busType}</p>
//           <p><strong>Departure:</strong> {new Date(bus.departure).toLocaleString()}</p>
//           <p><strong>Arrival:</strong> {new Date(bus.arrival).toLocaleString()}</p>
//           <p><strong>Fare:</strong> ₹ {bus.fare.toLocaleString()}</p>
//           <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
//           <p><strong>Number of Passengers:</strong> {numPassengers}</p>
//         </div>
//       )}
//       <hr />
//       <div>
//         <h3>Passenger Details:</h3>
//         {passengerDetails.map((passenger, index) => (
//           <div key={index} className="passenger-form">
//             <h4>Passenger {index + 1}</h4>
//             <div className="form-group">
//               <label htmlFor={`name-${index}`}>Name</label>
//               <input
//                 type="text"
//                 id={`name-${index}`}
//                 className="form-control"
//                 value={passenger.name}
//                 onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`age-${index}`}>Age</label>
//               <input
//                 type="number"
//                 id={`age-${index}`}
//                 className="form-control"
//                 value={passenger.age}
//                 onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor={`gender-${index}`}>Gender</label>
//               <select
//                 id={`gender-${index}`}
//                 className="form-control"
//                 value={passenger.gender}
//                 onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//             <hr />
//           </div>
//         ))}
//       </div>
//       <div className="totals">
//         <h3>Discount: ₹ {discountAmount ? discountAmount.toLocaleString() : 0}</h3>
//         <h3>GST (5%): ₹ {GST ? GST.toLocaleString() : 0}</h3>
//         <h2>Total: ₹ {cartTotal ? cartTotal.toLocaleString() : 0}</h2>
//       </div>
//       <button className="btn btn-primary" onClick={handleConfirmBooking}>
//         Confirm Booking
//       </button>
//     </div>
//   );
// };

// export default Billing;


// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import '../App.css';

// const Billing = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bookingDetails, customerDetails } = location.state || {};

//   const {
//     selectedSeats,
//     bus,
//     numPassengers,
//     discountAmount,
//     GST,
//     cartTotal
//   } = bookingDetails || {};

//   const [passengerDetails, setPassengerDetails] = useState(
//     Array.from({ length: numPassengers || 0 }, () => ({ name: '', age: '', gender: '' }))
//   );

//   const handlePassengerChange = (index, field, value) => {
//     const updatedDetails = passengerDetails.map((passenger, i) =>
//       i === index ? { ...passenger, [field]: value } : passenger
//     );
//     setPassengerDetails(updatedDetails);
//   };

//   const validatePassengerDetails = () => {
//     for (const passenger of passengerDetails) {
//       if (!passenger.name || !passenger.age || !passenger.gender) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const handleConfirmBooking = async () => {
//     if (!validatePassengerDetails()) {
//       alert('Please fill in all passenger details.');
//       return;
//     }

//     const bookingData = {
//       customer_name: customerDetails?.name || 'N/A',
//       phone_number: customerDetails?.phoneNumber || 'N/A',
//       email: customerDetails?.email || 'N/A',
//       address: customerDetails?.address || 'N/A',
//       bus_id: bus?.busId || 'N/A',
//       selected_seats: selectedSeats || [],
//       passenger_details: passengerDetails,
//       discount_amount: discountAmount || 0,
//       gst: GST || 0,
//       cart_total: cartTotal || 0,
//       route: bus ? `${bus.from} - ${bus.to}` : 'N/A',
//       bus_type: bus?.busType || 'N/A'
//     };

//     try {
//       const response = await fetch('http://localhost:3000/booking', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Booking confirmed:', data);
//         generatePDF(bookingData); // Call PDF generation function
//         alert('Booking confirmed successfully!');
//         navigate('/');
//       } else {
//         const errorData = await response.json();
//         console.error('Booking error:', errorData);
//         alert('Failed to confirm booking. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while confirming the booking. Please try again.');
//     }
//   };

//   const generatePDF = (bookingData) => {
//     const doc = new jsPDF();
    
//     doc.setFontSize(22);
//     doc.text('Booking Confirmation', 20, 20);

//     // Customer details
//     doc.setFontSize(16);
//     doc.text(`Customer Name: ${bookingData.customer_name}`, 20, 40);
//     doc.text(`Phone Number: ${bookingData.phone_number}`, 20, 50);
//     doc.text(`Email: ${bookingData.email}`, 20, 60);
//     doc.text(`Address: ${bookingData.address}`, 20, 70);

//     // Bus details
//     doc.setFontSize(16);
//     doc.text('Bus Details:', 20, 90);
//     doc.text(`Bus Name: ${bus.busName}`, 20, 100);
//     doc.text(`Bus Number: ${bus.busNumber}`, 20, 110);
//     doc.text(`Route: ${bookingData.route}`, 20, 120);
//     doc.text(`Type: ${bus.busType}`, 20, 130);
//     doc.text(`Departure: ${new Date(bus.departure).toLocaleString()}`, 20, 140);
//     doc.text(`Arrival: ${new Date(bus.arrival).toLocaleString()}`, 20, 150);
//     doc.text(`Fare: ₹ ${bus.fare.toLocaleString()}`, 20, 160);
//     doc.text(`Selected Seats: ${bookingData.selected_seats.join(', ')}`, 20, 170);
//     doc.text(`Number of Passengers: ${bookingData.passenger_details.length}`, 20, 180);

//     // Passenger details
//     doc.setFontSize(16);
//     doc.text('Passenger Details:', 20, 200);
//     bookingData.passenger_details.forEach((passenger, index) => {
//       const yPos = 210 + (index * 40);
//       doc.text(`Passenger ${index + 1}`, 20, yPos);
//       doc.text(`Name: ${passenger.name}`, 20, yPos + 10);
//       doc.text(`Age: ${passenger.age}`, 20, yPos + 20);
//       doc.text(`Gender: ${passenger.gender}`, 20, yPos + 30);
//     });

//     // Totals
//     doc.setFontSize(18);
//     doc.text(`Discount: ₹ ${bookingData.discount_amount.toLocaleString()}`, 20, 350);
//     doc.text(`GST (5%): ₹ ${bookingData.gst.toLocaleString()}`, 20, 370);
//     doc.text(`Total: ₹ ${bookingData.cart_total.toLocaleString()}`, 20, 390);

//     // Save PDF
//     doc.save(`BookingConfirmation_${bookingData.customer_name}.pdf`);
//   };

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import jspdf-autotable
import '../App.css';

const Billing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails, customerDetails } = location.state || {};

  const {
    selectedSeats,
    bus,
    numPassengers,
    discountAmount,
    GST,
    cartTotal
  } = bookingDetails || {};

  const [passengerDetails, setPassengerDetails] = useState(
    Array.from({ length: numPassengers || 0 }, () => ({ name: '', age: '', gender: '' }))
  );

  const handlePassengerChange = (index, field, value) => {
    const updatedDetails = passengerDetails.map((passenger, i) =>
      i === index ? { ...passenger, [field]: value } : passenger
    );
    setPassengerDetails(updatedDetails);
  };

  const validatePassengerDetails = () => {
    for (const passenger of passengerDetails) {
      if (!passenger.name || !passenger.age || !passenger.gender) {
        return false;
      }
    }
    return true;
  };

  const handleConfirmBooking = async () => {
    if (!validatePassengerDetails()) {
      alert('Please fill in all passenger details.');
      return;
    }

    const bookingData = {
      customer_name: customerDetails?.name || 'N/A',
      phone_number: customerDetails?.phoneNumber || 'N/A',
      email: customerDetails?.email || 'N/A',
      address: customerDetails?.address || 'N/A',
      bus_id: bus?.busId || 'N/A',
      selected_seats: selectedSeats || [],
      passenger_details: passengerDetails,
      discount_amount: discountAmount || 0,
      gst: GST || 0,
      cart_total: cartTotal || 0,
      route: bus ? `${bus.from} - ${bus.to}` : 'N/A',
      bus_type: bus?.busType || 'N/A'
    };

    try {
      const response = await fetch('http://localhost:3000/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Booking confirmed:', data);
        generatePDF(bookingData); // Call PDF generation function
        alert('Booking confirmed successfully!');
        navigate('/');
      } else {
        const errorData = await response.json();
        console.error('Booking error:', errorData);
        alert('Failed to confirm booking. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while confirming the booking. Please try again.');
    }
  };

  const generatePDF = (bookingData) => {
    const doc = new jsPDF();

    // Add header with company name and invoice title
    doc.setFontSize(22);
    doc.text('Journey -Jet', 105, 20, 'center');
    doc.setFontSize(18);
    doc.text('Invoice', 105, 35, 'center');

    // Customer details section
    doc.setFontSize(12);
    doc.text(`Customer Name: ${bookingData.customer_name}`, 20, 50);
    doc.text(`Phone Number: ${bookingData.phone_number}`, 20, 60);
    doc.text(`Email: ${bookingData.email}`, 20, 70);
    doc.text(`Address: ${bookingData.address}`, 20, 80);

    // Bus details section
    doc.text('Bus Details:', 20, 100);
    doc.text(`Bus Name: ${bus.busName}`, 20, 110);
    doc.text(`Bus Number: ${bus.busNumber}`, 20, 120);
    doc.text(`Route: ${bookingData.route}`, 20, 130);
    doc.text(`Type: ${bus.busType}`, 20, 140);
    doc.text(`Departure: ${new Date(bus.departure).toLocaleString()}`, 20, 150);
    doc.text(`Arrival: ${new Date(bus.arrival).toLocaleString()}`, 20, 160);
    doc.text(`Fare: ₹ ${bus.fare.toLocaleString()}`, 20, 170);
    doc.text(`Selected Seats: ${bookingData.selected_seats.join(', ')}`, 20, 180);
    doc.text(`Number of Passengers: ${bookingData.passenger_details.length}`, 20, 190);

    // Passenger details table
    doc.autoTable({
      startY: 200,
      head: [['Passenger', 'Name', 'Age', 'Gender']],
      body: bookingData.passenger_details.map((passenger, index) => [
        `Passenger ${index + 1}`,
        passenger.name,
        passenger.age,
        passenger.gender
      ]),
      didDrawPage: (data) => {
        // Add page numbers
        doc.setFontSize(12);
        doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
      }
    });

    // Totals section
    doc.setFontSize(16);
    doc.text(`Discount: ₹ ${bookingData.discount_amount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
    doc.text(`GST (5%): ₹ ${bookingData.gst.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
    doc.text(`Total: ₹ ${bookingData.cart_total.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);

    // Save PDF with a professional filename
    doc.save(`JourneyJet_Invoice_${bookingData.customer_name.replace(/\s/g, '_')}.pdf`);
  };
   return (
    <div className="container">
      <h2>Booking Confirmation</h2>
      <hr />
      {customerDetails && (
        <div>
          <h4>Customer Name: {customerDetails.name}</h4>
          <p>Phone Number: {customerDetails.phoneNumber}</p>
          <p>Email: {customerDetails.email}</p>
          <p>Address: {customerDetails.address}</p>
        </div>
      )}
      <hr />
      {bus && (
        <div>
          <h3>Bus Details:</h3>
          <p><strong>Bus Name:</strong> {bus.busName}</p>
          <p><strong>Bus Number:</strong> {bus.busNumber}</p>
          <p><strong>Route:</strong> {bus.from} - {bus.to}</p>
          <p><strong>Type:</strong> {bus.busType}</p>
          <p><strong>Departure:</strong> {new Date(bus.departure).toLocaleString()}</p>
          <p><strong>Arrival:</strong> {new Date(bus.arrival).toLocaleString()}</p>
          <p><strong>Fare:</strong> ₹ {bus.fare.toLocaleString()}</p>
          <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
          <p><strong>Number of Passengers:</strong> {numPassengers}</p>
        </div>
      )}
      <hr />
      <div>
        <h3>Passenger Details:</h3>
        {passengerDetails.map((passenger, index) => (
          <div key={index} className="passenger-form">
            <h4>Passenger {index + 1}</h4>
            <div className="form-group">
              <label htmlFor={`name-${index}`}>Name</label>
              <input
                type="text"
                id={`name-${index}`}
                className="form-control"
                value={passenger.name}
                onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`age-${index}`}>Age</label>
              <input
                type="number"
                id={`age-${index}`}
                className="form-control"
                value={passenger.age}
                onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`gender-${index}`}>Gender</label>
              <select
                id={`gender-${index}`}
                className="form-control"
                value={passenger.gender}
                onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="totals">
        <h3>Discount: ₹ {discountAmount ? discountAmount.toLocaleString() : 0}</h3>
        <h3>GST (5%): ₹ {GST ? GST.toLocaleString() : 0}</h3>
        <h2>Total: ₹ {cartTotal ? cartTotal.toLocaleString() : 0}</h2>
      </div>
      <button className="btn btn-primary" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default Billing;


