
import './App.css'
import StatePage from './components/StatesData/index.jsx'
import About from './components/About/index.jsx'
import {Routes, Route, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Details from './components/details/index.jsx'
const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]


const App = () =>{

const [stateData, SetstateData] = useState([])

const [filteredData, SetfilteredData] = useState([])

const [page, setPage] = useState("home")

const [loading, setloading] = useState(true)

const navigate = useNavigate();

  const fetchdata = async () => {
    try{
      const response = await fetch("https://apis.ccbp.in/covid19-state-wise-data")
      const rawData = await response.json()
      const processedData = statesList.map(state => {
      const apiStateData = rawData[state.state_code] || {}
      const total = apiStateData.total || {}
      const meta = apiStateData.meta || {}
      const confirmed = total.confirmed || 0
      const recovered = total.recovered || 0
      const deceased = total.deceased || 0
      const active = confirmed - (recovered + deceased) 
      const population = meta.population || 0

        return {
          state_code: state.state_code,
          state_name: state.state_name,
          confirmed,
          recovered,
          deceased,
          active,
          population,
        }
      

     
    })
     SetstateData(processedData)
     SetfilteredData(processedData)
    }
    catch (error) {
      console.error("Error fetching data:", error)
    }
    finally {
      setloading(false)
    }
  }

useEffect(() => {  
  fetchdata()
   document.title = "Covid19 Dashboard";    
}, [])
const search =(e)=>{
  const searchitem = e.target.value.toLowerCase()
  
  if (searchitem === '') {
    SetfilteredData(stateData)
  }
  else{
    const filtered= stateData.filter((state)=>
      state.state_code.toLowerCase().includes(searchitem) ||
  state.state_name.toLowerCase().includes(searchitem)
  )
  SetfilteredData(filtered)
  }
}

const Homepage=()=>{
  setPage('home')
  SetfilteredData(stateData)
  navigate('/home')

}

const Aboutpage= ()=>{
  setPage('about')
  navigate('/about')
}








return (
    <div className="App">
      <div>
        <div className="App-nav">
          <h3 className="COVID19">
            COVID19<span className="India">INDIA</span>
          </h3>
          <div className="App-nav-links">
            <p onClick={Homepage} >home</p>
            <p onClick={Aboutpage}>About</p>
          </div>
        </div>
      </div>
    
    <Routes>
      <Route path="/" element={<><StatePage stateData={filteredData} search={search} loading={loading} page={page}/><Navigate to="/home"/></>} />
      <Route path="/about" element={<><About/>  </>} />
      <Route path="/home" element={<StatePage stateData={filteredData} search={search} loading={loading} page={page}/>} /> 
      <Route path='/state/:stateCode' element={<Details/>}/>
    </Routes>
    

    </div>
  )
}

export default App