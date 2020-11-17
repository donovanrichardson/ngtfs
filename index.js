const gtfs = require('gtfs');
const config = require('./config.json')
const {DateTime} = require('luxon')



async function foo(){

    const db = await gtfs.openDb(config);

    // const routes = await gtfs.getRoutes({agency_key:"suffolk"})
    // console.log(routes);

    // const ags = await gtfs.getAgencies()
    // console.log(ags);

    const routes = await gtfs.getRoutes({
      })

      console.log(routes);

    // const trips = await gtfs.getTrips({
    //   route_id:'2799'
    // })
    // console.log(trips);

    // const d = await db.all("select * from trips left join calendar on calendar.service_id = trips.service_id left join routes on trips.route_id = routes.route_id where calendar.monday = 1 and routes.route_id = '2799'")
    // console.log(d);

    // const stops = await db.all("select distinct stops.*, calendar.* from trips left join calendar on calendar.service_id = trips.service_id left join routes on trips.route_id = routes.route_id left join stop_times on stop_times.trip_id = trips.trip_id left join stops on stops.stop_id = stop_times.stop_id  where calendar.monday = 1 and routes.route_id = '2799'")
    // console.log(stops);
    // const dt = DateTime.local().setZone('America/New_York')
    const dt = DateTime.local().setZone('Asia/Tokyo')
    console.log(dt.weekdayLong);
    console.log(dt.toFormat('yyyyLLdd'));


}

foo()

// gtfs.import()
