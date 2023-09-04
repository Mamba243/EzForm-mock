/**
 * @description 生成组件列表
 * @author hyden
 */

const Mock = require('mockjs')

const Random = Mock.Random

function getComponentList() {
    return [
        // Info
        {
            fe_id: 'c1', // 注意，由于统计页，左侧和中间需要数据完全一直，所以要写死 fe_id ，不能用 Random.id()
            type: 'questionInfo', // 组件类型，不能重复，前后端统一好
            title: '问卷信息',
            isHidden: false,
            isLocked: false,
            props: { title: '问卷标题', desc: '问卷描述...' }
        },
        // Title
        {
            fe_id: 'c2',
            type: 'questionTitle', // 组件类型，不能重复，前后端统一好
            title: '标题',
            isHidden: false,
            isLocked: false,
            props: { title: '个人信息调研', level: 4, isCenter: false }
        },
        // Input
        {
            fe_id: 'c3',
            type: 'questionInput',
            title: '请输入你的姓名',
            isHidden: false,
            isLocked: false,
            props: { title: '你的姓名', placeholder: '请输入姓名...' }
        },
        // Input
        {
            fe_id: 'c4',
            type: 'questionInput',
            title: '请输入你的电话',
            isHidden: false,
            isLocked: false,
            props: { title: '你的电话', placeholder: '请输入电话...' }
        },

        // Textarea
        // {
        //     fe_id: 'c5',
        //     type: 'questionTextarea',
        //     title: '多行输入',
        //     isHidden: false,
        //     isLocked: false,
        //     props: { title: '你的爱好', placeholder: '请输入...' }
        // },

        // Paragraph
        // {
        //     fe_id: 'c6',
        //     type: 'questionParagraph',
        //     title: '段落',
        //     isHidden: false,
        //     isLocked: false,
        //     props: { text: '一行段落1\n一行段落2', isCenter: false }
        // },

        // Radio
        {
            fe_id: 'c7',
            type: 'questionRadio',
            title: '单选',
            isHidden: false,
            isLocked: false,
            props: {
                title: '选择下列一项',
                isVertical: false,
                options: [
                  { value: 'item1', label: '选项1' },
                  { value: 'item2', label: '选项2' },
                  { value: 'item3', label: '选项3' },
                ],
                value: '',
              }
        },
        // Checkbox
        {
            fe_id: 'c8',
            type: 'questionCheckbox',
            title: '多选',
            isHidden: false,
            isLocked: false,
            props: {
                title: '选择下列几项',
                isVertical: false,
                options: [
                    { value: 'item1', label: '选项1', checked: false },
                    { value: 'item2', label: '选项2', checked: false },
                    { value: 'item3', label: '选项3', checked: false },
                ],
              }
        }
    ]
}

module.exports = getComponentList
