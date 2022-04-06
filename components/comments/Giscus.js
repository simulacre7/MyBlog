import React from 'react'
import { Giscus } from '@giscus/react'
import { useTheme } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'

const GiscusContainer = ({ mapping }) => {
  const { theme, resolvedTheme } = useTheme()
  const { repo, repositoryId, category, categoryId, reactions, metadata, inputPosition, lang } =
    siteMetadata.comment.giscusConfig
  const isDark = theme === 'dark' || resolvedTheme === 'dark'
  const giscusProps = {
    repo,
    repoId: repositoryId,
    category,
    categoryId,
    mapping,
    reactionsEnabled: reactions,
    emitMetadata: metadata,
    inputPosition,
    lang,
    loading: 'lazy',
    theme: isDark
      ? siteMetadata.comment.giscusConfig.darkTheme
      : siteMetadata.comment.giscusConfig.theme,
  }

  return (
    <div className="mt-4">
      <Giscus {...giscusProps} />
    </div>
  )
}

export default GiscusContainer
