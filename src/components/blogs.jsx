const posts = [
    {
        id: 2,
        title: 'My Two Sons Never Found Justice',
        href: '#',
        description:
            'Little did I know it would be my last time seeing my boys',
        imageUrl:
            'https://images.unsplash.com/photo-1565389193823-4e2e15e37dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        date: 'September 18, 2023',
        datetime: '2020-03-16',
        category: { title: 'Kitengela', href: '#' },

    },
    
    {
        id: 1,
        title: 'A Helping Hand Turned Nightmarish:',
        href: '#',
        description:
            'My Encounter with a Stranger Posing as Lost, Ending in a Robbery.',
        imageUrl:
            'https://images.unsplash.com/photo-1621271927452-f032e3100835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        date: 'September 18, 2023',
        datetime: '2020-03-16',
        category: { title: 'Thika Road', href: '#' },

    },
    {
        id: 3,
        title: 'My Two Sons Never Found Justice',
        href: '#',
        description:
            'Little did I know it would be my last time seeing my boys',
        imageUrl:
            'https://images.unsplash.com/photo-1565389193823-4e2e15e37dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        date: 'September 18, 2023',
        datetime: '2020-03-16',
        category: { title: 'Kitengela', href: '#' },

    },
    // More posts...
]

export default function Example() {
    return (
        <div className="bg-white sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Victimized? You're not alone.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <img
                                    src={post.imageUrl}
                                    alt=""
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>

                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
