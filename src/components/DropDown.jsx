import { CURRENCIES } from '../constants'
import './DropDown.scss'

export const DropDown = ({ changeCurrency, currency }) => {
  return (
    <div className="drop-down">
      <select onChange={changeCurrency} value={currency}>
        {Object.keys(CURRENCIES).map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}
