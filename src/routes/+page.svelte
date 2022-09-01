<script>
	//import * as wkx from 'wkx'
	//import fs from 'fs'
	//import { arcgisToGeoJSON } from '@esri/arcgis-to-geojson-utils'
	import { formatAttributes, processFeatures, processSum } from '$lib/transform'

	/** @type {import('./$types').PageData} */
	export let data;

	let processed = [];
	let run = false;
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
							[-116.73946902284284,32.94536184681413]
							...
						],
						...
					]
				}
			},
			...(~2000 more total "features" objects)
		]
	*/
	/**
	console.log({
		before: data.features[0].attributes,
		after: formatAttributes(data.features[0].attributes),
	}); */

	let result = processFeatures(data.features, 0);
	processed = result.processed;
	let promise = processSum();
	run = true;
	//const sum = processSum();
	$: status = (run) ? "completed:" : "requested...";
	$: processStatus = (run && result.processed) ? result.processed.length.toString() : "";
	//$: sumStatus = (typeof sumZips.total !== "undefined" && sumZips.total > 0) ? sumZips.total : "";

	function debugData() {
		console.log({
			inputData: data,
			outputData: result
		});
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		SASEA Pipes
	</h1>

	<h3>
		Process {status}
	</h3>
	<table>
		<tr><th>Features processed</th><th>Total <em>ZIP code&ndash;date range</em> pairs</th></tr>
		<tr><td>{result.processed.length}</td>
			<td><a href="/total.txt" target="_blank">total.txt</a></td>
		</tr>
	</table>

</section>
<hr>
<section>
	<h3>
		Inspect JSON:
	</h3>
	<ul>
		<li>
			<a href="/processed.json" target="_blank">Transformed feature attributes</a>
		</li>
		<li>
			<a href="/sumzips.json" target="_blank">Total ZIP Code instances per date range, 2020-2023</a>
		</li>

	</ul>
	<button on:click={debugData()}>Log data into console</button>

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
	li {
		margin-bottom: 1em;
	}

	table {
		background: white;
		border: 1px solid gray;
	}
	td {
		border: 1px solid gray;
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
