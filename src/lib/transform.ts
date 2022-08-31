import fs from 'fs'

interface AttributesObject {
    zip_code: string;
    testing_positivity_percentage: number;
    f7_day_average_case_rate: number;
    previous_week_case_rate: number;
    current_date_range: string;
    previous_week_date_range: string;
}

interface FormattedAttributes {
    zip_code: string;
    testing_positivity_percentage: string;
    f7_day_average_case_rate: number;
    previous_week_case_rate: number;
    pprevious_week_case_rate?: number;
    ppprevious_week_case_rate?: number;
    pppprevious_week_case_rate?: number;
    current_date_range: string;
    previous_week_date_range: string;
    pprevious_week_date_range?: string;
    ppprevious_week_date_range?: string;
    pppprevious_week_date_range?: string;
}

interface FeatureObject {
    attributes: AttributesObject;
    geometry?: object;
}

interface FormattedFeatureObject {
    attributes: FormattedAttributes;
    geometry?: object;
}

interface ChronoData {
    "7/31/2022-8/6/2022"?: number;
    "8/7/2022-8/13/2022"?: number;
    "8/14/2022-8/20/2022"?: number;
    "8/21/2022-8/27/2022"?: number;
    "8/28/2022-9/3/2022"?: number;
    "9/4/2022-9/10/2022"?: number;
    "9/11/2022-9/17/2022"?: number;
    "9/18/2022-9/24/2022"?: number;
    "9/25/2022-10/1/2022"?: number;
    "10/2/2022-10/8/2022"?: number;
    "10/9/2022-10/15/2022"?: number;
    "10/16/2022-10/22/2022"?: number;
    "10/23/2022-10/29/2022"?: number;
    "10/30/2022-11/5/2022"?: number;
    "11/6/2022-11/12/2022"?: number;
    "11/13/2022-11/19/2022"?: number;
    "11/20/2022-11/26/2022"?: number;
    "11/27/2022-12/3/2022"?: number;
    "12/4/2022-12/10/2022"?: number;
    "12/11/2022-12/17/2022"?: number;
    "12/18/2022-12/24/2022"?: number;
    "12/25/2022-12/31/2022"?: number;
    "1/1/2023-1/7/2023"?: number;
    "1/8/2023-1/14/2023"?: number;
    "1/15/2023-1/21/2023"?: number;
    "1/22/2023-1/28/2023"?: number;
    "1/29/2023-2/4/2023"?: number;
    "2/5/2023-2/11/2023"?: number;
    "2/12/2023-2/18/2023"?: number;
    "2/19/2023-2/25/2023"?: number;
    "2/26/2023-3/4/2023"?: number;
    "3/5/2023-3/11/2023"?: number;
    "3/12/2023-3/18/2023"?: number;
    "3/19/2023-3/25/2023"?: number;
    "3/26/2023-4/1/2023"?: number;
    "4/2/2023-4/8/2023"?: number;
    "4/9/2023-4/15/2023"?: number;
    "4/16/2023-4/22/2023"?: number;
    "4/23/2023-4/29/2023"?: number;
    "4/30/2023-5/6/2023"?: number;
    "5/7/2023-5/13/2023"?: number;
    "5/14/2023-5/20/2023"?: number;
    "5/21/2023-5/27/2023"?: number;
    "5/28/2023-6/3/2023"?: number;
    "6/4/2023-6/10/2023"?: number;
    "6/11/2023-6/17/2023"?: number;
    "6/18/2023-6/24/2023"?: number;
    "6/25/2023-7/1/2023"?: number;
    "7/2/2023-7/8/2023"?: number;
    "7/9/2023-7/15/2023"?: number;
    "7/16/2023-7/22/2023"?: number;
    "7/23/2023-7/29/2023"?: number;
    "7/30/2023-8/5/2023"?: number;
    "8/6/2023-8/12/2023"?: number;
    "8/13/2023-8/19/2023"?: number;
    "8/20/2023-8/26/2023"?: number;
    "8/27/2023-9/2/2023"?: number;
    "9/3/2023-9/9/2023"?: number;
    "9/10/2023-9/16/2023"?: number;
    "9/17/2023-9/23/2023"?: number;
    "9/24/2023-9/30/2023"?: number;
    "10/1/2023-10/7/2023"?: number;
    "10/8/2023-10/14/2023"?: number;
    "10/15/2023-10/21/2023"?: number;
    "10/22/2023-10/28/2023"?: number;
    "10/29/2023-11/4/2023"?: number;
    "11/5/2023-11/11/2023"?: number;
    "11/12/2023-11/18/2023"?: number;
    "11/19/2023-11/25/2023"?: number;
    "11/26/2023-12/2/2023"?: number;
    "12/3/2023-12/9/2023"?: number;
    "12/10/2023-12/16/2023"?: number;
    "12/17/2023-12/23/2023"?: number;
    "12/24/2023-12/30/2023"?: number;
    "12/31/2023-1/6/2024"?: number;
}

