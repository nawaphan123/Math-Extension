({
    name: "Math", // Category Name
    description: "Calculate Text like '1+2+3' and output is 6",
    author: "Nawa Phansaen",
    category: "Data Processing",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#0570fc", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: '<label text="For Calculate String"></label>',
        },
        {
            xml: `
            <block type="calculate">
                <value name="problem">
                    <shadow type="text">
                        <field name="TEXT">(1+2)*5</field>
                    </shadow>
                </value>
            </block>
        `
        },
    ],
});
