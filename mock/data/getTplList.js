/**
 * @description 生成模板列表
 * @author hyden
 */

const Mock = require('mockjs')
const getComponentList = require('./getComponentList')
const Random = Mock.Random

function getTplList(opt = {}) {
    const { len = 10, isDeleted = false, isTpl = false } = opt
    const list = []
    for (let i = 0; i < len; i++) {
        list.push({
            id: Random.id(),
            title: Random.ctitle(),
            description: Random.ctitle(),
            type: Random.natural(0, 1),
            isPublish: Random.natural(0, 1),
            children:getComponentList()
        })
    }
    return list
}

module.exports = getTplList
