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
    "1/5/2020-1/11/2020"?: number;
    "1/12/2020-1/18/2020"?: number;
    "1/19/2020-1/25/2020"?: number;
    "1/26/2020-2/1/2020"?: number;
    "2/2/2020-2/8/2020"?: number;
    "2/9/2020-2/15/2020"?: number;
    "2/16/2020-2/22/2020"?: number;
    "2/23/2020-2/29/2020"?: number;
    "3/1/2020-3/7/2020"?: number;
    "3/8/2020-3/14/2020"?: number;
    "3/15/2020-3/21/2020"?: number;
    "3/22/2020-3/28/2020"?: number;
    "3/29/2020-4/4/2020"?: number;
    "4/5/2020-4/11/2020"?: number;
    "4/12/2020-4/18/2020"?: number;
    "4/19/2020-4/25/2020"?: number;
    "4/26/2020-5/2/2020"?: number;
    "5/3/2020-5/9/2020"?: number;
    "5/10/2020-5/16/2020"?: number;
    "5/17/2020-5/23/2020"?: number;
    "5/24/2020-5/30/2020"?: number;
    "5/31/2020-6/6/2020"?: number;
    "6/7/2020-6/13/2020"?: number;
    "6/14/2020-6/20/2020"?: number;
    "6/21/2020-6/27/2020"?: number;
    "6/28/2020-7/4/2020"?: number;
    "7/5/2020-7/11/2020"?: number;
    "7/12/2020-7/18/2020"?: number;
    "7/19/2020-7/25/2020"?: number;
    "7/26/2020-8/1/2020"?: number;
    "8/2/2020-8/8/2020"?: number;
    "8/9/2020-8/15/2020"?: number;
    "8/16/2020-8/22/2020"?: number;
    "8/23/2020-8/29/2020"?: number;
    "8/30/2020-9/5/2020"?: number;
    "9/6/2020-9/12/2020"?: number;
    "9/13/2020-9/19/2020"?: number;
    "9/20/2020-9/26/2020"?: number;
    "9/27/2020-10/3/2020"?: number;
    "10/4/2020-10/10/2020"?: number;
    "10/11/2020-10/17/2020"?: number;
    "10/18/2020-10/24/2020"?: number;
    "10/25/2020-10/31/2020"?: number;
    "11/1/2020-11/7/2020"?: number;
    "11/8/2020-11/14/2020"?: number;
    "11/15/2020-11/21/2020"?: number;
    "11/22/2020-11/28/2020"?: number;
    "11/29/2020-12/5/2020"?: number;
    "12/6/2020-12/12/2020"?: number;
    "12/13/2020-12/19/2020"?: number;
    "12/20/2020-12/26/2020"?: number;
    "12/27/2020-1/2/2021"?: number;
    "1/3/2021-1/9/2021"?: number;
    "1/10/2021-1/16/2021"?: number;
    "1/17/2021-1/23/2021"?: number;
    "1/24/2021-1/30/2021"?: number;
    "1/31/2021-2/6/2021"?: number;
    "2/7/2021-2/13/2021"?: number;
    "2/14/2021-2/20/2021"?: number;
    "2/21/2021-2/27/2021"?: number;
    "2/28/2021-3/6/2021"?: number;
    "3/7/2021-3/13/2021"?: number;
    "3/14/2021-3/20/2021"?: number;
    "3/21/2021-3/27/2021"?: number;
    "3/28/2021-4/3/2021"?: number;
    "4/4/2021-4/10/2021"?: number;
    "4/11/2021-4/17/2021"?: number;
    "4/18/2021-4/24/2021"?: number;
    "4/25/2021-5/1/2021"?: number;
    "5/2/2021-5/8/2021"?: number;
    "5/9/2021-5/15/2021"?: number;
    "5/16/2021-5/22/2021"?: number;
    "5/23/2021-5/29/2021"?: number;
    "5/30/2021-6/5/2021"?: number;
    "6/6/2021-6/12/2021"?: number;
    "6/13/2021-6/19/2021"?: number;
    "6/20/2021-6/26/2021"?: number;
    "6/27/2021-7/3/2021"?: number;
    "7/4/2021-7/10/2021"?: number;
    "7/11/2021-7/17/2021"?: number;
    "7/18/2021-7/24/2021"?: number;
    "7/25/2021-7/31/2021"?: number;
    "8/1/2021-8/7/2021"?: number;
    "8/8/2021-8/14/2021"?: number;
    "8/15/2021-8/21/2021"?: number;
    "8/22/2021-8/28/2021"?: number;
    "8/29/2021-9/4/2021"?: number;
    "9/5/2021-9/11/2021"?: number;
    "9/12/2021-9/18/2021"?: number;
    "9/19/2021-9/25/2021"?: number;
    "9/26/2021-10/2/2021"?: number;
    "10/3/2021-10/9/2021"?: number;
    "10/10/2021-10/16/2021"?: number;
    "10/17/2021-10/23/2021"?: number;
    "10/24/2021-10/30/2021"?: number;
    "10/31/2021-11/6/2021"?: number;
    "11/7/2021-11/13/2021"?: number;
    "11/14/2021-11/20/2021"?: number;
    "11/21/2021-11/27/2021"?: number;
    "11/28/2021-12/4/2021"?: number;
    "12/5/2021-12/11/2021"?: number;
    "12/12/2021-12/18/2021"?: number;
    "12/19/2021-12/25/2021"?: number;
    "12/26/2021-1/1/2022"?: number;
    "1/2/2022-1/8/2022"?: number;
    "1/9/2022-1/15/2022"?: number;
    "1/16/2022-1/22/2022"?: number;
    "1/23/2022-1/29/2022"?: number;
    "1/30/2022-2/5/2022"?: number;
    "2/6/2022-2/12/2022"?: number;
    "2/13/2022-2/19/2022"?: number;
    "2/20/2022-2/26/2022"?: number;
    "2/27/2022-3/5/2022"?: number;
    "3/6/2022-3/12/2022"?: number;
    "3/13/2022-3/19/2022"?: number;
    "3/20/2022-3/26/2022"?: number;
    "3/27/2022-4/2/2022"?: number;
    "4/3/2022-4/9/2022"?: number;
    "4/10/2022-4/16/2022"?: number;
    "4/17/2022-4/23/2022"?: number;
    "4/24/2022-4/30/2022"?: number;
    "5/1/2022-5/7/2022"?: number;
    "5/8/2022-5/14/2022"?: number;
    "5/15/2022-5/21/2022"?: number;
    "5/22/2022-5/28/2022"?: number;
    "5/29/2022-6/4/2022"?: number;
    "6/5/2022-6/11/2022"?: number;
    "6/12/2022-6/18/2022"?: number;
    "6/19/2022-6/25/2022"?: number;
    "6/26/2022-7/2/2022"?: number;
    "7/3/2022-7/9/2022"?: number;
    "7/10/2022-7/16/2022"?: number;
    "7/17/2022-7/23/2022"?: number;
    "7/24/2022-7/30/2022"?: number;
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
    "1/5/2020-1/11/2020",
    "1/12/2020-1/18/2020",
    "1/19/2020-1/25/2020",
    "1/26/2020-2/1/2020",
    "2/2/2020-2/8/2020",
    "2/9/2020-2/15/2020",
    "2/16/2020-2/22/2020",
    "2/23/2020-2/29/2020",
    "3/1/2020-3/7/2020",
    "3/8/2020-3/14/2020",
    "3/15/2020-3/21/2020",
    "3/22/2020-3/28/2020",
    "3/29/2020-4/4/2020",
    "4/5/2020-4/11/2020",
    "4/12/2020-4/18/2020",
    "4/19/2020-4/25/2020",
    "4/26/2020-5/2/2020",
    "5/3/2020-5/9/2020",
    "5/10/2020-5/16/2020",
    "5/17/2020-5/23/2020",
    "5/24/2020-5/30/2020",
    "5/31/2020-6/6/2020",
    "6/7/2020-6/13/2020",
    "6/14/2020-6/20/2020",
    "6/21/2020-6/27/2020",
    "6/28/2020-7/4/2020",
    "7/5/2020-7/11/2020",
    "7/12/2020-7/18/2020",
    "7/19/2020-7/25/2020",
    "7/26/2020-8/1/2020",
    "8/2/2020-8/8/2020",
    "8/9/2020-8/15/2020",
    "8/16/2020-8/22/2020",
    "8/23/2020-8/29/2020",
    "8/30/2020-9/5/2020",
    "9/6/2020-9/12/2020",
    "9/13/2020-9/19/2020",
    "9/20/2020-9/26/2020",
    "9/27/2020-10/3/2020",
    "10/4/2020-10/10/2020",
    "10/11/2020-10/17/2020",
    "10/18/2020-10/24/2020",
    "10/25/2020-10/31/2020",
    "11/1/2020-11/7/2020",
    "11/8/2020-11/14/2020",
    "11/15/2020-11/21/2020",
    "11/22/2020-11/28/2020",
    "11/29/2020-12/5/2020",
    "12/6/2020-12/12/2020",
    "12/13/2020-12/19/2020",
    "12/20/2020-12/26/2020",
    "12/27/2020-1/2/2021",
    "1/3/2021-1/9/2021",
    "1/10/2021-1/16/2021",
    "1/17/2021-1/23/2021",
    "1/24/2021-1/30/2021",
    "1/31/2021-2/6/2021",
    "2/7/2021-2/13/2021",
    "2/14/2021-2/20/2021",
    "2/21/2021-2/27/2021",
    "2/28/2021-3/6/2021",
    "3/7/2021-3/13/2021",
    "3/14/2021-3/20/2021",
    "3/21/2021-3/27/2021",
    "3/28/2021-4/3/2021",
    "4/4/2021-4/10/2021",
    "4/11/2021-4/17/2021",
    "4/18/2021-4/24/2021",
    "4/25/2021-5/1/2021",
    "5/2/2021-5/8/2021",
    "5/9/2021-5/15/2021",
    "5/16/2021-5/22/2021",
    "5/23/2021-5/29/2021",
    "5/30/2021-6/5/2021",
    "6/6/2021-6/12/2021",
    "6/13/2021-6/19/2021",
    "6/20/2021-6/26/2021",
    "6/27/2021-7/3/2021",
    "7/4/2021-7/10/2021",
    "7/11/2021-7/17/2021",
    "7/18/2021-7/24/2021",
    "7/25/2021-7/31/2021",
    "8/1/2021-8/7/2021",
    "8/8/2021-8/14/2021",
    "8/15/2021-8/21/2021",
    "8/22/2021-8/28/2021",
    "8/29/2021-9/4/2021",
    "9/5/2021-9/11/2021",
    "9/12/2021-9/18/2021",
    "9/19/2021-9/25/2021",
    "9/26/2021-10/2/2021",
    "10/3/2021-10/9/2021",
    "10/10/2021-10/16/2021",
    "10/17/2021-10/23/2021",
    "10/24/2021-10/30/2021",
    "10/31/2021-11/6/2021",
    "11/7/2021-11/13/2021",
    "11/14/2021-11/20/2021",
    "11/21/2021-11/27/2021",
    "11/28/2021-12/4/2021",
    "12/5/2021-12/11/2021",
    "12/12/2021-12/18/2021",
    "12/19/2021-12/25/2021",
    "12/26/2021-1/1/2022",
    "1/2/2022-1/8/2022",
    "1/9/2022-1/15/2022",
    "1/16/2022-1/22/2022",
    "1/23/2022-1/29/2022",
    "1/30/2022-2/5/2022",
    "2/6/2022-2/12/2022",
    "2/13/2022-2/19/2022",
    "2/20/2022-2/26/2022",
    "2/27/2022-3/5/2022",
    "3/6/2022-3/12/2022",
    "3/13/2022-3/19/2022",
    "3/20/2022-3/26/2022",
    "3/27/2022-4/2/2022",
    "4/3/2022-4/9/2022",
    "4/10/2022-4/16/2022",
    "4/17/2022-4/23/2022",
    "4/24/2022-4/30/2022",
    "5/1/2022-5/7/2022",
    "5/8/2022-5/14/2022",
    "5/15/2022-5/21/2022",
    "5/22/2022-5/28/2022",
    "5/29/2022-6/4/2022",
    "6/5/2022-6/11/2022",
    "6/12/2022-6/18/2022",
    "6/19/2022-6/25/2022",
    "6/26/2022-7/2/2022",
    "7/3/2022-7/9/2022",
    "7/10/2022-7/16/2022",
    "7/17/2022-7/23/2022",
    "7/24/2022-7/30/2022",
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
            //console.log(data);
            try {
                chronoData = JSON.parse(data);
                console.log({ chronoData });
            } catch (e) {
                console.error("chronodata: " + e);
                console.log({ chronoData });
            }
            return chronoData;
        }
	});

    return chronoData;
}

