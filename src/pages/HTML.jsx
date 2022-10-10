import Layout from '../components/Layout'
import { htmlData } from '../data/htmlData'
import Card from '../components/Card'

export default function JavascriptPage() {
  return (
    <Layout>
      <>
        {htmlData.map((item) => (
          <Card item={item} />
        ))}
      </>
    </Layout>
  )
}
