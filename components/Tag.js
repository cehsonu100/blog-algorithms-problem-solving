import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'
import { algoTagsColor } from '@/lib/constant'

const Tag = ({ text }) => {
  const color = algoTagsColor[text] ? algoTagsColor[text] : 'green'
  const borderColorCSS = 'bg-' + color

  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-xs uppercase hover:text-primary-600 dark:hover:text-primary-400">
        <span
          className={`px-1 border ${borderColorCSS+'-500'} text-white flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease`}>
          {text.split(' ').join('-')}
        </span>
      </a>
    </Link>
  )
}

export default Tag