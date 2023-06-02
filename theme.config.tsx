import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
// import Link from 'next/link'

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
}

export default config
