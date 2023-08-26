export const docs = [
  {
    title: '开始',
    titleEn: 'Start',
    type: 'doc',
    children: [
      // {
      //   title: '快速开始',
      //   titleEn: 'Getting Started',
      //   name: 'getting-started',
      //   path: '/omi/getting-started',
      //   component: () => import('@/site/docs/getting-started.md'),
      //   componentEn: () => import('@/site/docs/getting-started.en-US.md'),
      // },
      // {
      //   title: '最佳实践',
      //   titleEn: 'Starter Kit',
      //   name: 'quick-start',
      //   path: '/omi/quick-start',
      //   component: () => import('@/site/docs/starter.md'),
      //   componentEn: () => import('@/site/docs/starter.en-US.md'),
      // },
      // {
      //   title: '更新日志',
      //   titleEn: 'CHANGELOG',
      //   name: 'changelog',
      //   path: '/omi/changelog',
      //   component: () => import('@/CHANGELOG.md'),
      // },
      {
        title: '组件概览',
        titleEn: 'Overview',
        name: 'overview',
        path: '/welcome',
        // component: () => import('@common/docs/web/overview.md'),
        // componentEn: () => import('@common/docs/web/overview.en-US.md'),
      },
    ],
  },
  // {
  //   title: '全局配置',
  //   titleEn: 'Global Config',
  //   type: 'doc',
  //   children: [
  //     {
  //       title: '全局特性配置',
  //       titleEn: 'Global Configuration',
  //       name: 'config',
  //       path: '/omi/global-configuration',
  //       component: () => import('tdesign-omi/config-provider/config-provider.md'),
  //       componentEn: () => import('tdesign-omi/config-provider/config-provider.en-US.md'),
  //     },
  //     {
  //       title: '自定义主题',
  //       titleEn: 'Theme Customization',
  //       name: 'custom-theme',
  //       path: '/omi/custom-theme',
  //       component: () => import('@common/theme.md'),
  //       componentEn: () => import('@common/theme.en-US.md'),
  //     },
  //     {
  //       title: '暗黑模式',
  //       titleEn: 'Dark Mode',
  //       name: 'dark-mode',
  //       path: '/omi/dark-mode',
  //       component: () => import('@common/dark-mode.md'),
  //       componentEn: () => import('@common/dark-mode.en-US.md'),
  //     },
  //   ],
  // },
  {
    title: '基础',
    titleEn: 'Base',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Button 按钮',
        titleEn: 'Button',
        name: 'button',
        path: '/button',
        // component: () => import('tdesign-omi/button/button.md'),
        // componentEn: () => import('tdesign-omi/button/button.en-US.md'),
      },
      {
        title: 'Icon 图标',
        titleEn: 'Icon',
        name: 'icon',
        path: '/icon',
        //   component: () => import('tdesign-omi/icon/icon.md'),
        //   componentEn: () => import('tdesign-omi/icon/icon.en-US.md'),
      },
      {
        title: 'Link 链接',
        titleEn: 'Link',
        name: 'link',
        path: '/link',
        //   component: () => import('tdesign-omi/link/link.md'),
        //   componentEn: () => import('tdesign-omi/link/link.en-US.md'),
      },
    ],
  },
  {
    title: '布局',
    titleEn: 'Layout',
    type: 'component',
    children: [
      {
        title: 'Divider 分割线',
        titleEn: 'Divider',
        name: 'divider',
        path: '/divider',
        //       component: () => import('tdesign-omi/divider/divider.md'),
        //       componentEn: () => import('tdesign-omi/divider/divider.en-US.md'),
      },
      //     {
      //       title: 'Grid 栅格',
      //       titleEn: 'Grid',
      //       name: 'grid',
      //       path: '/omi/components/grid',
      //       component: () => import('tdesign-omi/grid/grid.md'),
      //       componentEn: () => import('tdesign-omi/grid/grid.en-US.md'),
      //     },
      //     {
      //       title: 'Layout 布局',
      //       titleEn: 'Layout',
      //       name: 'layout',
      //       path: '/omi/components/layout',
      //       component: () => import('tdesign-omi/layout/layout.md'),
      //       componentEn: () => import('tdesign-omi/layout/layout.en-US.md'),
      //     },
      {
        title: 'Space 间距',
        titleEn: 'Space',
        name: 'space',
        path: '/space',
        //       component: () => import('tdesign-omi/space/space.md'),
        //       componentEn: () => import('tdesign-omi/space/space.en-US.md'),
      },
    ],
  },
  // {
  //   title: '导航',
  //   titleEn: 'Navigation',
  //   type: 'component',
  //   children: [
  //     {
  //       title: 'Affix 固钉',
  //       titleEn: 'Affix',
  //       name: 'affix',
  //       path: '/omi/components/affix',
  //       component: () => import('tdesign-omi/affix/affix.md'),
  //       componentEn: () => import('tdesign-omi/affix/affix.en-US.md'),
  //     },
  //     {
  //       title: 'Anchor 锚点',
  //       titleEn: 'Anchor',
  //       name: 'anchor',
  //       path: '/omi/components/anchor',
  //       component: () => import('tdesign-omi/anchor/anchor.md'),
  //       componentEn: () => import('tdesign-omi/anchor/anchor.en-US.md'),
  //     },
  //     {
  //       title: 'BackTop 回到顶部',
  //       titleEn: 'BackTop',
  //       name: 'back-top',
  //       path: '/omi/components/back-top',
  //       component: () => import('tdesign-omi/back-top/back-top.md'),
  //       componentEn: () => import('tdesign-omi/back-top/back-top.en-US.md'),
  //     },
  //     {
  //       title: 'Breadcrumb 面包屑',
  //       titleEn: 'Breadcrumb',
  //       name: 'breadcrumb',
  //       path: '/omi/components/breadcrumb',
  //       component: () => import('tdesign-omi/breadcrumb/breadcrumb.md'),
  //       componentEn: () => import('tdesign-omi/breadcrumb/breadcrumb.en-US.md'),
  //     },
  //     {
  //       title: 'Dropdown 下拉菜单',
  //       titleEn: 'Dropdown',
  //       name: 'dropdown',
  //       path: '/omi/components/dropdown',
  //       component: () => import('tdesign-omi/dropdown/dropdown.md'),
  //       componentEn: () => import('tdesign-omi/dropdown/dropdown.en-US.md'),
  //     },
  //     {
  //       title: 'Menu 导航菜单',
  //       titleEn: 'Menu',
  //       name: 'menu',
  //       path: '/omi/components/menu',
  //       component: () => import('tdesign-omi/menu/menu.md'),
  //       componentEn: () => import('tdesign-omi/menu/menu.en-US.md'),
  //     },
  //     {
  //       title: 'Pagination 分页',
  //       titleEn: 'Pagination',
  //       name: 'pagination',
  //       path: '/omi/components/pagination',
  //       component: () => import('tdesign-omi/pagination/pagination.md'),
  //       componentEn: () => import('tdesign-omi/pagination/pagination.en-US.md'),
  //     },
  //     {
  //       title: 'Steps 步骤条',
  //       titleEn: 'Steps',
  //       name: 'steps',
  //       path: '/omi/components/steps',
  //       component: () => import('tdesign-omi/steps/steps.md'),
  //       componentEn: () => import('tdesign-omi/steps/steps.en-US.md'),
  //     },
  //     {
  //       title: 'StickyTool 侧边栏',
  //       titleEn: 'StickyTool',
  //       name: 'StickyTool',
  //       path: '/omi/components/sticky-tool',
  //       component: () => import('tdesign-omi/sticky-tool/sticky-tool.md'),
  //       componentEn: () => import('tdesign-omi/sticky-tool/sticky-tool.en-US.md'),
  //     },
  //     {
  //       title: 'Tabs 选项卡',
  //       titleEn: 'Tabs',
  //       name: 'tabs',
  //       path: '/omi/components/tabs',
  //       component: () => import('tdesign-omi/tabs/tabs.md'),
  //       componentEn: () => import('tdesign-omi/tabs/tabs.en-US.md'),
  //     },
  //   ],
  // },
  {
    title: '输入',
    titleEn: 'Form',
    type: 'component',
    children: [
      // {
      //       title: 'AutoComplete 自动填充',
      //       titleEn: 'AutoComplete',
      //       name: 'auto-complete',
      //       path: '/omi/components/auto-complete',
      //       component: () => import('tdesign-omi/auto-complete/auto-complete.md'),
      //       componentEn: () => import('tdesign-omi/auto-complete/auto-complete.en-US.md'),
      //     },
      //     {
      //       title: 'Cascader 级联组件',
      //       titleEn: 'Cascader',
      //       name: 'cascader',
      //       path: '/omi/components/cascader',
      //       component: () => import('tdesign-omi/cascader/cascader.md'),
      //       componentEn: () => import('tdesign-omi/cascader/cascader.en-US.md'),
      //     },
      //     {
      //       title: 'Checkbox 多选框',
      //       titleEn: 'Checkbox',
      //       name: 'checkbox',
      //       path: '/omi/components/checkbox',
      //       component: () => import('tdesign-omi/checkbox/checkbox.md'),
      //       componentEn: () => import('tdesign-omi/checkbox/checkbox.en-US.md'),
      //     },
      //     {
      //       title: 'ColorPicker 颜色选择器',
      //       titleEn: 'ColorPicker',
      //       name: 'color-picker',
      //       path: '/omi/components/color-picker',
      //       component: () => import('tdesign-omi/color-picker/color-picker.md'),
      //       componentEn: () => import('tdesign-omi/color-picker/color-picker.en-US.md'),
      //     },
      //     {
      //       title: 'DatePicker 日期选择器',
      //       titleEn: 'DatePicker',
      //       name: 'date-picker',
      //       path: '/omi/components/date-picker',
      //       component: () => import('tdesign-omi/date-picker/date-picker.md'),
      //       componentEn: () => import('tdesign-omi/date-picker/date-picker.en-US.md'),
      //     },
      //     {
      //       title: 'Form 表单',
      //       titleEn: 'Form',
      //       name: 'form',
      //       path: '/omi/components/form',
      //       component: () => import('tdesign-omi/form/form.md'),
      //       componentEn: () => import('tdesign-omi/form/form.en-US.md'),
      //     },
      //     {
      //       title: 'Input 输入框',
      //       titleEn: 'Input',
      //       name: 'input',
      //       path: '/omi/components/input',
      //       component: () => import('tdesign-omi/input/input.md'),
      //       componentEn: () => import('tdesign-omi/input/input.en-US.md'),
      //     },
      {
        title: 'InputAdornment 输入装饰器',
        titleEn: 'InputAdornment',
        name: 'input-adornment',
        path: '/input-adornment',
        //       component: () => import('tdesign-omi/input-adornment/input-adornment.md'),
        //       componentEn: () => import('tdesign-omi/input-adornment/input-adornment.en-US.md'),
      },
      //     {
      //       title: 'InputNumber 数字输入框',
      //       titleEn: 'InputNumber',
      //       name: 'input-number',
      //       path: '/omi/components/input-number',
      //       component: () => import('tdesign-omi/input-number/input-number.md'),
      //       componentEn: () => import('tdesign-omi/input-number/input-number.en-US.md'),
      //     },
      //     {
      //       title: 'TagInput 标签输入框',
      //       titleEn: 'TagInput',
      //       name: 'tag-input',
      //       docType: 'form',
      //       path: '/omi/components/tag-input',
      //       component: () => import('tdesign-omi/tag-input/tag-input.md'),
      //       componentEn: () => import('tdesign-omi/tag-input/tag-input.en-US.md'),
      //     },
      //     {
      //       title: 'Radio 单选框',
      //       titleEn: 'Radio',
      //       name: 'radio',
      //       path: '/omi/components/radio',
      //       component: () => import('tdesign-omi/radio/radio.md'),
      //       componentEn: () => import('tdesign-omi/radio/radio.en-US.md'),
      //     },
      //     {
      //       title: 'RangeInput 范围输入框',
      //       titleEn: 'RangeInput',
      //       name: 'range-input',
      //       path: '/omi/components/range-input',
      //       component: () => import('tdesign-omi/range-input/range-input.md'),
      //       componentEn: () => import('tdesign-omi/range-input/range-input.en-US.md'),
      //     },
      //     {
      //       title: 'Select 选择器',
      //       titleEn: 'Select',
      //       name: 'select',
      //       path: '/omi/components/select',
      //       component: () => import('tdesign-omi/select/select.md'),
      //       componentEn: () => import('tdesign-omi/select/select.en-US.md'),
      //     },
      //     {
      //       title: 'SelectInput 筛选器输入框',
      //       titleEn: 'SelectInput',
      //       name: 'select-input',
      //       docType: 'form',
      //       path: '/omi/components/select-input',
      //       component: () => import('tdesign-omi/select-input/select-input.md'),
      //       componentEn: () => import('tdesign-omi/select-input/select-input.en-US.md'),
      //     },
      {
        title: 'Slider 滑块',
        titleEn: 'Slider',
        name: 'slider',
        path: '/slider',
        //       component: () => import('tdesign-omi/slider/slider.md'),
        //       componentEn: () => import('tdesign-omi/slider/slider.en-US.md'),
      },
      //     {
      //       title: 'Switch 开关',
      //       titleEn: 'Switch',
      //       name: 'switch',
      //       path: '/omi/components/switch',
      //       component: () => import('tdesign-omi/switch/switch.md'),
      //       componentEn: () => import('tdesign-omi/switch/switch.en-US.md'),
      //     },
      //     {
      //       title: 'Textarea 多行文本框',
      //       titleEn: 'Textarea',
      //       name: 'textarea',
      //       path: '/omi/components/textarea',
      //       component: () => import('tdesign-omi/textarea/textarea.md'),
      //       componentEn: () => import('tdesign-omi/textarea/textarea.en-US.md'),
      //     },
      //     {
      //       title: 'Transfer 穿梭框',
      //       titleEn: 'Transfer',
      //       name: 'transfer',
      //       path: '/omi/components/transfer',
      //       component: () => import('tdesign-omi/transfer/transfer.md'),
      //       componentEn: () => import('tdesign-omi/transfer/transfer.en-US.md'),
      //     },
      //     {
      //       title: 'TimePicker 时间选择器',
      //       titleEn: 'TimePicker',
      //       name: 'time-picker',
      //       path: '/omi/components/time-picker',
      //       component: () => import('tdesign-omi/time-picker/time-picker.md'),
      //       componentEn: () => import('tdesign-omi/time-picker/time-picker.en-US.md'),
      //     },
      //     {
      //       title: 'TreeSelect 树选择',
      //       titleEn: 'TreeSelect',
      //       name: 'tree-select',
      //       path: '/omi/components/tree-select',
      //       component: () => import('tdesign-omi/tree-select/tree-select.md'),
      //       componentEn: () => import('tdesign-omi/tree-select/tree-select.en-US.md'),
      //     },
      //     {
      //       title: 'Upload 上传',
      //       titleEn: 'Upload',
      //       name: 'upload',
      //       path: '/omi/components/upload',
      //       component: () => import('tdesign-omi/upload/upload.md'),
      //       componentEn: () => import('tdesign-omi/upload/upload.en-US.md'),
      //     },
    ],
  },
  {
    title: '数据展示',
    titleEn: 'Data Display',
    type: 'component', // 组件文档
    children: [
      //     {
      //       title: 'Avatar 头像',
      //       titleEn: 'Avatar',
      //       name: 'avatar',
      //       path: '/omi/components/avatar',
      //       component: () => import('tdesign-omi/avatar/avatar.md'),
      //       componentEn: () => import('tdesign-omi/avatar/avatar.en-US.md'),
      //     },
      //     {
      //       title: 'Badge 徽标',
      //       titleEn: 'Badge',
      //       name: 'badge',
      //       path: '/omi/components/badge',
      //       component: () => import('tdesign-omi/badge/badge.md'),
      //       componentEn: () => import('tdesign-omi/badge/badge.en-US.md'),
      //     },
      //     {
      //       title: 'Calendar 日历',
      //       titleEn: 'Calendar',
      //       name: 'calendar',
      //       path: '/omi/components/calendar',
      //       component: () => import('tdesign-omi/calendar/calendar.md'),
      //       componentEn: () => import('tdesign-omi/calendar/calendar.en-US.md'),
      //     },
      //     {
      //       title: 'Card 卡片',
      //       titleEn: 'Card',
      //       name: 'card',
      //       docType: 'data',
      //       path: '/omi/components/card',
      //       component: () => import('tdesign-omi/card/card.md'),
      //       componentEn: () => import('tdesign-omi/card/card.en-US.md'),
      //     },
      //     {
      //       title: 'Collapse 折叠面板',
      //       titleEn: 'Collapse',
      //       name: 'collapse',
      //       docType: 'data',
      //       path: '/omi/components/collapse',
      //       component: () => import('tdesign-omi/collapse/collapse.md'),
      //       componentEn: () => import('tdesign-omi/collapse/collapse.en-US.md'),
      //     },
      {
        title: 'Comment 评论',
        titleEn: 'Comment',
        name: 'comment',
        path: '/comment',
        //       component: () => import('tdesign-omi/comment/comment.md'),
        //       componentEn: () => import('tdesign-omi/comment/comment.en-US.md'),
      },
      //     {
      //       title: 'Image 图片',
      //       titleEn: 'Image',
      //       name: 'image',
      //       path: '/omi/components/image',
      //       component: () => import('tdesign-omi/image/image.md'),
      //       componentEn: () => import('tdesign-omi/image/image.en-US.md'),
      //     },
      //     {
      //       title: 'ImageViewer 图片预览',
      //       titleEn: 'ImageViewer',
      //       name: 'image-viewer',
      //       path: '/omi/components/image-viewer',
      //       component: () => import('tdesign-omi/image-viewer/image-viewer.md'),
      //       componentEn: () => import('tdesign-omi/image-viewer/image-viewer.en-US.md'),
      //     },
      //     {
      //       title: 'List 列表',
      //       titleEn: 'List',
      //       name: 'list',
      //       path: '/omi/components/list',
      //       component: () => import('tdesign-omi/list/list.md'),
      //       componentEn: () => import('tdesign-omi/list/list.en-US.md'),
      //     },
      //     {
      //       title: 'Loading 加载',
      //       titleEn: 'Loading',
      //       name: 'loading',
      //       path: '/omi/components/loading',
      //       component: () => import('tdesign-omi/loading/loading.md'),
      //       componentEn: () => import('tdesign-omi/loading/loading.en-US.md'),
      //     },
      //     {
      //       title: 'Progress 进度条',
      //       titleEn: 'Progress',
      //       name: 'progress',
      //       path: '/omi/components/progress',
      //       component: () => import('tdesign-omi/progress/progress.md'),
      //       componentEn: () => import('tdesign-omi/progress/progress.en-US.md'),
      //     },
      //     {
      //       title: 'Skeleton 骨架屏',
      //       titleEn: 'Skeleton',
      //       name: 'skeleton',
      //       path: '/omi/components/skeleton',
      //       component: () => import('tdesign-omi/skeleton/skeleton.md'),
      //       componentEn: () => import('tdesign-omi/skeleton/skeleton.en-US.md'),
      //     },
      //     {
      //       title: 'Swiper 轮播框',
      //       titleEn: 'Swiper',
      //       name: 'swiper',
      //       path: '/omi/components/swiper',
      //       component: () => import('tdesign-omi/swiper/swiper.md'),
      //       componentEn: () => import('tdesign-omi/swiper/swiper.en-US.md'),
      //     },
      //     {
      //       title: 'Table 表格',
      //       titleEn: 'Table',
      //       name: 'table',
      //       path: '/omi/components/table',
      //       component: () => import('tdesign-omi/table/table.md'),
      //       componentEn: () => import('tdesign-omi/table/table.en-US.md'),
      //     },
      //     {
      //       title: 'Tag 标签',
      //       titleEn: 'Tag',
      //       name: 'tag',
      //       path: '/omi/components/tag',
      //       component: () => import('tdesign-omi/tag/tag.md'),
      //       componentEn: () => import('tdesign-omi/tag/tag.en-US.md'),
      //     },
      //     {
      //       title: 'Timeline 时间轴',
      //       titleEn: 'Timeline',
      //       name: 'timeline',
      //       path: '/omi/components/timeline',
      //       component: () => import('tdesign-omi/timeline/timeline.md'),
      //       componentEn: () => import('tdesign-omi/timeline/timeline.en-US.md'),
      //     },
      //     {
      //       title: 'Tooltip 文字提示',
      //       titleEn: 'Tooltip',
      //       name: 'tooltip',
      //       path: '/omi/components/tooltip',
      //       component: () => import('tdesign-omi/tooltip/tooltip.md'),
      //       componentEn: () => import('tdesign-omi/tooltip/tooltip.en-US.md'),
      //     },
      //     {
      //       title: 'Tree 树',
      //       titleEn: 'Tree',
      //       name: 'tree',
      //       path: '/omi/components/tree',
      //       component: () => import('tdesign-omi/tree/tree.md'),
      //       componentEn: () => import('tdesign-omi/tree/tree.en-US.md'),
      //     },
      //     {
      //       title: 'Watermark 水印',
      //       titleEn: 'Watermark',
      //       name: 'watermark',
      //       path: '/omi/components/watermark',
      //       component: () => import('tdesign-omi/watermark/watermark.md'),
      //       componentEn: () => import('tdesign-omi/watermark/watermark.en-US.md'),
      //     },
      {
        title: 'Rate 评分',
        titleEn: 'Rate',
        name: 'rate',
        docType: 'data',
        path: '/rate',
        //       component: () => import('tdesign-omi/rate/rate.md'),
        //       componentEn: () => import('tdesign-omi/rate/rate.en-US.md'),
      },
    ],
  },
  {
    title: '消息提醒',
    titleEn: 'Notifications',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Alert 警告提醒',
        titleEn: 'Alert',
        name: 'alert',
        path: '/alert',
        //       component: () => import('tdesign-omi/alert/alert.md'),
        //       componentEn: () => import('tdesign-omi/alert/alert.en-US.md'),
      },
      //     {
      //       title: 'Dialog 对话框',
      //       titleEn: 'Dialog',
      //       name: 'dialog',
      //       path: '/omi/components/dialog',
      //       component: () => import('tdesign-omi/dialog/dialog.md'),
      //       componentEn: () => import('tdesign-omi/dialog/dialog.en-US.md'),
      //     },
      //     {
      //       title: 'Drawer 抽屉',
      //       titleEn: 'Drawer',
      //       name: 'drawer',
      //       path: '/omi/components/drawer',
      //       component: () => import('tdesign-omi/drawer/drawer.md'),
      //       componentEn: () => import('tdesign-omi/drawer/drawer.en-US.md'),
      //     },
      //     {
      //       title: 'Guide 引导',
      //       titleEn: 'Guide',
      //       name: 'guide',
      //       path: '/omi/components/guide',
      //       component: () => import('tdesign-omi/guide/guide.md'),
      //       componentEn: () => import('tdesign-omi/guide/guide.en-US.md'),
      //     },
      {
        title: 'Message 全局提示',
        titleEn: 'Message',
        name: 'message',
        path: '/message',
        //       component: () => import('tdesign-omi/message/message.md'),
        //       componentEn: () => import('tdesign-omi/message/message.en-US.md'),
      },
      {
        title: 'Notification 消息通知',
        titleEn: 'Notification',
        name: 'notification',
        path: '/notification',
        //       component: () => import('tdesign-omi/notification/notification.md'),
        //       componentEn: () => import('tdesign-omi/notification/notification.en-US.md'),
      },
      //     {
      //       title: 'Popconfirm 气泡确认框',
      //       titleEn: 'Popconfirm',
      //       name: 'popconfirm',
      //       path: '/omi/components/popconfirm',
      //       component: () => import('tdesign-omi/popconfirm/popconfirm.md'),
      //       componentEn: () => import('tdesign-omi/popconfirm/popconfirm.en-US.md'),
      //     },
      {
        title: 'Popup 弹出层',
        titleEn: 'Popup',
        name: 'popup',
        path: '/popup',
        //       component: () => import('tdesign-omi/popup/popup.md'),
        //       componentEn: () => import('tdesign-omi/popup/popup.en-US.md'),
      },
    ],
  },
]

const enDocs = docs.map((doc) => {
  return {
    ...doc,
    title: doc.titleEn,
    children: doc?.children?.map((child) => {
      return {
        title: child.titleEn,
        name: `${child.name}-en`,
        path: `${child.path}-en`,
        meta: { lang: 'en' },
        component: child.componentEn || child.component,
      }
    }),
  }
})

export default { docs, enDocs }
