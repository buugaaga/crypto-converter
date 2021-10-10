import { CURRENCIES } from '../constants'

export const DropDown = ({ changeCurrency, currency }) => {

  return (
    <div style={{ margin: '10px', padding: '10px' }}>
      <select
        onChange={changeCurrency}
        value={currency}
      >
        {Object.keys(CURRENCIES).map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}
