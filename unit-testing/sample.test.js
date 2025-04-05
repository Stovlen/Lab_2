import { getHours, getMinutes, getSeconds } from "./sample.js";

describe("getHours", () => {
  test("Повертає години з дати", () => {
    const date = new Date("2025-04-04T14:30:45");
    expect(getHours(date)).toBe(14);
  });

  test("Повертає 0 для півночі", () => {
    const date = new Date("2025-04-04T00:00:00");
    expect(getHours(date)).toBe(0);
  });

  test("Повертає 23 для останньої години доби", () => {
    const date = new Date("2025-04-04T23:59:59");
    expect(getHours(date)).toBe(23);
  });

  test("Не повертає хвилини", () => {
    const date = new Date("2025-04-04T12:45:00");
    expect(getHours(date)).not.toBe(45);
  });

  test("Перевірка типу значення", () => {
    const date = new Date();
    expect(typeof getHours(date)).toBe("number");
  });
});

describe("getMinutes", () => {
  test("Повертає хвилини з дати", () => {
    const date = new Date("2025-04-04T12:34:56");
    expect(getMinutes(date)).toBe(34);
  });

  test("Повертає 0 якщо нуль хвилин", () => {
    const date = new Date("2025-04-04T12:00:00");
    expect(getMinutes(date)).toBe(0);
  });

  test("Повертає 59 як максимальне значення", () => {
    const date = new Date("2025-04-04T12:59:00");
    expect(getMinutes(date)).toBe(59);
  });

  test("Не повертає секунди", () => {
    const date = new Date("2025-04-04T12:00:45");
    expect(getMinutes(date)).not.toBe(45);
  });

  test("Тип значення — number", () => {
    const date = new Date();
    expect(typeof getMinutes(date)).toBe("number");
  });
});

describe("getSeconds", () => {
  test("Повертає секунди з дати", () => {
    const date = new Date("2025-04-04T12:00:45");
    expect(getSeconds(date)).toBe(45);
  });

  test("Повертає 0 коли немає секунд", () => {
    const date = new Date("2025-04-04T12:00:00");
    expect(getSeconds(date)).toBe(0);
  });

  test("Повертає 59 як максимум", () => {
    const date = new Date("2025-04-04T12:00:59");
    expect(getSeconds(date)).toBe(59);
  });

  test("Не повертає хвилини", () => {
    const date = new Date("2025-04-04T12:34:00");
    expect(getSeconds(date)).not.toBe(34);
  });

  test("Тип значення — number", () => {
    const date = new Date();
    expect(typeof getSeconds(date)).toBe("number");
  });
});
