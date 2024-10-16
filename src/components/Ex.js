import React from 'react'

const Ex = () => {
  const dummy = [
    {
      a:'nckjdnck',
      b:'nckjdnck',
      c:'nckjdnck',
      d:'nckjdnck',
      e:'nckjdnck'
    },
    {
      a:'nckjdnck2',
      b:'nckjdnck2',
      c:'nckjdnck2',
      d:'nckjdnck2',
      e:'nckjdnck2'
    },
    {
      a:'nckjdnck3',
      b:'nckjdnck3',
      c:'nckjdnck3',
      d:'nckjdnck3',
      e:'nckjdnck3'
    },
    {
      a:'nckjdnck4',
      b:'nckjdnck4',
      c:'nckjdnck4',
      d:'nckjdnck4',
      e:'nckjdnck4'
    }
  ]
  return (
    <>
      <div>
      {dummy.map(itr => (
        <h3 key={itr.a}>
          {itr.a},  {itr.b}
        </h3>
      ))}
      </div>
    </>
  )
}

export default Ex