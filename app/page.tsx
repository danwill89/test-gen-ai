import Card, { Job } from './components/card'

export default function Home() {
  return (
    <>
      <Card name="John Doe" age={30} job={Job.SOFTWARE_ENGINEER} title="Senior"/>
      <Card name="Jane Doe" age={25} job={Job.SOFTWARE_ENGINEER} title='Associate'/>
      <Card name="Bob Doe" age={20} job={Job.SOFTWARE_ENGINEER} title='Intern'/>
    </>
  )
}