const chronoKeys = [
    "7/31/2022-8/6/2022",
    "8/7/2022-8/13/2022",
    "8/14/2022-8/20/2022",
    "8/21/2022-8/27/2022",
    "8/28/2022-9/3/2022",
    "9/4/2022-9/10/2022",
    "9/11/2022-9/17/2022",
    "9/18/2022-9/24/2022",
    "9/25/2022-10/1/2022",
    "10/2/2022-10/8/2022",
    "10/9/2022-10/15/2022",
    "10/16/2022-10/22/2022",
    "10/23/2022-10/29/2022",
    "10/30/2022-11/5/2022",
    "11/6/2022-11/12/2022",
    "11/13/2022-11/19/2022",
    "11/20/2022-11/26/2022",
    "11/27/2022-12/3/2022",
    "12/4/2022-12/10/2022",
    "12/11/2022-12/17/2022",
    "12/18/2022-12/24/2022",
    "12/25/2022-12/31/2022",
    "1/1/2023-1/7/2023",
    "1/8/2023-1/14/2023",
    "1/15/2023-1/21/2023",
    "1/22/2023-1/28/2023",
    "1/29/2023-2/4/2023",
    "2/5/2023-2/11/2023",
    "2/12/2023-2/18/2023",
    "2/19/2023-2/25/2023",
    "2/26/2023-3/4/2023",
    "3/5/2023-3/11/2023",
    "3/12/2023-3/18/2023",
    "3/19/2023-3/25/2023",
    "3/26/2023-4/1/2023",
    "4/2/2023-4/8/2023",
    "4/9/2023-4/15/2023",
    "4/16/2023-4/22/2023",
    "4/23/2023-4/29/2023",
    "4/30/2023-5/6/2023",
    "5/7/2023-5/13/2023",
    "5/14/2023-5/20/2023",
    "5/21/2023-5/27/2023",
    "5/28/2023-6/3/2023",
    "6/4/2023-6/10/2023",
    "6/11/2023-6/17/2023",
    "6/18/2023-6/24/2023",
    "6/25/2023-7/1/2023",
    "7/2/2023-7/8/2023",
    "7/9/2023-7/15/2023",
    "7/16/2023-7/22/2023",
    "7/23/2023-7/29/2023",
    "7/30/2023-8/5/2023",
    "8/6/2023-8/12/2023",
    "8/13/2023-8/19/2023",
    "8/20/2023-8/26/2023",
    "8/27/2023-9/2/2023",
    "9/3/2023-9/9/2023",
    "9/10/2023-9/16/2023",
    "9/17/2023-9/23/2023",
    "9/24/2023-9/30/2023",
    "10/1/2023-10/7/2023",
    "10/8/2023-10/14/2023",
    "10/15/2023-10/21/2023",
    "10/22/2023-10/28/2023",
    "10/29/2023-11/4/2023",
    "11/5/2023-11/11/2023",
    "11/12/2023-11/18/2023",
    "11/19/2023-11/25/2023",
    "11/26/2023-12/2/2023",
    "12/3/2023-12/9/2023",
    "12/10/2023-12/16/2023",
    "12/17/2023-12/23/2023",
    "12/24/2023-12/30/2023",
    "12/31/2023-1/6/2024",
];

export function formatAttributes(attrs: AttributesObject): FormattedAttributes {
    let fmt: FormattedAttributes = {
        zip_code: attrs.zip_code,
        f7_day_average_case_rate: attrs.f7_day_average_case_rate,
        previous_week_case_rate: attrs.previous_week_case_rate,
        current_date_range: attrs.current_date_range,
        previous_week_date_range: attrs.previous_week_date_range,
        testing_positivity_percentage: Math.round(attrs.testing_positivity_percentage * 100).toString() + "%",
    };

    return fmt;
}

function fetchChronoData(filename: string): ChronoData {
    let chronoData: ChronoData = {};
    fs.readFile(filename, (err, data) => {
	    if (err) {
            console.error(err);
            return chronoData;
        }
	    else {
            console.log(data);
            try {
                chronoData = JSON.parse(data);
                console.log({ chronoData });
            } catch (e) {
                console.error("chronodata: " + e);
            }
            return chronoData;
        }
	});

    return chronoData;
}

function updateChronoData(f: FeatureObject): void {
    const filename = `static/${f.attributes.zip_code}.json`;
    let c = fetchChronoData(filename) || {};
    console.log(f);
    chronoKeys.forEach(key => {
        console.log({key, curr: f.attributes.current_date_range, prev: f.attributes.previous_week_date_range});
        if (key == f.attributes.current_date_range) {
            c[key] = f.attributes.f7_day_average_case_rate;
            console.log({ key: key, cur: f.attributes.previous_week_case_rate});
        }
        else if (key == f.attributes.previous_week_date_range) {
            c[key] = f.attributes.previous_week_case_rate;
            console.log({ key: key, prev: f.attributes.previous_week_case_rate});
        }
        else {
            console.log(".");
        }
    });
    const data = JSON.stringify(c);
    console.log({c, data});
    fs.writeFile(filename, data, (err) => {
	    if (err) {
            console.error(err);
        }
	    console.log("Wrote to " + filename + ":\n" + data);
	});
}

export function processFeatures(feats: Array<FeatureObject>, max = 0): Array<FormattedFeatureObject> {
    if (max > 0) {
        if (max < feats.length) {
            feats = feats.slice(0, max);
        }
    }
    let fmtArray: Array<FormattedFeatureObject> = [];
    feats.forEach(feat => {
        updateChronoData(feat);
        let f: FormattedFeatureObject = {
            attributes: formatAttributes(feat.attributes),
        }
        if (typeof feat.geometry === "object") f.geometry = feat.geometry;
        fmtArray.push(f);
    });

    return fmtArray;
} 