function fetchChronoDataSync(filename: string): ChronoData {
    let chronoData: ChronoData = {};
    let data;
    //console.log({"1": filename});
    try {
        data = fs.readFileSync(filename);
    } catch (err) {
        console.error("FetchSync: " + err);
    }
    //console.log({"2": data});
    if (data) {
        try {
            chronoData = JSON.parse(data);
        } catch (err) {
            console.error("FetchSync: " + err);
        }
    }
    //console.log({"3": chronoData });

    return chronoData;
}

function writeChronoData(filename: string, data: string): void {
    fs.writeFile(filename, data, (err) => {
	    if (err) {
            console.error(err);
        }
	    console.log("Wrote to " + filename + ":\n" + data);
	});
}

function writeChronoDataSync(filename: string, data: string): void {
    try {
        fs.writeFileSync(filename, data);
    }
	catch (err) {
        console.error(err);
    }
	console.log("Wrote to " + filename + ":\n" + data);
}

function updateChronoData(f: FeatureObject): ChronoData {
    const filename = `static/${f.attributes.zip_code}.json`;
    let c = fetchChronoDataSync(filename);
    let counter: ChronoData = {};
    chronoKeys.forEach(key => {
        if (c[key]) {
            counter[key] = 1;
        }
    });
    
    //console.log({f: filename, c});
    chronoKeys.forEach(key => {
        //console.log({key, curr: f.attributes.current_date_range, prev: f.attributes.previous_week_date_range});
        if (key == f.attributes.current_date_range) {
            c[key] = f.attributes.f7_day_average_case_rate;
            counter[key] = (counter[key]) ? counter[key] + 1 : 1;
            //console.log({ key: key, cur: f.attributes.previous_week_case_rate});
        }
        else if (key == f.attributes.previous_week_date_range) {
            c[key] = f.attributes.previous_week_case_rate;
            counter[key] = (counter[key]) ? counter[key] + 1 : 1;
            //console.log({ key: key, prev: f.attributes.previous_week_case_rate});
        }
        else {
            //onsole.log(".");
        }
    });
    const data = JSON.stringify(c, null, 4);
    //console.log({c, data});
    writeChronoDataSync(filename, data);

    return counter;
}

