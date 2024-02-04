import Dropdown from '@/components/Dropdown';
import PokemonGen1List from '@/content/pokemon/pokemon-gen-1.json';
import { useState } from 'react';

export default function PokemonGen1() {
  const [items, setItems] = useState<Array<any>>([]);

  return (
    <>
      <div className="mt-10 flex justify-between items-center">
        <p className="text-2xl font-semibold text-foreground">Pokemon Gen I</p>
      </div>
      <div className="mt-2 flex justify-start">
        <p className="text-base text-foreground-100">
          The first generation of Pokemon was set in the Kanto Region, there are 151 Pokémon were introduced in this
          generation.
        </p>
      </div>

      <div className="my-10">
        <table className="table-auto border-collapse border">
          <thead className="border">
            <tr>
              <th className="p-2 border">Spite</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">
                <Dropdown
                  label={'Type 1'}
                  options={[
                    {
                      value: 'grass',
                      display: 'Grass',
                      onSelected: (value: string) => null,
                    },
                  ]}
                />
              </th>
              <th className="p-2 border">Type 2</th>
            </tr>
          </thead>
          <tbody>
            {PokemonGen1List.map((item: any, index) => (
              <tr key={index} className="border">
                <td className="p-2 border">
                  <img className="w-16" alt={item.name} src={`/assets/pokemon/${item.name}.png`} />
                </td>
                <td className="p-2 border">{item.name}</td>
                <td className="p-2 border">{item.type1}</td>
                <td className="p-2 border">{item.type2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
