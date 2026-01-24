'use client'

import { Table } from 'antd'

export default function AdminPage() {
  const columns = [
    { title: 'Course', dataIndex: 'course' },
    { title: 'Students', dataIndex: 'students' },
  ]

  const data = [
    { key: '1', course: 'Beginner Drone Pilot', students: 12 },
    { key: '2', course: 'Advanced Filming', students: 8 },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <Table columns={columns} dataSource={data} />
    </section>
  )
}
