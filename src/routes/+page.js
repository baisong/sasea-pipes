export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, setHeaders }) {

	let smallUrl = 'https://gis-public.sandiegocounty.gov/arcgis/rest/services/Hosted/COVID19_CaseRateData/FeatureServer/1/query?where=1%3D1&outFields=zip_code,f7_day_average_case_rate,testing_positivity_percentage,previous_week_case_rate,current_date_range,previous_week_date_range&returnGeometry=false&outSR=4326&f=json';
	let bigUrl = 'https://gis-public.sandiegocounty.gov/arcgis/rest/services/Hosted/COVID19_CaseRateData/FeatureServer/1/query?where=1%3D1&outFields=zip_code,f7_day_average_case_rate,testing_positivity_percentage,previous_week_case_rate,current_date_range,previous_week_date_range&outSR=4326&f=json';
  
  const response = await fetch(smallUrl);
 	// console.log(response);
 /*
  setHeaders({
    age: response.headers.get('age'),
    'cache-control': response.headers.get('cache-control')
  });
 */
  let data = await response.json();
  //data.geometryType = 'Polygon';
  //console.log({loadData: data});

  return data;
}