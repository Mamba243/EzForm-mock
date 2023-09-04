const Mock = require('mockjs')
const getStatList = require('./data/getStatList')
const getChartList = require('./data/getChartList')

const Random = Mock.Random

module.exports = [
    // 答卷列表
    {
        url: '/api/stat/:questionId',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    total: 100, // 分页
                    list: getStatList()
                }
            }
        }
    },
    // 答卷列表
    {
        url: '/api/stat/chart/:questionId',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    total: 100, // 分页
                    list: getChartList()
                }
            }
        }
    },
    // 获取单个组件的统计数据汇总
    {
        url: '/api/stat/:questionId/:componentId',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    stat: [
                        { name: '选项1', count: 20 },
                        { name: '选项2', count: 10 },
                        { name: '选项3', count: 25 },
                    ]
                }
            }
        }
    },
    //彻底删除
    {
        url: '/api/stat',
        method: 'delete',
        response() {
            return {
                errno: 0
            }
        }
    }
]