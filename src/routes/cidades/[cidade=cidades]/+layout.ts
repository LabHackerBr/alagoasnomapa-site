/** @type {import('./$types').PageLoad} */
import db from '$data/data'

export function load({ params }) {
  return {
    city: db[params.cidade] as cidade
  }
}