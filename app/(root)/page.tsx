import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & {author?: Author};


const page = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
  const query = (await searchParams).query;
  const params = {search:query || null};

  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params});
  
  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch your startup, <br />
          Connect with Entrepreneurs
        </h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on pitches, and get Noticed in virtual competition
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All StartUps'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post}/>
            ))
          ): (
            <p className="no-results">No startups found</p>
          )}
            
        </ul>
      </section>
      <SanityLive />
    </>
  )
}

export default page