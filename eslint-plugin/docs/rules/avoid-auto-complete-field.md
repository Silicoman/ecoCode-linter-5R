# Avoid auto complete field (`@ecocode/avoid-auto-complete-field`)

## Examples

Example of **incorrect** code for this rule:

```js
let tagArr = document.getElementsByTagName("input");
for (let i = 0; i < tagArr.length; i++)
{
    tagArr[i].autocomplete = 'on';
}
```

Examples of **correct** code for this rule:

```js
let tagArr = document.getElementsByTagName("input");
for (let i = 0; i < tagArr.length; i++)
{
    tagArr[i].autocomplete = 'off';
}
```
