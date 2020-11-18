import React from 'react'
import { Helmet } from 'react-helmet'

import { pastImageUrl } from './fuction'
export default function Seo({ data }) {
    return (
        <div>
            <Helmet>
                {/* Google */}
                <title>{data.title}</title>
                <meta http-equiv="content-type" content="text/html;UTF-8" />
                <meta http-equiv="content-language" content="en" />
                <meta http-equiv="content-security-policy" content="upgrade-insecure-requests" />
                <meta name="description" content={data.title} />
                <meta name="author" content="____" />
                <link rel="author" href="https://plus.google.com/____" />
                <link rel="publisher" href="https://plus.google.com/____" />
                <meta name="copyright" content={data.title} />

                <meta http-equiv="revisit-after" content="1 day" />

                <meta property="og:title" content={data.title} />
                <meta property="og:site_name" data-page-subject="true" content="Tosmerl" />
                <meta property="og:url" content={history.href} />
                <meta property="og:description" name="description" content="____" />

                <meta property="og:type" content="article" />
                <meta property="article:published_time" content={data.created_at} />
                <meta property="article:tag" content="____ ____ ____" />
                {/* Facebook */}

                <meta property="og:image" content={pastImageUrl(data.thumbnail)} />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />

                <meta property="og:image" content={pastImageUrl(data.thumbnail)} />
                <meta property="og:image:width" content="470" />
                <meta property="og:image:height" content="470" />

                <meta property="og:image" content={pastImageUrl(data.thumbnail)} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <meta property="og:image" content={pastImageUrl(data.thumbnail)} />
                <meta property="og:image:width" content="1500" />
                <meta property="og:image:height" content="1500" />
                {/* twitter */}
                <meta name="twitter:image" content={pastImageUrl(data.thumbnail)} />
                <meta name="twitter:image" content={pastImageUrl(data.thumbnail)} />
                <meta name="twitter:image" content={pastImageUrl(data.thumbnail)} />


            </Helmet>
        </div>
    )
}

