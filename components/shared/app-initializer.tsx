import React, { useEffect, useState } from 'react'
import useSettingStore from '@/hooks/use-setting-store'
import { ClientSetting } from '@/types'

export default function AppInitializer({
  setting,
  children,
}: {
  setting: ClientSetting
  children: React.ReactNode
}) {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    // Update the setting in the store when the component mounts or when `setting` changes
    useSettingStore.setState({ setting })
    setInitialized(true)
  }, [setting]) // Depend on `setting` to react to changes

  // Optionally render a fallback while initializing
  if (!initialized) {
    return null // Or a loading spinner, if needed
  }

  return <>{children}</>
}
