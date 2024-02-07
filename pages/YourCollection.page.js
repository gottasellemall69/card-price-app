import React,{useState,useMemo} from "react";
import SportsPagination from "@/components/Sports/SportsPagination";
import Loading from "@/components/loading";

const YourCollection=({collection,searchQuery}) => {
  const [selectedItems,setSelectedItems]=useState([]);

  const filteredCollection=useMemo(() => {
    // Filter the collection based on the search query
    return collection?.filter((card) =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      .map(card => ({
        ...card,
        selected: selectedItems.includes(card.id),
      }));
  },[collection,searchQuery,selectedItems]);

  const handleItemSelection=(itemId,isSelected) => {
    if(isSelected) {
      setSelectedItems(prevSelectedItems => [...prevSelectedItems,itemId]);
    } else {
      setSelectedItems(prevSelectedItems => prevSelectedItems.filter(item => item!==itemId));
    }
  };

  const handleAddToCollection=() => {
    // Implement your logic to add the selected items to the user's collection
    console.log('Selected Items:',selectedItems);
    setSelectedItems([]); // Clear the selected items after adding to the collection
  };

  return (
    <div>
      <div id="main-content" className="h-full w-full bg-transparent relative overflow-y-auto">
        <main>
          <div className="pt-6 px-4">
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
              <div className="bg-transparent shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-white">total value of collection in $</span>
                    <h3 className="text-base font-normal text-white">Total Collection Value</h3>
                  </div>
                  <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                    overall gain or loss in %
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div id="main-chart"></div>
              </div>
              <div className="bg-transparent shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Top Rising Cards</h3>
                    <span className="text-base font-normal text-white">This is a list of the cards that rose the most in value</span>
                  </div>
                  <div className="flex-shrink-0">
                    <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                  </div>
                </div>
                <div className="flex flex-col mt-8">
                  <div className="overflow-x-auto rounded-lg">
                    <div className="align-middle inline-block min-w-full">
                      <div className="shadow overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-transparent">
                            <tr>
                              <th scope="col" className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Name
                              </th>
                              <th scope="col" className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Current Price
                              </th>
                              <th scope="col" className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Change %
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-transparent">
                            <tr>
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                                <span className="font-semibold">card.name</span>
                              </td>
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                                card.price
                              </td>
                              <td className="p-4 whitespace-nowrap text-sm font-semibold text-white">
                                card.priceChange
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <div className="bg-transparent shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-white">number of cards added within a period of time</span>
                    <h3 className="text-base font-normal text-white">New cards added this week</h3>
                  </div>
                </div>
              </div>
              <div className="bg-transparent shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-white">5,355</span>
                    <h3 className="text-base font-normal text-white">Visitors this week</h3>
                  </div>
                  <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                    32.9%
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-transparent shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-white">385</span>
                    <h3 className="text-base font-normal text-white">User signups this week</h3>
                  </div>
                  <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                    -2.7%
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
              <div className="bg-transparent shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold leading-none text-white">Latest Cards</h3>
                  <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                    View all
                  </a>
                </div>
                <div className="flow-root">
                  <ul role="list" className="divide-y divide-gray-200">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            Neil Sims
                          </p>
                          <p className="text-sm text-white truncate">
                            <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">[email&#160;protected]</a>
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white">
                          $320
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/bonnie-green.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            Bonnie Green
                          </p>
                          <p className="text-sm text-white truncate">
                            <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9">[email&#160;protected]</a>
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white">
                          $3467
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/michael-gough.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            Michael Gough
                          </p>
                          <p className="text-sm text-white truncate">
                            <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="57323a363e3b17203e3933242332257934383a">[email&#160;protected]</a>
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white">
                          $67
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/thomas-lean.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            Thomes Lean
                          </p>
                          <p className="text-sm text-white truncate">
                            <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="284d45494144685f41464c5b5c4d5a064b4745">[email&#160;protected]</a>
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white">
                          $2367
                        </div>
                      </div>
                    </li>
                    <li className="pt-3 sm:pt-4 pb-0">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/lana-byrd.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            Lana Byrd
                          </p>
                          <p className="text-sm text-white truncate">
                            <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf">[email&#160;protected]</a>
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white">
                          $367
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-transparent shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <h3 className="text-xl leading-none font-bold text-white mb-10">Acquisition Overview</h3>
                <div className="block w-full overflow-x-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-4 bg-transparent text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Top Channels</th>
                        <th className="px-4 bg-transparent text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Users</th>
                        <th className="px-4 bg-transparent text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="text-white">
                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-white whitespace-nowrap p-4">5,649</td>
                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2 text-xs font-medium">30%</span>
                            <div className="relative w-full">
                              <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div className="bg-cyan-600 h-2 rounded-sm"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-white">
                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-white whitespace-nowrap p-4">4,025</td>
                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2 text-xs font-medium">24%</span>
                            <div className="relative w-full">
                              <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div className="bg-orange-300 h-2 rounded-sm"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-white">
                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-white whitespace-nowrap p-4">3,105</td>
                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2 text-xs font-medium">18%</span>
                            <div className="relative w-full">
                              <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div className="bg-teal-400 h-2 rounded-sm"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-white">
                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-white whitespace-nowrap p-4">1251</td>
                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2 text-xs font-medium">12%</span>
                            <div className="relative w-full">
                              <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div className="bg-pink-600 h-2 rounded-sm"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-white">
                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-white whitespace-nowrap p-4">734</td>
                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2 text-xs font-medium">9%</span>
                            <div className="relative w-full">
                              <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div className="bg-indigo-600 h-2 rounded-sm"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-white">
                        <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
                        <td className="border-t-0 align-middle text-xs font-medium text-white whitespace-nowrap p-4 pb-0">456</td>
                        <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                          <div className="flex items-center">
                            <span className="mr-2 text-xs font-medium">7%</span>
                            <div className="relative w-full">
                              <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div className="bg-purple-500 h-2 rounded-sm"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default YourCollection;