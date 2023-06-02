import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{display: 'contents'}}><Image src="/logo.jpg" width={30} height={10} alt='logo'/> <span>Cardano Marlowe</span></span>,
  logoLink: "/",
  project: {
    link: 'https://github.com/input-output-hk/marlowe/tree/master/papers',
  },
  chat: {
    icon: <Image 
    alt='Alote'
    width={50}
    height={50}
    src="/telegram.png"
    />,
    link: 'https://t.me/cardanomarlowevietnam',
  },
  docsRepositoryBase: 'https://github.com/input-output-hk/marlowe',
  footer: {
    text: 'Marlowe Docs Việt Nam',
  },
  gitTimestamp: <span>Date: {new Date().getDay() + ' - '+ new Date().getMonth() +' - ' +new Date().getUTCFullYear()}</span>,
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://marlowe.phouse.com.vn' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Update Group'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Cardano Marlowe'}
        />
      </>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Update Group'
      }
    }
  }
}

export default config
