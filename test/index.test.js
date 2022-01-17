const stylelint = require("stylelint");
const fs = require("fs");
const path = require("path");
const { it, expect } = require("@jest/globals");

const styledComponentsConfig = require("../styled-components");
const config = require("../index");

const getSnapshot = (result) =>
  result.results.map(({ warnings }) =>
    warnings.map(({ text, ...rest }) => rest)
  );
const getCode = (file) =>
  fs.readFileSync(path.resolve(__dirname, "fixtures", file), "utf-8");

it("should not raise any errors with valid.css", async () => {
  const result = await stylelint.lint({
    code: getCode("valid.css"),
    config,
  });
  expect(result.errored).toBeFalsy();
});

it("should raise errors with invalid.css", async () => {
  const result = await stylelint.lint({
    code: getCode("invalid.css"),
    config,
  });
  expect(result.errored).toBeTruthy();
  expect(getSnapshot(result)).toMatchSnapshot();
});

it("should verify CSS in styled-components", async () => {
  const result = await stylelint.lint({
    code: getCode("Styled.tsx"),
    config: styledComponentsConfig,
  });
  expect(result.errored).toBeTruthy();
  expect(getSnapshot(result)).toMatchSnapshot();
});
