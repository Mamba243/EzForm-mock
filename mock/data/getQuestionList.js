/**
 * @description 生成问卷列表
 * @author hyden
 */

const Mock = require('mockjs')
const Random = Mock.Random

function getQuestionList(opt = {}) {
    const { len = 10, isDeleted = false, isTpl = false, type, isPublished } = opt
    const list = []
    for (let i = 0; i < len; i++) {
        list.push({
            id: Random.id(),
            title: Random.ctitle(),
            type: type ? Number(type) : Random.natural(0, 1),
            isPublished: isPublished ? isPublished : Random.boolean(),
            isTpl,
            answerNum: Random.natural(50, 100),
            createdAt: Random.datetime(),
            isDeleted,  // 假删除 
        })
    }
    return list
}

module.exports = getQuestionList
