<script>
	//import * as wkx from 'wkx'
	//import fs from 'fs'
	//import { arcgisToGeoJSON } from '@esri/arcgis-to-geojson-utils'
	import { formatAttributes, processFeatures } from '$lib/transform'

	/** @type {import('./$types').PageData} */
	export let data;
	//console.log({data: data});
	/**
	let student = { 
	    name: 'Mike',
	};
	let jsondata = JSON.stringify(student, null, 2);
	fs.writeFile('jsondata.json', jsondata, (err) => {
	    if (err) throw err;
	    console.log('Data written to file');
	});
	console.log('This is after the write call');
	*/
	/**
	let geojson = {};
	let geometry = {};
	try {
		geojson = arcgisToGeoJSON(data);
	} catch (e) {
		console.log("a2g: " + e);
	}
	try {
		geometry = wkx.Geometry.parseGeoJSON(geojson);
	} catch (e) {
		console.log("wkx: " + e);
	}
	console.log({geojson, geometry});
	*/
	/**
	// Example data
	{
		exceededTransferLimit: true,
		features: [
			{
				attributes: {
					zip_code: "91901",
					f7_day_average_case_rate: 23.03378818,
					testing_positivity_percentage: 0.09480813,
					previous_week_case_rate: 55.59879907,
					current_date_range: "2/6/2022-2/12/2022",
					previous_week_date_range: "1/30/2022-2/5/2022"
				}
				geometry: {
					rings: [
						[
							[-116.74540347417111,32.96063610403227],
							[-116.7408578479165,32.95853714588754],
							[-116.73885306062894,32.949957962160184],
							[-116.73881568442492,32.949797999655296],
							[-116.73881691871013,32.94972687906707],
							[-116.73882950949714,32.94906067718726],
							[-116.73887587604052,32.94905987888626],
							[-116.74015285367477,32.94903791844556],
							[-116.74029442277366,32.94899647386563],
							[-116.74022041417068,32.948292824416626],
							[-116.73968386392622,32.94764975529145],
							[-116.7395558297437,32.94631658397095],
							[-116.73954146029243,32.94607752466526],
							[-116.73952220131103,32.94583848959032],
							[-116.73949805459623,32.94559981496553],
							[-116.73946902284284,32.94536184681413]
							...
						],
						...
					]
				}
			},
			{
				attributes: {
					zip_code: "91910",
					f7_day_average_case_rate: 48.90617172,
					testing_positivity_percentage: 0.1287478,
					previous_week_case_rate: 74.46688865,
					current_date_range: "2/6/2022-2/12/2022",
					previous_week_date_range: "1/30/2022-2/5/2022"
				}
			},
			...
		]

	*/
	/**
	console.log({
		before: data.features[0].attributes,
		after: formatAttributes(data.features[0].attributes),
	}); */
	processFeatures(data.features, 0);

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
