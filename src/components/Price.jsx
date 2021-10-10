import { useSelector } from 'react-redux'

export const Price = () => {
  const { price, cur1, cur2 } = useSelector((store) => store)
  return (
    <div>
      <h4>{`1 ${cur1} = ${price} ${cur2}`}</h4>
    </div>
  )
}
