import Layout from '../components/Layout'
import { cssData } from '../data/cssData'
import Card from '../components/Card'

export default function JavascriptPage() {
  return (
    <Layout>
      <>
        {cssData.map((item) => (
          <Card item={item} />
        ))}
      </>
    </Layout>
  )
}
