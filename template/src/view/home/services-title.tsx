import React from 'react'
import styles from './index.module.scss'
import { Link } from '../../../i18n'

const ServicesTitle = ({ name }: { name: string }) => (
  <>
    <style jsx>{styles}</style>
    <div className="servicesTitleWrap">
      {name}:<Link href={'/amp-test'}>jump router amp-test page</Link>
    </div>
  </>
)

export default ServicesTitle
