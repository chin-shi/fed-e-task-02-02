module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      { ignoreAtRules: ["mixin", "extend", "content", "include"] },
    ],
    indentation: 2,
    "no-descending-specificity": null,
  },
};
