import { getAllTopics } from '@/actions/topicActions'
import TopicList from '@/components/TopicList'
import { Suspense } from 'react'

export default async function Home() {
  const { topics } = await getAllTopics()

  return (
    <div>
      <h1 className="text-3xl font-bold">WebDev Topics</h1>
      <p className="mb-4">MongoDB CRUD Example</p>
      <Suspense fallback={<div>로딩 중...</div>}>
        <TopicList topics={topics} />
      </Suspense>
    </div>
  )
}
