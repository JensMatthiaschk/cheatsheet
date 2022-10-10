import React from 'react'



// export function Test() {
//   return (
//     <>
//       {data.map((item) => (
//         <div key={item.id}>
//           <h1>{item.title}</h1>
//           <a className="btn" href={item.link} target='_blank'>Learn More</a>
//         </div>
//       ))}
//     </>
//   )
// }

export default function Card({ item }) {
  return (
    <>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <a href={item.link} target='_blank'>Learn More</a>
          </div>
        </div>
      </div>

      {/* <Test /> */}
      {/* <Card title='Loops' content='bsdbdbsbdsb' /> */}
    </>
  )
}
