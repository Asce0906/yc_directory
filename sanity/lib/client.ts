import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,

  // Cahes the data for 60 sec if it is set to true
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
