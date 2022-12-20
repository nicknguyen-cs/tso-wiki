import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import { Hits, InstantSearch, Pagination, Menu, SearchBox, Configure, Highlight, RefinementList } from 'react-instantsearch-hooks-web';
import parse from 'html-react-parser';
const searchClient = algoliasearch('', '');
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

function Search() {
    return (
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5" aria-label="Top">
            <InstantSearch searchClient={searchClient} indexName="sa-wiki">
                <div className="flex">
                    <div className="panel-left">
                        <div className="ais-Panel-Header">
                            Category
                            </div>
                            <hr/>
                        <RefinementList attribute="category" sortBy={['name:asc']} showMore />
                    </div>
                    <div className="panel-right w-full">
                        <SearchBox />
                        <Configure hitsPerPage={5} />
                        <Hits hitComponent={Hit} />
                        <Pagination />
                    </div>
                </div>
            </InstantSearch>
        </nav>
    );
}
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Hit({ hit }) {
    return (
        <div className="max-w-3xl">
            <dl className="mt-6 ">
                <Disclosure as="div" key={hit.title}>
                    {({ open }) => (<>
                        <dt className="text-lg">
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                <span className="font-medium font-gray-500"><Highlight attribute="title" hit={hit} /> </span>
                                <span className="ml-6 flex h-2 items-center">
                                    <ChevronDownIcon
                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                        aria-hidden="true"
                                    />
                                </span>
                            </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2">
                            <p className="flex w-full text-left text-gray-500">{parse(hit.response)}</p>
                        </Disclosure.Panel>
                    </>
                    )}
                </Disclosure>
            </dl>
        </div>
    );
}

export default Search;