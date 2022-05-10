import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { BookmarkIcon } from '@heroicons/react/outline';
import parse from 'html-react-parser';

const post = {
    id: 1,
    name: "Revealing a Deeper Nature in Illustrations",
    description: "There exist many similar, albeit lesser known, forms of art. The artwork used in gallery, museum...",
    mainImg: "https://cdn.seventhqueen.com/typer.sq/wp-content/uploads/sites/2/2019/08/22115903/illustration_hills_04.min_-700x700.jpg",
    author: {
      id: 1,
      name: "Mangusta Rust",
      avatar: "https://typer.seventhqueen.com/publisher/wp-content/uploads/sites/2/front-user-profile/1571672984_mangusta.jpg",
    },
    category: [
        {
            id: 1,
            categoryName: "WORLDWIDE",
        },
        {
            id: 2,
            categoryName: "GALLERY",
        },
    ],
    body: `
        <h2>Test title</h2>
        <p>The best time with your friends is the weekdays! We’re celebrating our Bubble Time milestone of 5 years! We’re hosting a bubble-stamp party on Tuesday night featuring live entertainment, face painting, bubble balloons, bubble rings, and a giant Bubble Time teddy bear!</p>
        <p>Come out, play the bubble bubble game on our Bubble Time teddy bear or play an amazing game of Bubble Time, just like on Nickelodeon Kids!</p>
        <p><img src="https://cdn.seventhqueen.com/typer.sq/wp-content/uploads/sites/2/2019/08/22115731/bubble_tea_01.min_-819x1024.png" alt="post image" /></p>
        <p>Spikey the Bubble Bobble debuted in A Fidgety Fowl’s Tale!, under the ownership of Fluttershy and Rainbow Dash, taking over Fluttershy’s home in Painted Friendship. As time went on, Spikey became a much larger annoyance to Twilight Sparkle. When Twilight asked her to send some more toys for Spikey to keep the home in check, Twilight decided to give them all to Spikey by giving him the entire collection of Fidgety Fowl Toys, which Spikey immediately loved.</p>
        <p></p>
        <p>Spikey was later placed under Spikey’s care and he returned to his roots in Hoofington Bay to find his dream of a better life being ripped away from him.</p>
    `,
    createdAt: "October 6, 2019",
  };

export default function Post() {
    const [progress, setProgress] = useState(0);
    const bodyRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', handleBodyScroll)

        return () => {
            window.removeEventListener('scroll', handleBodyScroll)
        }
    }, [])

    const handleBodyScroll = () => {
        if(bodyRef.current) {
            const scrollableHeight = bodyRef.current.clientHeight - window.innerHeight;
            const percentage = window.scrollY / scrollableHeight * 100;
            setProgress(percentage.toFixed(0));
        }
    }

  return (
    <div ref={bodyRef}>
        <div style={{width: progress + "%"}} className={`fixed h-[3px] bg-red-400 top-0 left-0 z-50`}></div>
        <Header />
        <main className='py-6'>
            <section className='max-w-7xl mx-auto p-4'>
                <div className='flex gap-x-6 mb-4'>
                    <span className='text-sm font-bold text-red-500 px-4 py-1 border-2 border-red-500 rounded-full cursor-pointer '>GALLERY</span>
                </div>
                <h1 className='text-4xl font-bold tracking-wider leading-snug mb-6'>Happy Bubble Time With Your Friends!</h1>
                <div className='flex justify-between items-center mb-6'>
                   <div className='flex items-center'>
                        <img className='h-14 w-14 rounded-full mr-3' src={post.author.avatar} alt='avatar' />
                        <div>
                            <h4 className='font-semibold text-gray-800 cursor-default'>Written by <span className='hover:text-red-500 transition duration-200 ease-out'>{post.author.name}</span></h4>
                            <p className='text-sm font-semibold text-gray-500'>Posted on {post.createdAt}</p>
                        </div>
                   </div>
                    <BookmarkIcon className="h-7 hover:text-red-500 transition duration-200 ease-out cursor-pointer" />
                </div>
                <div>
                    <img className='block w-full max-h-[600px] object-cover rounded-xl' src={post.mainImg} alt="main image" />
                </div>
            </section>
            <section className='max-w-4xl mx-auto p-4'>
                <div className='flex flex-col gap-y-4 post-content'>
                    {parse(post.body)}
                </div>
                <div className='flex gap-x-4 mt-10'>
                    <p className='px-5 py-1 rounded-sm bg-red-500 text-white font-bold text-sm border-2 border-red-500 cursor-default hover:bg-white hover:text-red-500 transition duration-150 ease-out'>Gallery</p>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}
