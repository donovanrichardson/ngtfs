const gtfs = require('gtfs');
const config = require('./config.json')
const {DateTime} = require('luxon')



async function foo(){

    const db = await gtfs.openDb(config);

    // const routes = await gtfs.getRoutes({agency_key:"suffolk"})
    // console.log(routes);

    // const ags = await gtfs.getAgencies()
    // console.log(ags);

    //step 1
    // const routes = await gtfs.getRoutes({
    //   })

    //   console.log(routes);

    // const trips = await gtfs.getTrips({
    //   route_id:'2799'
    // })
    // console.log(trips);

    
    // const d = await db.all("select * from trips left join calendar on calendar.service_id = trips.service_id left join routes on trips.route_id = routes.route_id where calendar.monday = 1 and routes.route_id = '83'")
    // console.log(d);

    // step 2
    const dt = DateTime.local().setZone('America/New_York')
    const xday = dt.weekdayLong.toLowerCase()
    const ymd = dt.toFormat('yyyyLLdd')
    const query = `select distinct stops.*, calendar.* from stops left join stop_times on stops.stop_id = stop_times.stop_id left join trips on stop_times.trip_id = trips.trip_id  left join calendar on calendar.service_id = trips.service_id left join routes on trips.route_id = routes.route_id where routes.route_id = '83' and calendar.${xday}=1 and ${ymd} between calendar.start_date and calendar.end_date;`
    const stops = await db.all(query)
    console.log(stops);
    console.log(query);
    //figure out the calendar exceptions, to, and departures
    // const dt = DateTime.local().setZone('America/New_York')
    // const dt = DateTime.local().setZone('Asia/Tokyo')
    // console.log(dt.weekdayLong);
    // console.log(dt.toFormat('yyyyLLdd'));


}

foo()

// gtfs.import()
