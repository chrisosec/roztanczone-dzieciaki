import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const appSource = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");

test("shows registration and conditional signing actions at the top", () => {
  assert.match(appSource, /https:\/\/forms\.gle\/kuGd6wpnk9NbqCJt9/);
  assert.match(appSource, /Zapisz dziecko/);
  assert.match(appSource, /Tylko po otrzymaniu potwierdzenia przyjęcia na zajęcia/);
});

test("removes the lower registration callout", () => {
  assert.doesNotMatch(appSource, /Zapisy już trwają/);
  assert.doesNotMatch(appSource, /className="cta"/);
});
