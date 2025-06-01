import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Feedback() {
  return (
    <>
      <Head>
        <title>Feedback - Welcome</title>
        <meta name="description" content="Provide your feedback" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="min-h-screen w-full bg-gradient-to-b from-[#f5f8ff] via-[#e6edfb] to-white flex flex-col items-center pt-12 pb-24">
        <div className="w-full max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#5B8CFF] to-[#3F5EFB]">
            Share your feedback
          </h1>
          <p className="mt-4 text-lg text-gray-700 font-medium">
            We value your feedback to help us improve
          </p>
        </div>
        <div className="w-full max-w-2xl rounded-2xl shadow-xl border border-gray-100 bg-white p-4 sm:p-8">
          <iframe
            src="https://nz16hldmtc.feishu.cn/share/base/form/shrcnZjxGGhu1vVvpcgDeZ5hVfb"
            width="100%"
            height="800px"
            frameBorder="0"
            className="rounded-xl"
            style={{ background: 'transparent' }}
            title="Feishu Feedback Form"
            allowFullScreen
          />
        </div>
      </section>
    </>
  )
} 