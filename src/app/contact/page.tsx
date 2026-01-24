'use client'

import { Form, Input, Button } from 'antd'

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <Form layout="vertical">
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Message" name="message">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Send Message
        </Button>
      </Form>
    </section>
  )
}
