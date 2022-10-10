import Layout from '../components/Layout'
import { jsData } from '../data/javascriptData'
import Card from '../components/Card'

export default function JavascriptPage() {
  return (
    <Layout>
      <>
        {jsData.map((item) => (
          <Card item={item} />
        ))}
      </>
    </Layout>
  )
}
