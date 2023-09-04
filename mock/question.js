const Mock = require('mockjs')
const getQuestionList = require('./data/getQuestionList')
const getComponentList = require('./data/getComponentList')

const Random = Mock.Random

module.exports = [
    {
        // 获取单个问卷信息
        url: '/api/question/:id',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title: Random.ctitle(),
                    desc: '问卷描述',
                    startTime: '2023-8-24 12:00:00',
                    endTime: '2023-9-24 23:59:00',
                    isDeleted: false,
                    isPublished: true,
                    children: JSON.stringify(getComponentList())
                }
                // errno: 1002,
                // msg: '错误测试'
            }
        }
    },
    {
        // 创建问卷
        url: '/api/question',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    {
        // 获取（查询）问卷列表 
        url: '/api/question',
        method: 'get',
        response(ctx) {
            const { url = '', query = {} } = ctx
            const isDeleted = url.indexOf('isDeleted=true') >= 0
            const isPublished = url.indexOf('isPublished=true') >= 0
            const isTpl = url.indexOf('isTpl=true') >= 0

            // 这里是想要获取具体的值，使用url去indexOf显然不合适，所以要用ctx.query
            const pageSize = parseInt(query.pageSize) || 10
            const type = query.type || ''

            return {
                errno: 0,
                data: {
                    list: getQuestionList({ len: pageSize, isPublished,isDeleted, isTpl,type }), // 当前页
                    total: 100 // 总数，用于分页
                }
            }
        }
    },
    {
        // 更新问卷
        url: '/api/question/:id',
        method: 'patch',
        response() {
            return {
                errno: 0
            }
        }
    },
    {
        // 复制问卷
        url: '/api/question/duplicate/:id',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    {
        // 批量彻底删除
        url: '/api/question',
        method: 'delete',
        response() {
            return {
                errno: 0
            }
        }
    }
]