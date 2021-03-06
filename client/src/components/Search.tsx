import { Fragment, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Combobox, Transition } from "@headlessui/react";
import { HiOutlineCheck, HiOutlineSelector, HiSearch } from "react-icons/hi";
import CategoryContext from "../contexts/CategoryContext";

export default function Search() {
  const { categories } = useContext(CategoryContext)!;
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredPeople =
    query === ""
      ? categories
      : categories?.filter((category) =>
          category.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="w-full relative flex items-center md:w-7/12 z-0">
      <Combobox
        value={selected}
        onChange={(event: any) => {
          setSelected(event);
          navigate(`/category/${event.id}`);
        }}
      >
        <div className="relative w-full mt-1">
          <div className="relative w-full text-left bg-white items-center flex rounded-lg shadow-md cursor-default  overflow-hidden">
            <HiSearch
              className="absolute text-crunchyBlue-dark right-3"
              size={24}
            />
            <Combobox.Input
              className="w-full py-2 pl-3 pr-10  text-gray-900"
              displayValue={(person: any) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            {/* <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <HiOutlineSelector
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button> */}
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute w-full py-1 mt-1 z-10 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople?.length === 0 && query !== "" ? (
                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople?.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `cursor-default select-none relative py-2 pl-6 pr-4 ${
                        active ? "text-white bg-crunchyBlue" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate pl-3 ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <HiOutlineCheck
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
