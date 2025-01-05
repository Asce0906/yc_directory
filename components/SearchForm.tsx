import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset';
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react';


const SearchForm = ({query}: {query?: string}) => {

    return (
        <Form action="/" scroll={false} className='search-form'>
            <input
                id=""
                defaultValue={query}
                type="text"
                name="query"
                className='search-input'
                placeholder='Search Startups'
            />

            <div className='flex gap-2'>
                {query && <SearchFormReset />}

                <Button type='submit' className='search-btn text-white'>
                    <Search className='size-5' />
                </Button>
            </div>  

        </Form>
    )
}

export default SearchForm