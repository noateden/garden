import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

export interface DropdownOption {
  value: string;
  display: string;
  onSelected: (value: string) => void;
}

export interface DropdownProps {
  label: string;
  options: Array<DropdownOption>;
}

export default function Dropdown({ label, options }: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button className="inline-flex w-full justify-start py-2 text-light-100 font-semibold hover:text-light-200">
          {`${label} 📌`}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute shadow-lg border left-0 z-10 mt-2 w-40 bg-background origin-top-right rounded-md focus:outline-none">
          <div className="py-2">
            {options.map((item, index) => (
              <Menu.Item key={index}>
                <div
                  onClick={() => item.onSelected(item.value)}
                  className="inline-flex w-full items-center px-4 py-2 hover:cursor-pointer hover:bg-dark-300"
                >
                  {item.display}
                </div>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
