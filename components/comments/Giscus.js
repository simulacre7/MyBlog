import React, { useCallback } from 'react'
import { Giscus } from '@giscus/react'
import { useTheme } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'

const GiscusContainer = ({ mapping }) => {
  const { theme, resolvedTheme } = useTheme()
  const { repo, repositoryId, category, categoryId, reactions, metadata, inputPosition, lang } =
    siteMetadata?.comment?.giscusConfig

  const isDark = theme === 'dark' || resolvedTheme === 'dark'
  const coloredGiscus = (giscusTheme) => (
    <Giscus
      repo={repo}
      repoId={repositoryId}
      category={category}
      categoryId={categoryId}
      mapping={mapping}
      reactionsEnabled={reactions}
      emitMetadata={metadata}
      theme={giscusTheme}
      inputPosition={inputPosition}
      lang={lang}
    />
  )

  return (
    <>
      <div style={{ display: isDark ? 'block' : 'none' }}>
        {coloredGiscus(siteMetadata.comment.giscusConfig.darkTheme)}
      </div>
      <div style={{ display: isDark ? 'none' : 'block' }}>
        {coloredGiscus(siteMetadata.comment.giscusConfig.theme)}
      </div>
    </>
  )
}

export default GiscusContainer

// import React, { useState, useEffect, useCallback } from 'react'
// import { useTheme } from 'next-themes'
// import { useInView } from 'react-intersection-observer'
// import siteMetadata from '@/data/siteMetadata'

// const Giscus = ({ mapping }) => {
//   const [ref, inView] = useInView()
//   const [enableLoadComments, setEnabledLoadComments] = useState(true)
//   const { theme, resolvedTheme } = useTheme()
//   const commentsTheme =
//     siteMetadata.comment.giscusConfig.themeURL === ''
//       ? theme === 'dark' || resolvedTheme === 'dark'
//         ? siteMetadata.comment.giscusConfig.darkTheme
//         : siteMetadata.comment.giscusConfig.theme
//       : siteMetadata.comment.giscusConfig.themeURL

//   const COMMENTS_ID = 'comments-container'

//   const LoadComments = useCallback(() => {
//     setEnabledLoadComments(false)

//     const { repo, repositoryId, category, categoryId, reactions, metadata, inputPosition, lang } =
//       siteMetadata?.comment?.giscusConfig

//     const script = document.createElement('script')
//     script.src = 'https://giscus.app/client.js'
//     script.setAttribute('data-repo', repo)
//     script.setAttribute('data-repo-id', repositoryId)
//     script.setAttribute('data-category', category)
//     script.setAttribute('data-category-id', categoryId)
//     script.setAttribute('data-mapping', mapping)
//     script.setAttribute('data-reactions-enabled', reactions)
//     script.setAttribute('data-emit-metadata', metadata)
//     script.setAttribute('data-input-position', inputPosition)
//     script.setAttribute('data-lang', lang)
//     script.setAttribute('data-theme', commentsTheme)
//     script.setAttribute('crossorigin', 'anonymous')
//     script.async = true

//     const comments = document.getElementById(COMMENTS_ID)
//     if (comments) comments.appendChild(script)

//     return () => {
//       const comments = document.getElementById(COMMENTS_ID)
//       if (comments) comments.innerHTML = ''
//     }
//   }, [commentsTheme, mapping])

//   // Reload on theme change
//   useEffect(() => {
//     const iframe = document.querySelector('iframe.giscus-frame')
//     if (!iframe) return
//     LoadComments()
//   }, [LoadComments])

//   // 이 컴포넌트가 화면에 보이면 comments를 불러옴
//   useEffect(() => {
//     LoadComments()
//   }, [inView])

//   return (
//     <div ref={ref} className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
//       {/* {enableLoadComments && <button onClick={LoadComments}>Load Comments</button>} */}
//       <div className="giscus" id={COMMENTS_ID} />
//     </div>
//   )
// }

// export default Giscus
