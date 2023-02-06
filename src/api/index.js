export default async function getMedicationByName(medName) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8e2cdbb44cmshe00bbdb5f83b9b6p1d10e1jsnf92a330b2fbe",
      "X-RapidAPI-Host": "drug-info-and-price-history.p.rapidapi.com",
    },
  };
  
  const request = await fetch(
    `https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=${medName}`,
    options
  );
  const response = await request.json();
  console.log("🚀 ~ file: index.js:15 ~ getMedicationByName ~ response", response)
  return response[0];
}