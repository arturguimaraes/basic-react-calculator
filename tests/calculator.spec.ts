/* eslint-disable testing-library/prefer-screen-queries*/

import { test, expect } from '@playwright/test';
import { PLAYWRIGHT_SELECTORS } from '../src/utils/test-utils';

test('has all inputs', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  for (var i = 0; i <= 9; i++) {
    const input = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}${i}`);
    expect(await input.textContent()).toBe(`${i}`);
  }
});

test('has all operators', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const sumButton = page.getByTestId(`${PLAYWRIGHT_SELECTORS.operators.sum}`);
  expect(await sumButton.textContent()).toBe(`+`);

  const subtractionButton = page.getByTestId(
    `${PLAYWRIGHT_SELECTORS.operators.subtraction}`
  );
  expect(await subtractionButton.textContent()).toBe(`-`);

  const multiplicationButton = page.getByTestId(
    `${PLAYWRIGHT_SELECTORS.operators.multiplication}`
  );
  expect(await multiplicationButton.textContent()).toBe(`*`);

  const divisionButton = page.getByTestId(
    `${PLAYWRIGHT_SELECTORS.operators.division}`
  );
  expect(await divisionButton.textContent()).toBe(`/`);

  const resultButton = page.getByTestId(
    `${PLAYWRIGHT_SELECTORS.operators.result}`
  );
  expect(await resultButton.textContent()).toBe(`=`);

  const percentageButton = page.getByTestId(
    `${PLAYWRIGHT_SELECTORS.operators.percentage}`
  );
  expect(await percentageButton.textContent()).toBe(`%`);
});

test('starts with cleared input and total', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const screen = page.getByTestId(`${PLAYWRIGHT_SELECTORS.screen}`);
  expect(await screen.textContent()).toBe(`0`);

  const total = page.getByTestId(`${PLAYWRIGHT_SELECTORS.total}`);
  expect(await total.textContent()).toBe(`0`);
});

test('clear button works properly', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const input1 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}1`);
  await input1.click();

  const screen = page.getByTestId(`${PLAYWRIGHT_SELECTORS.screen}`);
  expect(await screen.textContent()).toBe(`1`);

  const clear = page.getByTestId(`${PLAYWRIGHT_SELECTORS.clear}`);
  await clear.click();

  const total = page.getByTestId(`${PLAYWRIGHT_SELECTORS.total}`);
  expect(await screen.textContent()).toBe(`0`);
  expect(await total.textContent()).toBe(`0`);
});

test('execute 1 + 5 = 6', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const input1 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}1`);
  await input1.click();

  const screen = page.getByTestId(`${PLAYWRIGHT_SELECTORS.screen}`);
  expect(await screen.textContent()).toBe(`1`);

  const sum = page.getByTestId(`${PLAYWRIGHT_SELECTORS.operators.sum}`);
  await sum.click();

  const total = page.getByTestId(`${PLAYWRIGHT_SELECTORS.total}`);
  expect(await total.textContent()).toBe(`1 +`);

  const input5 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}5`);
  await input5.click();
  expect(await screen.textContent()).toBe(`5`);
  expect(await total.textContent()).toBe(`1 + 5`);

  const result = page.getByTestId(`${PLAYWRIGHT_SELECTORS.operators.result}`);
  await result.click();

  expect(await total.textContent()).toBe(`6`);
});

test('execute 5 - 4 = 1', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const input5 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}5`);
  await input5.click();

  const screen = page.getByTestId(`${PLAYWRIGHT_SELECTORS.screen}`);
  expect(await screen.textContent()).toBe(`5`);

  const subtraction = page.getByTestId(
    `${PLAYWRIGHT_SELECTORS.operators.subtraction}`
  );
  await subtraction.click();

  const total = page.getByTestId(`${PLAYWRIGHT_SELECTORS.total}`);
  expect(await total.textContent()).toBe(`5 -`);

  const input4 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}4`);
  await input4.click();
  expect(await screen.textContent()).toBe(`4`);
  expect(await total.textContent()).toBe(`5 - 4`);

  const result = page.getByTestId(`${PLAYWRIGHT_SELECTORS.operators.result}`);
  await result.click();

  expect(await total.textContent()).toBe(`1`);
});

test('execute 5 x 6 = 30', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const input5 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}5`);
  await input5.click();

  const screen = page.getByTestId(`${PLAYWRIGHT_SELECTORS.screen}`);
  expect(await screen.textContent()).toBe(`5`);

  const multiplication = page.getByTestId(
    `${PLAYWRIGHT_SELECTORS.operators.multiplication}`
  );
  await multiplication.click();

  const total = page.getByTestId(`${PLAYWRIGHT_SELECTORS.total}`);
  expect(await total.textContent()).toBe(`5 x`);

  const input6 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}6`);
  await input6.click();
  expect(await screen.textContent()).toBe(`6`);
  expect(await total.textContent()).toBe(`5 x 6`);

  const result = page.getByTestId(`${PLAYWRIGHT_SELECTORS.operators.result}`);
  await result.click();

  expect(await total.textContent()).toBe(`30`);
});

