import SearchForm from "@/components/SearchForm";

const page = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
  const query = (await searchParams).query;

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
    </>
  )
}

export default page