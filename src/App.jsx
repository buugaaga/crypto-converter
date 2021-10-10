import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { DropDown } from './components/DropDown'
import { Price } from './components/Price'
import { CURRENCIES } from './constants'
import { fetchCoins } from './redux/actionCreators'
import { Error } from './components/Error'
import './App.scss'

export const App = () => {
  const { cur1, cur2, error } = useSelector((store) => store)
  const dispatch = useDispatch()

  useEffect(() => {
    const savedCur1 = localStorage.getItem('cur1')
    const savedCur2 = localStorage.getItem('cur2')
    if (savedCur1 && savedCur2) {
      dispatch(fetchCoins({ cur1: savedCur1, cur2: savedCur2 }))
    } else {
      dispatch(fetchCoins({ cur1: CURRENCIES.BTC, cur2: CURRENCIES.BNB }))
    }
  }, [])

  const change1Currency = (event) => {
    dispatch(fetchCoins({ cur1: event.target.value, cur2 }))
  }

  const change2Currency = (event) => {
    dispatch(fetchCoins({ cur1, cur2: event.target.value }))
  }

  return (
    <div className="main-container">
      <h3>Конвертер</h3>
      {error ? <Error /> : <Price />}
      <div className="select-container">
        <DropDown changeCurrency={change1Currency} currency={cur1} />
        <DropDown changeCurrency={change2Currency} currency={cur2} />
      </div>
    </div>
  )
}
