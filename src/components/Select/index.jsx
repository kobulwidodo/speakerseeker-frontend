import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";

const Select = ({
  label,
  onChange,
  name,
  placeholder,
  isRequired,
  option,
  errorText,
  margin = "mb-4",
}) => {
  const [selected, setSelected] = useState({ name: placeholder });

  const handleSelect = (item) => {
    setSelected(item);
    const e = {
      target: {
        name,
        value: item.name,
      },
    };
    onChange(e);
  };

  return (
    <div className={margin}>
      <p className="font-normal text-lg text-[#404040] mb-2">
        {label} {isRequired ? <span className="text-red-700">*</span> : ""}
      </p>
      <Listbox value={selected} onChange={handleSelect}>
        <div className="relative mt-1">
          <Listbox.Button className="relative bg-[#FEFEFE] rounded-full text-left text-base placeholder:text-[#909090] placeholder:text-light w-full border border-[#BFBEBE] py-3.5 px-6">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-40">
              {option.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      {errorText ? (
        <span className="text-xs text-red-600">{errorText}</span>
      ) : null}
    </div>
  );
};

export default Select;
