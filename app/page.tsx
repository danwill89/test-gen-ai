import Card from './components/card'

export default function Home() {
  return (
    <>
      <Card name="John Doe" age={30} />
      <Card name="Jane Doe" age={25} />
      <Card name="Bob Doe" age={20} />
    </>
  )
}
