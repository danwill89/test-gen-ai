import Card from './components/card'

export default function Home() {
  return (
    <>
      <Card name="John Doe" age={30} job='Software Engineer'/>
      <Card name="Jane Doe" age={25} job='Software Engineer'/>
      <Card name="Bob Doe" age={20} job='Software Engineer'/>
    </>
  )
}
