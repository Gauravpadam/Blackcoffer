import React, { createContext, useContext, useState, useEffect } from 'react';

const JsonDataContext = createContext();

export function useJsonData() {
  return useContext(JsonDataContext);
}

export function JsonDataProvider({ children }) {
  const [jsonData, setJsonData] = useState();

  useEffect(() => {
    // Fetch the JSON data here
    fetch('http://127.0.0.1:5000/getData') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <JsonDataContext.Provider value={jsonData}>
      {children}
    </JsonDataContext.Provider>
  );
}
