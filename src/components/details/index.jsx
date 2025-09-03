import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Fourinfopage from "../Fourinfo";
// import { Routes,Route } from "react-router-dom";

function Details() {
  const { stateCode } = useParams();
  const [stateData, setStateData] = useState(null);
  const today = new Date().toString(); 
  const [selectedtype,setselctedtype]=useState("confirmed")
 
  useEffect(() => {
    const datafetch = async () => {
      const response = await fetch("https://apis.ccbp.in/covid19-state-wise-data");
      const rawdata = await response.json();
      
      const stateInfo = rawdata[stateCode];

      const districts = Object.keys(stateInfo.districts || {}).map((districtName) => {
        const districtData = stateInfo.districts[districtName].total || {};
        const confirmed = districtData.confirmed || 0;
        const deceased = districtData.deceased || 0;
        const recovered = districtData.recovered || 0;
        const active = confirmed - (recovered + deceased);
        return {
          name: districtName,
          confirmed,
          deceased,
          recovered,
          active,
        };
      });

      setStateData({
        total: stateInfo.total,
        districts,
      });

        
      const totalConfirmed = stateInfo.total.confirmed || 0;
      const totalRecovered = stateInfo.total.recovered || 0;
      const totalDeceased = stateInfo.total.deceased || 0;
      const totalActive = totalConfirmed - (totalRecovered + totalDeceased);

      setStateData({
        total: {
          ...stateInfo.total,
          active: totalActive,
        },
        districts,
      });

      
    };

    datafetch();
  }, [stateCode]);

  return (
    <div>
      <h1>Welcome</h1>
      <p>Showing details for: {stateCode}</p>
      {stateData && <p>Tested: {stateData.total.tested || 0}</p>}
      <p>last updated on {today}</p>

       <div className="App-icons">
  <div className="app-icon-1" onClick={()=>{
    setselctedtype("confirmed")
  }}>
    <h3 className="icon-h3">Confirmed</h3>
     <img
      src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1654438432/Covid19%20Dashboard/check-mark_1_odg0vn.png"
      alt="country wide confirmed cases pic"
              />
      {stateData && <p  className="app-icon-number" >{stateData.total.confirmed || 0}</p>}
  </div>

  <div className="app-icon-2"  onClick={()=>{
     setselctedtype("active")
  }}>
    <h3 className="icon-h3-2">Active</h3>
     <img
                src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1654438417/Covid19%20Dashboard/protection_1_zjqmhw.png"
                alt="country wide active cases pic"
              />
               {stateData && <p  className="app-icon-number-2" >{stateData.total.active || 0}</p>}
   
  </div>


  <div className="app-icon-3"  onClick={()=>{
    setselctedtype("recovered")
  }}>
    <h3 className="icon-h3-3">Recovered</h3>
      <img
                src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1654438418/Covid19%20Dashboard/recovered_1_qmgv0f.png"
                alt="country wide recovered cases pic"
              />
               {stateData && <p  className="app-icon-number-3" >{stateData.total.recovered || 0}</p>}

  </div>


  <div className="app-icon-4"  onClick={()=>{
     setselctedtype("deceased")
  }}>
    <h3 className="icon-h3-4">Deceased</h3>
    <img
                src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1654438420/Covid19%20Dashboard/breathing_1_ctu4mw.png"
                alt="country wide deceased cases pic"
              />
              {stateData && <p  className="app-icon-number-4" >{stateData.total.deceased || 0}</p>}

  </div>
</div>       


     <Fourinfopage stateData={stateData} selectedtype={selectedtype}/>
    </div>
  );
}

export default Details;








// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Fourinfopage from "../Fourinfo";

// function Details() {
//   const { stateCode } = useParams();
//   const [stateData, setStateData] = useState(null);
//   const today = new Date().toString();

//   useEffect(() => {
//     const datafetch = async () => {
//       const response = await fetch("https://apis.ccbp.in/covid19-state-wise-data");
//       const rawdata = await response.json();
//       const stateInfo = rawdata[stateCode];

//       if (!stateInfo) return;

//       const districts = Object.keys(stateInfo.districts || {}).map((districtName) => {
//         const districtData = stateInfo.districts[districtName].total || {};
//         const confirmed = districtData.confirmed || 0;
//         const deceased = districtData.deceased || 0;
//         const recovered = districtData.recovered || 0;
//         const active = confirmed - (recovered + deceased);
//         return { name: districtName, confirmed, deceased, recovered, active };
//       });

//       const totalConfirmed = stateInfo.total.confirmed || 0;
//       const totalRecovered = stateInfo.total.recovered || 0;
//       const totalDeceased = stateInfo.total.deceased || 0;
//       const totalActive = totalConfirmed - (totalRecovered + totalDeceased);

//       setStateData({
//         total: {
//           ...stateInfo.total,
//           active: totalActive,
//         },
//         districts,
//       });
//     };

//     datafetch();
//   }, [stateCode]);

//   return (
//     <div>
//       <h1>Welcome</h1>
//       <p>Showing details for: {stateCode}</p>
//       {stateData && <p>Tested: {stateData.total.tested || 0}</p>}
//       <p>last updated on {today}</p>

//       {/* Your 4 info cards (Confirmed, Active, etc.) */}
//       <div className="App-icons">
//         <div className="app-icon-1">
//           <h3>Confirmed</h3>
//           {stateData && <p>{stateData.total.confirmed || 0}</p>}
//         </div>
//         <div className="app-icon-2">
//           <h3>Active</h3>
//           {stateData && <p>{stateData.total.active || 0}</p>}
//         </div>
//         <div className="app-icon-3">
//           <h3>Recovered</h3>
//           {stateData && <p>{stateData.total.recovered || 0}</p>}
//         </div>
//         <div className="app-icon-4">
//           <h3>Deceased</h3>
//           {stateData && <p>{stateData.total.deceased || 0}</p>}
//         </div>
//       </div>

      
//       <Fourinfopage stateData={stateData} />
//     </div>
//   );
// }

// export default Details;
