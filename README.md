# sasea-pipes

A [sveltekit](https://github.com/sveltejs/kit/tree/master/packages/create-svelte) app to partially transform some San Diego County [ArcGIS REST API](https://developers.arcgis.com/rest/) data, and publish the resulting data for use as a layer in an ArcGIS Online embedded interactive map iframe.

Note: there is currently no web interface associated with this script. Once there is accurate and up-to-date information, the script will expose a JSON file similar to the source document, with the formatted and additional information included, and the remaining geoJSON data (zip code boundaries) unmodified.

## Local use

1. Download this source code
2. `cd` into the root directory
3. Run `npm install`, then `npm run dev -- --open`
4. The `/static/` directory will populate with the latest data

## How it works

### `/src/routes/+page.js`

Queries the San Diego County ArcGIS REST API endpoint, providing it as `data`.

### `/src/routes/+page.svelte`

Takes the `data` and transforms it.

### `/src/lib/transform.ts`

Contains the types and functions that format attributes and collect date range info on ZIP Codes, storing them as JSON files inside the `/static/` directory.