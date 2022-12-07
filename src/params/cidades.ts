import db from '$data/data'

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  return db.hasOwnProperty(param);
}