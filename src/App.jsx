import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selected, setSelected] = useState('Jam');

  const toggleGood = (good) => {
    setSelected(prev => prev === good ? '' : good);
  };

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {selected || 'No goods selected'}

        {selected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelected('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>

          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={selected === good ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className={classNames('button', {
                    'is-info': selected === good,
                  })}
                  onClick={() => toggleGood(good)}
                >
                  {selected === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </main>
  );
};
