import React, { useState } from 'react';

const App = () => {
  // Sample data for countries, states, and districts
  const countryData = {
    India: {
      states: {
        Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
        Gujarat: ['Ahmedabad', 'Surat', 'Vadodara'],
      },
    },
    USA: {
      states: {
        California: ['Los Angeles', 'San Francisco', 'San Diego'],
        Texas: ['Houston', 'Dallas', 'Austin'],
      },
    },
  };

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState('');
    setSelectedDistrict('');
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict('');
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  return (
    <div>
      <h1>Select Location</h1>
      
      {/* Country Dropdown */}
      <div>
        <label>Select Country: </label>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {Object.keys(countryData).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* State Dropdown */}
      {selectedCountry && (
        <div>
          <label>Select State: </label>
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">Select State</option>
            {Object.keys(countryData[selectedCountry].states).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* District Dropdown */}
      {selectedState && (
        <div>
          <label>Select District: </label>
          <select value={selectedDistrict} onChange={handleDistrictChange}>
            <option value="">Select District</option>
            {countryData[selectedCountry].states[selectedState].map(
              (district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              )
            )}
          </select>
        </div>
      )}

      {/* Selected Location */}
      {selectedCountry && selectedState && selectedDistrict && (
        <div>
          <h2>Selected Location:</h2>
          <p>
            Country: {selectedCountry}, State: {selectedState}, District:{' '}
            {selectedDistrict}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
