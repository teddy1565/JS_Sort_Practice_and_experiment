/**
 * 參數不定長度排序，由於測試用的很多地方很粗造
 * 基本上可以參考DFS演算法，但JS實踐上非常方便，但也非常粗造
 * 有機會再補充優化版
 */

let data = [
    [
        ["set","foo","S","1"],
        [
            ["set","foo","S","EX","1550","2"],
            [
                [
                    ["set","foo","S","EX","1550","3"],
                    ["set","foo","S","EX","1550","4"]
                ],
                [
                    ["set","foo","S","EX","1550","5"]
                ],
                [
                    ["set","foo","S","EX","1550","6"]
                ]
            ]
        ],
        ["set","foo","S","7"]
    ],
    [
        ["set","foo","S","EX","1550","8"],
        [
            [
                [
                    [
                        ["set","foo","S","EX","1550","9"],
                        ["set","foo","S","EX","1550","10"],
                        ["set","foo","S","EX","1550","11"]
                    ]
                ],
                [
                    ["set","foo","S","EX","1550","12"]
                ],
                [
                    ["set","foo","S","EX","1550","13"]
                ],
                [
                    ["set","foo","S","EX","1550","14"],
                    ["set","foo","S","EX","1550","15"],
                    ["set","foo","S","EX","1550","16"],
                    ["set","foo","S","EX","1550","17"],
                    ["set","foo","S","EX","1550","18"],
                    [
                        [
                            ["set","foo","S","EX","1550","19"],
                            [
                                [
                                    [
                                        [
                                            [
                                                [
                                                    [
                                                        [
                                                            [
                                                                ["set","foo","S","EX","1550","20"]
                                                            ]
                                                        ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        ["set","foo","S","EX","1550","21"],
                        [
                            ["set","foo","S","EX","1550","22",["set","foo","S",["set","foo","S","EX","1550","23"],"EX","1550","24",["set","foo","S","EX","1550","25"]]]
                        ]
                    ]
                ]
            ]
        ]
    ]
];
let order = [];
function parse(pipeline) {
    if (Array.isArray(pipeline)) {
        let line = [];
        for (let pipe of pipeline) {
            line.push(parse(pipe));
        }
        order.push(line);
    } else {
        return pipeline;
    }
}

// console.log(parse(data));
order = order.filter((value)=>{
    if (value[0] !== undefined) {
        return value;
    }
})
// console.log(order);

let m = ((data)=>{
    let order = [];
    function parse(data) {
        if (Array.isArray(data)) {
            let line = [];
            for (let pipe of data) {
                line.push(parse(pipe));
            }
            order.push(line);
        } else {
            return data;
        }
    }
    parse(data);
    order = order.filter((value)=>{
        if (value[0] !== undefined) {
            return value;
        }
    });
    for (let i in order) {
        order[i] = order[i].filter((value)=>value);
    }
    return order;
})(data);
console.log(m);