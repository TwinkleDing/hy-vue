const attrList = [
    {
        name: "border",
        desc: "边框",
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
];

export default attrList;
