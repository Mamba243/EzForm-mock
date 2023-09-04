/**
 * @description 生成统计列表
 * @author hyden
 */

const Mock = require('mockjs')
const getComponentList = require('./getComponentList')

const Random = Mock.Random

module.exports = function getStatList(len = 10) {
    const componentList = getComponentList()

    const res = []

    for (let i = 0; i < len; i++) {
        const stat = {
            _id: Random.id(),
            submitName:Random.ctitle(),
            questionScore:3,
            answerTime:'2022-02-21 12:32:45',
            submitTime:'2022-02-21 23:34:45',
            answerSeconds:21,
            ipAddress:'192.168.1.1',
            deviceType:'PC',
            platformType:'Computer',
            browser:'Chrome',
            children: []
        }

        componentList.forEach(c => {
            const { fe_id, type, props } = c
            let value = ''

            switch(type) {
                case 'questionInput':
                case 'questionTextarea':
                    value = Random.ctitle()
                    break
                case 'questionRadio':
                    if (props.options && props.options.length > 0) {
                        value = props.options[0].label
                    }
                    break
                case 'questionCheckbox':
                    if (props.options && props.options.length >= 2) {
                        value = `${props.options[0].label},${props.options[1].label}`
                    }
                    break
            }

            if (value !== '') {
                const childObject = {
                    fe_id: fe_id,
                    value: value
                }
                stat.children.push(childObject)
            }
        })

        res.push(stat)
    }

    return res
}
