import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const { t } = useTranslation()

  return (
      <div
          data-testid="sidebar"
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      >
        <Button
            data-testid="sidebar-toggle"
            onClick={onToggle}
        >
          {t('Переключить')}
        </Button>
        <div className={cls.switchers}>
           <ThemeSwitcher />
          <LangSwitcher className={cls.lang} />
        </div>
      </div>
  )
}
