/**
 * @description 生成统计列表
 * @author hyden
 */

const Mock = require('mockjs');
const getComponentList = require('./getComponentList');
const Random = Mock.Random;

module.exports = function getChartList(len = 10) {
    const componentList = getComponentList();
    const res = [];

    // Use a for loop to ensure the desired number of items in the list
    for (let i = 0; i < componentList.length; i++) {
        const c = componentList[i];
        const stat = {
            id: Random.id(),
            title: Random.ctitle(),
            type: c.type,
            children: []
        };
        console.log(c);
        if (c.props.options && c.props.options.length > 0) {
            for (let j = 0; j < c.props.options.length; j++) {
                const option = c.props.options[j];
                const value = {
                    value: option.value,
                    label: option.label,
                    subtotal: 10,
                    scale: 0.2
                };
                stat.children.push(value);
            }
        }

        res.push(stat);
    }

    return res;
};
