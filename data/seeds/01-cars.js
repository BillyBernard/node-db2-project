// STRETCH
const cars = [
    {
        vin: 'JH4KA2540GC007745',
        make: 'toyota',
        model: 'tundra',
        mileage: 25000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '1GCHK23244F199207',
        make: 'toyota',
        model: 'forunner',
        mileage: 250000,
        title: 'salvage',
    },
    {
        vin: 'WBANV93589C133312',
        make: 'ford',
        model: 'focus',
        mileage: 10000,
    },
]

// exports.seed = function(knex) {
//     return knex('cars').truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}