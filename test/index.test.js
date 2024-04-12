import stylelint from "stylelint";
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { it, expect } from "@jest/globals";
import styledComponentsConfig from "../styled-components";
import config from "../index";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const getSnapshot = (result) =>
  result.results.map(({ warnings }) =>
    warnings.map(({ text, ...rest }) => rest),
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
