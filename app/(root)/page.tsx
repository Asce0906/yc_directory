import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

type StartupCardType = {
  _id: number,
  _createdAt: string,
  views: number,
  author: {
    _id: number,
    name: string
  },
  description: string,
  image: string,
  category: string,
  title: string
}

const page = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: 1,
      _createdAt: new Date().toISOString(),
      views: 55,
      author: {
        _id: 1,
        name: 'Audrian'
      },
      description: 'This is a description',
      image: 'https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Robots',
      title: 'We Robots'
    },
  ];

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
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post}/>
            ))
          ): (
            <p className="no-results">No startups found</p>
          )}
            
        </ul>
      </section>
    </>
  )
}

export default page