function combineChronoCounters(a: ChronoData, b: ChronoData): ChronoData {
    let c: ChronoData = {};
    let aTotal = 0;
    let bTotal = 0;
    chronoKeys.forEach(key => {
        aTotal = (a[key]) || 0;
        bTotal = (b[key]) || 0;
        c[key] = aTotal + bTotal;
    });

    return c;
}

export function processFeatures(feats: Array<FeatureObject>, max = 0): Array<FormattedFeatureObject> {
    if (max > 0) {
        if (max < feats.length) {
            feats = feats.slice(0, max);
        }
    }
    let sumZips: ChronoData = {};
    let fmtArray: Array<FormattedFeatureObject> = [];
    for (var i = 0; i < feats.length; i++) {
        let feat = feats[i];
        let c = updateChronoData(feat);
        sumZips = combineChronoCounters(sumZips, c);
        //console.log({process: c});
        let f: FormattedFeatureObject = {
            attributes: formatAttributes(feat.attributes),
        }
        if (typeof feat.geometry === "object") f.geometry = feat.geometry;
        fmtArray.push(f);
    }
    let now = new Date().getTime().toString();
    writeChronoDataSync(`static/sumzips-${now}.json`, JSON.stringify(sumZips, null, 4));
    writeChronoDataSync(`static/sumzips.json`, JSON.stringify(sumZips, null, 4));
    console.log(sumZips);

    return fmtArray;
} 