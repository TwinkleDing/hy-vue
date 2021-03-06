const ATTR_LIST = [
    {
        name: "box",
        zh: "盒模型",
        children: [
            {
                name: "width",
                preset: ["88px", "44px", "128px", "168px", "328px", "648px"],
                value: 0,
                text: "width",
            },
            {
                name: "height",
                preset: ["44px", "88px", "128px", "168px", "328px", "648px"],
                value: 0,
                text: "height",
            },
            {
                name: "boxSizing",
                preset: ["content-box", "border-box", "inherit"],
                presetDesc: [
                    "默认盒模型，宽高不包含padding、border",
                    "宽高包含padding、border",
                    "继承",
                ],
                value: 0,
                text: "box-sizing",
            },
        ],
    },
    {
        name: "padding",
        zh: "填充",
        children: [
            {
                name: "padding",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                desc: "属性可设置四个方向，遵从上右下左",
                value: 0,
                text: "padding",
            },
            {
                name: "paddingTop",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                value: 0,
                text: "padding-top",
            },
            {
                name: "paddingRight",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                value: 0,
                text: "padding-right",
            },
            {
                name: "paddingBottom",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                value: 0,
                text: "padding-bottom",
            },
            {
                name: "paddingLeft",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                value: 0,
                text: "padding-left",
            },
        ],
    },
    {
        name: "margin",
        zh: "间距",
        desc: "与其它box的间距，用法基本同padding",
        children: [
            {
                name: "margin",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                value: 0,
                text: "margin",
            },
            {
                name: "marginTop",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                value: 0,
                text: "margin-top",
            },
            {
                name: "marginRight",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                value: 0,
                text: "margin-right",
            },
            {
                name: "marginBottom",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                value: 0,
                text: "margin-bottom",
            },
            {
                name: "marginLeft",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                value: 0,
                text: "margin-left",
            },
        ],
    },
    {
        name: "border",
        zh: "边框",
        desc: "可分别设置四个方向",
        children: [
            {
                name: "borderWidth",
                preset: ["0", "1px", "2px", "3px", "4px", "5px"],
                value: 0,
                text: "border-width",
            },
            {
                name: "borderStyle",
                preset: [
                    "dashed",
                    "dotted",
                    "solid",
                    "double",
                    "groove",
                    "ridge",
                    "inset",
                    "outset",
                    "none",
                ],
                value: 0,
                text: "border-style",
            },
            {
                name: "borderColor",
                preset: [
                    "#000",
                    "#00f",
                    "#0f0",
                    "#0ff",
                    "#f00",
                    "#f0f",
                    "#ff0",
                    "#fff",
                ],
                value: 0,
                text: "border-color",
            },
            {
                name: "borderRadius",
                preset: ["0", "10%", "20%", "30%", "40%", "50%"],
                value: 0,
                text: "border-radius",
            },
        ],
    },
    {
        name: "position",
        zh: "位置",
        desc: "top和left的优先级高于bottom和right",
        children: [
            {
                name: "position",
                preset: ["relative", "absolute", "fixed", "sticky"],
                presetDesc: [
                    "相对自身定位",
                    "相对上一个非static（默认）定位",
                    "相对于屏幕窗口定位",
                    "粘性布局只在其父元素空间内生效",
                ],
                value: 0,
                text: "position",
            },
            {
                name: "top",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                value: 0,
                text: "top",
            },
            {
                name: "left",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                value: 0,
                text: "left",
            },
            {
                name: "bottom",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                value: 0,
                text: "bottom",
            },
            {
                name: "right",
                preset: ["0", "3px", "7px", "11px", "17px", "29px"],
                value: 0,
                text: "right",
            },
        ],
    },
    {
        name: "font",
        zh: "文字",
        children: [
            {
                name: "fontSize",
                preset: ["12px", "16px", "28px", "40px", "60px"],
                value: 0,
                text: "font-size",
            },
            {
                name: "fontWeight",
                preset: [
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                ],
                value: 0,
                text: "font-weight",
            },
            {
                name: "FontFamily",
                preset: [
                    "微软雅黑",
                    "宋体",
                    "auto",
                    "fangsong",
                    "cursive",
                    "emoji",
                    "fantasy",
                    "math",
                    "monospace",
                    "none",
                    "sans-serif",
                    "serif",
                    "system-ui",
                ],
                value: 0,
                text: "font-family",
            },
            {
                name: "color",
                preset: [
                    "#000",
                    "#00f",
                    "#0f0",
                    "#0ff",
                    "#f00",
                    "#f0f",
                    "#ff0",
                    "#fff",
                ],
                value: 0,
                text: "color",
            },
            {
                name: "textAlign",
                preset: ["start", "left", "center", "right", "end"],
                value: 0,
                text: "text-align",
            },
        ],
    },
    // {
    //     name: "background",
    //     zh: "背景",
    //     children: [
    //         {
    //             name: "backgroundColor",
    //             preset: [
    //                 "#000",
    //                 "#00f",
    //                 "#0f0",
    //                 "#0ff",
    //                 "#f00",
    //                 "#f0f",
    //                 "#ff0",
    //                 "#fff",
    //             ],
    //             value: 0,
    //             text: "background-color",
    //         },
    // {
    //     name: "backgroundImage",
    //     preset: [`url(${require('./assets/logo.png')})`,"../assets/logo.png"],
    //     value: 0,
    //     text: "background-image",
    // },
    // {
    //     name: "backgroundPosition",
    //     preset: [],
    //     value: 0,
    //     text: "background-position",
    // },
    // {
    //     name: "backgroundSize",
    //     preset: [],
    //     value: 0,
    //     text: "background-size",
    // },
    // {
    //     name: "backgroundRepeat",
    //     preset: [],
    //     value: 0,
    //     text: "background-repeat",
    // },
    //     ],
    // },
];

export default ATTR_LIST;
