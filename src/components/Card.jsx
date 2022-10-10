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
      <div className="card w-96 bg-base-100 shadow-xl my-3">
        <figure>
          <img src={item.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
          <div className="card-actions justify-end">
            <a href={item.link} target="_blank" className="badge">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* <Test /> */}
      {/* <Card title='Loops' content='bsdbdbsbdsb' /> */}
    </>
  )
}