test('execute 20 / 4 = 5', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const input2 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}2`);
  await input2.click();

  const screen = page.getByTestId(`${PLAYWRIGHT_SELECTORS.screen}`);
  expect(await screen.textContent()).toBe(`2`);

  const input0 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}0`);
  await input0.click();
  expect(await screen.textContent()).toBe(`20`);

  const division = page.getByTestId(
    `${PLAYWRIGHT_SELECTORS.operators.division}`
  );
  await division.click();

  const total = page.getByTestId(`${PLAYWRIGHT_SELECTORS.total}`);
  expect(await total.textContent()).toBe(`20 /`);

  const input4 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}4`);
  await input4.click();
  expect(await screen.textContent()).toBe(`4`);
  expect(await total.textContent()).toBe(`20 / 4`);

  const result = page.getByTestId(`${PLAYWRIGHT_SELECTORS.operators.result}`);
  await result.click();

  expect(await total.textContent()).toBe(`5`);
});

test('execute 1 / 3 = 0.3333333333333333', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const input1 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}1`);
  await input1.click();

  const screen = page.getByTestId(`${PLAYWRIGHT_SELECTORS.screen}`);
  expect(await screen.textContent()).toBe(`1`);

  const division = page.getByTestId(
    `${PLAYWRIGHT_SELECTORS.operators.division}`
  );
  await division.click();

  const total = page.getByTestId(`${PLAYWRIGHT_SELECTORS.total}`);
  expect(await total.textContent()).toBe(`1 /`);

  const input3 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}3`);
  await input3.click();
  expect(await screen.textContent()).toBe(`3`);
  expect(await total.textContent()).toBe(`1 / 3`);

  const result = page.getByTestId(`${PLAYWRIGHT_SELECTORS.operators.result}`);
  await result.click();

  expect(await total.textContent()).toBe(`0.3333333333333333`);
});

test('execute 10 / 4 - 1.2 = 1.3', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const input1 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}1`);
  await input1.click();
  const screen = page.getByTestId(`${PLAYWRIGHT_SELECTORS.screen}`);
  expect(await screen.textContent()).toBe(`1`);

  const input0 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}0`);
  await input0.click();
  expect(await screen.textContent()).toBe(`10`);

  const division = page.getByTestId(
    `${PLAYWRIGHT_SELECTORS.operators.division}`
  );
  await division.click();

  const total = page.getByTestId(`${PLAYWRIGHT_SELECTORS.total}`);
  expect(await total.textContent()).toBe(`10 /`);

  const input4 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}4`);
  await input4.click();
  expect(await screen.textContent()).toBe(`4`);
  expect(await total.textContent()).toBe(`10 / 4`);

  const subtraction = page.getByTestId(
    `${PLAYWRIGHT_SELECTORS.operators.subtraction}`
  );
  await subtraction.click();
  expect(await total.textContent()).toBe(`2.5 -`);

  await input1.click();
  expect(await screen.textContent()).toBe(`1`);
  expect(await total.textContent()).toBe(`2.5 - 1`);

  const decimal = page.getByTestId(`${PLAYWRIGHT_SELECTORS.decimal}`);
  await decimal.click();
  expect(await screen.textContent()).toBe(`1.`);
  expect(await total.textContent()).toBe(`2.5 - 1.`);

  const input2 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}2`);
  await input2.click();
  expect(await screen.textContent()).toBe(`1.2`);
  expect(await total.textContent()).toBe(`2.5 - 1.2`);

  const result = page.getByTestId(`${PLAYWRIGHT_SELECTORS.operators.result}`);
  await result.click();

  expect(await total.textContent()).toBe(`1.3`);
});

test('execute 2 + 3 * 2 / 4 = 2.5', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const input2 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}2`);
  await input2.click();

  const screen = page.getByTestId(`${PLAYWRIGHT_SELECTORS.screen}`);
  expect(await screen.textContent()).toBe(`2`);

  const sum = page.getByTestId(`${PLAYWRIGHT_SELECTORS.operators.sum}`);
  await sum.click();

  const total = page.getByTestId(`${PLAYWRIGHT_SELECTORS.total}`);
  expect(await total.textContent()).toBe(`2 +`);

  const input3 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}3`);
  await input3.click();
  expect(await screen.textContent()).toBe(`3`);
  expect(await total.textContent()).toBe(`2 + 3`);

  const multiplication = page.getByTestId(
    `${PLAYWRIGHT_SELECTORS.operators.multiplication}`
  );
  await multiplication.click();
  expect(await total.textContent()).toBe(`5 x`);

  await input2.click();
  expect(await screen.textContent()).toBe(`2`);
  expect(await total.textContent()).toBe(`5 x 2`);

  const division = page.getByTestId(
    `${PLAYWRIGHT_SELECTORS.operators.division}`
  );
  await division.click();
  expect(await total.textContent()).toBe(`10 /`);

  const input4 = page.getByTestId(`${PLAYWRIGHT_SELECTORS.input}4`);
  await input4.click();
  expect(await screen.textContent()).toBe(`4`);
  expect(await total.textContent()).toBe(`10 / 4`);

  const result = page.getByTestId(`${PLAYWRIGHT_SELECTORS.operators.result}`);
  await result.click();

  expect(await total.textContent()).toBe(`2.5`);
});
