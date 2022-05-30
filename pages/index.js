import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SmallPost from '../components/SmallPost'

const fakeData = [
  {
    id: 1,
    name: "Revealing a Deeper Nature in Illustrations",
    description: "There exist many similar, albeit lesser known, forms of art. The artwork used in gallery, museum...",
    mainImg: "https://cdn.seventhqueen.com/typer.sq/wp-content/uploads/sites/2/2019/08/22115903/illustration_hills_04.min_-700x700.jpg",
    author: {
      id: 1,
      name: "Mangusta Rust",
      avatar: "https://typer.seventhqueen.com/publisher/wp-content/uploads/sites/2/front-user-profile/1571672984_mangusta.jpg",
    },
    category: {
      id: 1,
      categoryName: "WORLDWIDE",
    },
    createdAt: "October 6, 2019",
  },
  {
    id: 2,
    name: "Revealing a Deeper Nature in Illustrations",
    description: "There exist many similar, albeit lesser known, forms of art. The artwork used in gallery, museum...",
    mainImg: "https://cdn.seventhqueen.com/typer.sq/wp-content/uploads/sites/2/2019/08/22115903/illustration_hills_04.min_-700x700.jpg",
    author: {
      id: 1,
      name: "Mangusta Rust",
      avatar: "https://typer.seventhqueen.com/publisher/wp-content/uploads/sites/2/front-user-profile/1571672984_mangusta.jpg",
    },
    category: {
      id: 2,
      categoryName: "TECHNOLOGY",
    },
    createdAt: "October 6, 2019",
  },
  {
    id: 3,
    name: "Revealing a Deeper Nature in Illustrations",
    description: "There exist many similar, albeit lesser known, forms of art. The artwork used in gallery, museum...",
    mainImg: "https://cdn.seventhqueen.com/typer.sq/wp-content/uploads/sites/2/2019/08/22115903/illustration_hills_04.min_-700x700.jpg",
    author: {
      id: 1,
      name: "Mangusta Rust",
      avatar: "https://typer.seventhqueen.com/publisher/wp-content/uploads/sites/2/front-user-profile/1571672984_mangusta.jpg",
    },
    category: {
      id: 1,
      categoryName: "WORLDWIDE",
    },
    createdAt: "October 6, 2019",
  },
  {
    id: 4,
    name: "Revealing a Deeper Nature in Illustrations",
    description: "There exist many similar, albeit lesser known, forms of art. The artwork used in gallery, museum...",
    mainImg: "https://cdn.seventhqueen.com/typer.sq/wp-content/uploads/sites/2/2019/08/22115903/illustration_hills_04.min_-700x700.jpg",
    author: {
      id: 1,
      name: "Mangusta Rust",
      avatar: "https://typer.seventhqueen.com/publisher/wp-content/uploads/sites/2/front-user-profile/1571672984_mangusta.jpg",
    },
    category: {
      id: 1,
      categoryName: "WORLDWIDE",
    },
    createdAt: "October 6, 2019",
  },
]

export default function Home({posts}) {
  const renderPost = () => {
    return posts.map((post, index) => {
      return <SmallPost key={post?.postId} post={post} />
    })
  }

  return (
    <div>
      <Head>
        <title>Typer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto p-4'>
        <section className='pt-12 pb-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8'>
          {
            renderPost()
          }
        </section>
      </main>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const result = await fetch("http://127.0.0.1:8000/posts")
  const posts = await result.json()

  console.log(posts)

  return {
    props: {
      posts
    }
  }
}