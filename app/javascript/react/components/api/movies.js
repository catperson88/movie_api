import { makeRequest } from "./fetch"

/**
 * Convenience method for a predefined network call
 * @returns {Promise<*>}
 */
export function fetchMovies() {
  return makeRequest('/api/deals');
}
