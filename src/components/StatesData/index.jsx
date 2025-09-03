import './index.css';
import { useNavigate } from 'react-router-dom';

function StatePage({ page, loading, stateData = [], search }) {
  const navigate = useNavigate();

  const details_button = (stateCode) => {
    navigate(`/state/${stateCode}`);
  };

  return (
    <div>
      {page === 'home' && (
        <>
          
          <div className="App-search">
            <input
              className="App-search-input"
              type="text"
              placeholder=" 🔍 Enter the state name"
              onChange={search}
            />
          </div>


<div className="App-icons">
  <div className="app-icon-1">
    <h3 className="icon-h3">Confirmed</h3>
     <img
      src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1654438432/Covid19%20Dashboard/check-mark_1_odg0vn.png"
      alt="country wide confirmed cases pic"
              />
    <p className="app-icon-number">33057320</p>
  </div>

  <div className="app-icon-2">
    <h3 className="icon-h3-2">Active</h3>
     <img
                src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1654438417/Covid19%20Dashboard/protection_1_zjqmhw.png"
                alt="country wide active cases pic"
              />
    <p className="app-icon-number-2">398783</p>
  </div>


  <div className="app-icon-3">
    <h3 className="icon-h3-3">Recovered</h3>
      <img
                src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1654438418/Covid19%20Dashboard/recovered_1_qmgv0f.png"
                alt="country wide recovered cases pic"
              />
    <p className="app-icon-number-3">32217462</p>
  </div>


  <div className="app-icon-4">
    <h3 className="icon-h3-4">Deceased</h3>
    <img
                src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1654438420/Covid19%20Dashboard/breathing_1_ctu4mw.png"
                alt="country wide deceased cases pic"
              />
    <p className="app-icon-number-4">441075</p>
  </div>
</div>


          {loading ? (
            <div>
              <img
                className="App-opining-image"
                src="https://i.pinimg.com/1200x/26/75/b4/2675b4f7b0222ef14cfb9a07792216c4.jpg"
                alt="loading"
              />
            </div>
          ) : (
            <div className="App-opining">
              <div className="App-opining-header">
                <ul>
                 
                  <li className="App-opining-header-item">
                    <p>State</p>
                    <p>Confirmed</p>
                    <p>Active</p>
                    <p>Recovered</p>
                    <p>Deceased</p>
                    <p>Population</p>
                  </li>

                  
                  {stateData.map((state) => (
                    <li key={state.state_code}>
                      <p>{state.state_name}</p>
                      <p>{state.confirmed}</p>
                      <p>{state.active}</p>
                      <p>{state.recovered}</p>
                      <p>{state.deceased}</p>
                      <p>{state.population}</p>
                      <button
                        onClick={() => details_button(state.state_code)}
                        className="see_deatils_button"
                      >
                        Details
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default StatePage;




