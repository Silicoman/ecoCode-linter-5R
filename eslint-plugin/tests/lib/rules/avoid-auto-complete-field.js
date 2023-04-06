const rule = require("../../lib/rules/avoid-auto-complete-field")
const RuleTester = require("eslint").RuleTester

const ruleTester = new RuleTester();
const expectedError = {
    messageId: "ShouldNotAutoCompleteField",
    type: "property",
};

ruleTester.run("avoid-auto-complete-field", rule, {
    valid: [
        `
        let tagArr = document.getElementsByTagName("input");
        for (let i = 0; i < tagArr.length; i++)
        {
            tagArr[i].autocomplete = 'off';
        }
        `,
    ],

    invalid: [
        {
            code:  'let tagArr = document.getElementsByTagName("input");\n        for (let i = 0; i < tagArr.length; i++)\n        {\n            tagArr[i].autocomplete = \'on\';\n        } ,',
            errors: [expectedError],
        },
    ],
});
