// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'tundra',
        mileage: 25000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'forunner',
        mileage: 250000,
        title: 'salvage',
    },
    {
        vin: '1111111111111',
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