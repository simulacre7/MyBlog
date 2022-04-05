import React from 'react'
import { Giscus } from '@giscus/react'
import { useTheme } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'

const GiscusContainer = ({ mapping }) => {
  const { theme, resolvedTheme } = useTheme()
  const { repo, repositoryId, category, categoryId, reactions, metadata, inputPosition, lang } =
    siteMetadata?.comment?.giscusConfig

  const isDark = theme === 'dark' || resolvedTheme === 'dark'

  return (
    <>
      <div style={{ display: isDark ? 'block' : 'none' }}>
        <Giscus
          repo={repo}
          repoId={repositoryId}
          category={category}
          categoryId={categoryId}
          mapping={mapping}
          reactionsEnabled={reactions}
          emitMetadata={metadata}
          theme={siteMetadata.comment.giscusConfig.darkTheme}
          inputPosition={inputPosition}
          lang={lang}
        />
      </div>
      <div style={{ display: isDark ? 'none' : 'block' }}>
        <Giscus
          repo={repo}
          repoId={repositoryId}
          category={category}
          categoryId={categoryId}
          mapping={mapping}
          reactionsEnabled={reactions}
          emitMetadata={metadata}
          theme={siteMetadata.comment.giscusConfig.theme}
          inputPosition={inputPosition}
          lang={lang}
        />
      </div>
    </>
  )
}

export default GiscusContainer
