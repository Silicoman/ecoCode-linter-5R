module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "Avoid auto complete field",
            category: "eco-design",
            recommended: "warn",
        },
        messages: {
            ShouldNotAutoCompleteField:
                "Field should not be auto complete",
        },
        schema: [],
    },
    create: function (context) {
        isNotAutocomplete = true;
        return {
            property(node) {
                if (
                    node.property &&
                    node.property.name ==="getElementsByTagName" &&
                    node.value.value === isNotAutocomplete
                ) {
                    context.report({
                        node,
                        messageId: "ShouldNotAutoCompleteField",
                        data: { selector: node.callee.property.name},
                    });
                }
            },
        };
    },
};
