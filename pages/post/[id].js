import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { BookmarkIcon } from '@heroicons/react/outline';
import parse from 'html-react-parser';

export default function Post({ post }) {
  const [progress, setProgress] = useState(0);
  const bodyRef = useRef(null);
  const textBody = post?.body?.reduce((acc, { bodyId, tittleBody, content, imageBody }) => {
    return acc += tittleBody + content + imageBody
  }, "")

  useEffect(() => {
    window.addEventListener('scroll', handleBodyScroll)

    return () => {
      window.removeEventListener('scroll', handleBodyScroll)
    }
  }, [])

  const handleBodyScroll = () => {
    if (bodyRef.current) {
      const scrollableHeight = bodyRef.current.clientHeight - window.innerHeight;
      const percentage = window.scrollY / scrollableHeight * 100;
      setProgress(percentage.toFixed(0));
    }
  }

  return (
    <div ref={bodyRef}>
      <div style={{ width: progress + "%" }} className={`fixed h-[3px] bg-red-400 top-0 left-0 z-50`}></div>
      <Header />
      <main className='py-6'>
        <section className='max-w-7xl mx-auto p-4'>
          <div className='flex gap-x-6 mb-4'>
            <span className='text-sm font-bold text-red-500 px-4 py-1 border-2 border-red-500 rounded-full cursor-pointer '>{post?.category?.categoryName}</span>
          </div>
          <h1 className='text-4xl font-bold tracking-wider leading-snug mb-6'>{post?.name}</h1>
          <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center'>
              <img className='h-14 w-14 rounded-full mr-3' src={post?.author?.avatar} alt='avatar' />
              <div>
                <h4 className='font-semibold text-gray-800 cursor-default'>Written by <span className='hover:text-red-500 transition duration-200 ease-out'>{post?.author?.userName}</span></h4>
                <p className='text-sm font-semibold text-gray-500'>Posted on {post.createAt}</p>
              </div>
            </div>
            <BookmarkIcon className="h-7 hover:text-red-500 transition duration-200 ease-out cursor-pointer" />
          </div>
          <div>
            <img className='block w-full max-h-[600px] object-cover rounded-xl' src={post?.mainImg} alt="main image" />
          </div>
        </section>
        <section className='max-w-4xl mx-auto p-4'>
          <div className='flex flex-col gap-y-4 post-content'>
            {parse(textBody)}
          </div>
          <div className='flex gap-x-4 mt-10'>
            <p className='px-5 py-1 rounded-sm bg-red-500 text-white font-bold text-sm border-2 border-red-500 cursor-default hover:bg-white hover:text-red-500 transition duration-150 ease-out'>{post.category.categoryName}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticPaths = async () => {
  const result = await fetch("http://127.0.0.1:8000/posts")
  const posts = await result.json()


  const paths = posts.map((post) => {
    return {
      params: {
        id: post.postId,
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }) => {

  console.log(params)

  const result = await fetch(`http://127.0.0.1:8000/posts/${params?.id}`)
  const post = await result.json()

  console.log(post)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: post[0],
    },
    revalidate: 60,
  }
}