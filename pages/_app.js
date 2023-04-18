import '../styles/globals.css'
import { wrapper } from '../store'

/**
 
 *  >> FBI API should be just interesting and provide decent data
 * basic feature set  [*]
 * >> This will use the API to aquire the current most wanted criminals.
 * -- User can search by several categories: name/alias, last seen
 * -- User can filter by ****
 * -- User (bounty hunters?) can look for rewards offered
 *
 * general user flow (what is the first page and what is the feature on that page) [*]
 * >> bring up photos? "Infinite scroll"
 * investigate how to incorporate tailwindcss in a nextjs app and react query
 *
 *  **** OTHER  NOTES ----->
 * useEffect to filter. includes, lowercase
 * Input field: what to put in form.  value
 */

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
