import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-hooks-web';
import parse from 'html-react-parser';
const searchClient = algoliasearch('', '');
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

function Search() {
    return (
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
            <InstantSearch searchClient={searchClient} indexName="sa-wiki">
                <SearchBox className="mx-auto" />
                <Hits hitComponent={Hit} />
            </InstantSearch>
        </nav>
    );
}
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Hit({ hit }) {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-3 px-4 sm:py-3 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
                    <dl className="mt-6 divide-y divide-gray-200">
                        <Disclosure as="div" key={hit.title} className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt className="text-lg">
                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                            <span className="font-medium text-gray-900">{hit.title}</span>
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
            </div>
        </div>
    );
}

export default Search;