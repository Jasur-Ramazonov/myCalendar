import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react";

// function App() {
//   const [enterDate, setEnterDate] = useState("");
//   const [date, setDate] = useState("");
//   const [remainDay, setRemainDay] = useState(0);

//   useEffect(() => {
//     let currentDate = new Date();
//     setDate(currentDate.toLocaleDateString());
//   }, []);

//   useEffect(() => {
//     if (
//       enterDate.slice(-2) >= date.slice(0, 2) ||
//       enterDate.slice(-5, -3) > date.slice(3, 5)
//     ) {
//       if (Number(enterDate.slice(-5, -3)) === Number(date.slice(3, 5))) {
//         setRemainDay(Number(enterDate.slice(-2)) - Number(date.slice(0, 2)));
//       } else {
//         let a = 0; // current month days
//         let b = 0; //remain days in current month
//         switch (Number(date.slice(3, 5))) {
//           case 2:
//             if (Number(date.slice(3, 5)) % 400 === 0) {
//               a = 29;
//             } else {
//               a = 28;
//             }
//             break;
//           case 1:
//           case 3:
//           case 5:
//           case 7:
//           case 8:
//           case 10:
//           case 12:
//             a = 31;
//             break;
//           case 4:
//           case 6:
//           case 9:
//           case 11:
//             a = 30;
//             break;
//           default:
//             break;
//         }
//         b = a - Number(date.slice(0, 2));

//         let c = Number(date.slice(3, 5)); // current month
//         let d = Number(enterDate.slice(-5, -3)); // entered month
//         // c dan d gacha qaysi oylar borligini aniqlash kerak.
//       }

//       return;
//     }
//     setRemainDay(0);
//   }, [enterDate]);

//   function getDate(e: React.ChangeEvent<HTMLInputElement>) {
//     if (
//       e.target.value.slice(-2) >= date.slice(0, 2) ||
//       e.target.value.slice(-4, -3) > date.slice(4, 5)
//     ) {
//       setEnterDate(e.target.value);
//       return;
//     }
//     setEnterDate("");
//   }

//   // date.toLocaleDateString()
//   return (
//     <>
//       <div className="d-flex justify-content-center align-items-center mt-5">
//         <form className="w-25">
//           <p className="text-center"> Today is {date}</p>
//           <input
//             type="date"
//             className="form-control"
//             placeholder="Enter your date"
//             onChange={getDate}
//           />
//           <p>{enterDate}</p>
//           <p
//             style={{ fontSize: "20px", fontWeight: "bolder" }}
//             className="text-center"
//           >
//             remain day {remainDay}
//           </p>
//         </form>
//       </div>
//     </>
//   );
// }

import MyCalendar from "./MyCalendar";

const App = () => {
  return (
    <div>
      <MyCalendar />
    </div>
  );
};

export default App;
