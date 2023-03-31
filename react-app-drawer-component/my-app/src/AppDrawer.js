export default function AppDrawer({ heading, items, onClick }) {
  const list = items.map((item) => <button onClick={() => onClick(item)}>{item}</button>)

  return (
      <div className="drawer">
        <h2>{heading}</h2>
        {list}
      </div>
  )
}
