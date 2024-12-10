import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const BlogItem = ({ src, title, desc,id }) => (
    <Link to={`/blog/${id}`} className='grid md:flex gap-8 items-center' >
        <div className='' >
            <img className=' w-full sm:w-[unset] sm:max-w-[500px] rounded-lg' src={src} alt="blog image" />
        </div>
        <div className="">
            <h3 className='custom-title text-3xl font-semibold mb-3 opacity-80 dark:opacity-70' >
            {title}
            </h3>
            <p className='text-sm opacity-85' >{desc}</p>
        </div>
    </Link>
)

const Blog = () => {
  return (
    <div>
        <Header />
        <div className="mt-[150px]"></div>
        <div className='about max-w-[1100px] px-5 sm:px-10 mx-auto mt-12' >
            <div className="text-center">
                <h1 className='text-5xl sm:text-7xl font-semibold custom-title' >Blog</h1>
            </div>
            <div className="grid my-20 gap-16">
                <BlogItem
                    src={"https://framerusercontent.com/images/QwLWaIe5lyB4uPt9Oz3Cq0dFno.jpg"}
                    title={"5 Reasons Economic Crunch Shouldn't Stop You from Investing Real Estate"}
                    id={'economic-crunch'}
                    desc="Economic downturns can bring valuable opportunities, especially in fractional real estate. Here’s why investing now could be a smart move."
                 />
                <BlogItem
                    src={"https://framerusercontent.com/images/LOD2cr2rdokqK1aPZ78YZPAb34.jpg"}
                    title={"Hedge Your Funds Against Inflation: Fractional Real Estate Investment"}
                    id={"hedge-your-funds-against-inflation-fractional-real-estate-investment"}
                    desc="This article explores the impact of recent inflation in Nigeria, driven by the removal of oil subsidies and naira devaluation, and its effects on the economy. It also highlights how fractional real estate investment can serve as an effective hedge against inflation, making property investment more accessible and supporting wealth preservation."
                 />
                <BlogItem
                    src={"https://framerusercontent.com/images/PKaE3aIYojdjzn8y5Fb97BzHwFY.jpg"}
                    title={"Is Fractional Real Estate Investment Safe?"}
                    id={"is-fractional-real-estate-investment-safe"}
                    desc="In this article, we will discuss the risks and rewards associated with fractional real estate investment, emphasizing the importance of transparency and the risk mitigation strategies that can enhance investor confidence."
                 />
                <BlogItem
                    src={"https://framerusercontent.com/images/s9oD8ve7PAqMbeIe322pcjqrTg.jpg"}
                    title={"3 Golden Rules of Real Estate Investing"}
                    id={'3-golden-rules-of-real-estate-investing'}
                    desc="They say, 'Landlords grow rich in their sleep.' That is absolutely correct, but you must consider these factors before committing your hard-earned resources to real estate."
                 />
                <BlogItem
                    src={"https://framerusercontent.com/images/MSqRckGnouUDfvuIkfsV73vuT4.jpg"}
                    title={"What is Fractional Real Estate Investment"}
                    id={"what-is-fractional-real-estate"}
                    desc="In this blog post, our CEO Mr Doyin Adewole explains what  Fractional Real Estate Investment is and why you should start investing."
                 />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Blog
