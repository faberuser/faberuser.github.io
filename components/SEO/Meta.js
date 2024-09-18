import React from 'react'
import Head from 'next/head'

export default function Meta() {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME.trim()
    return (
        <Head>
            <title>{username + " Portfolio"}</title>
            <meta charSet="utf-8" />
            <meta name="title" content={`${username} Portfolio`} />
            <meta name="description"
                content={`${username} (${username}) Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS.`} />
            <meta name="author" content={`${username} (${username})`} />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />
            {/* <meta name="image" content={avatar} /> */}

            <meta name="og:title" content={`${username} Portfolio`} />
            <meta name="og:description"
                content={`${username} (${username}) Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS.`} />
            {/* <meta name="og:image" content={avatar} /> */}
            <meta name="og:url" content={`http://${username}.github.io/`} />
            <meta name="og:siteusername" content={`${username} Portfolio`} />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            {/* <link rel="icon" href={avatar} /> */}
            {/* <link rel="apple-touch-icon" href={avatar} /> */}
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
