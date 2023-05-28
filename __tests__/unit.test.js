// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('phone test 1', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('phone test 2', () => {
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
});

test('phone test 3', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('phone test 4', () => {
    expect(functions.isPhoneNumber('911')).toBe(false);
});

test('email test 1', () => {
    expect(functions.isEmail('im@jyh.sb')).toBe(true);
});

test('email test 2', () => {
    expect(functions.isEmail('0@gmail.com')).toBe(true);
});

test('email test 3', () => {
    expect(functions.isEmail('abc@def')).toBe(false);
});

test('email test 4', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
});

test('strong password test 1', () => {
    expect(functions.isStrongPassword('abc123')).toBe(true);
});

test('strong password test 2', () => {
    expect(functions.isStrongPassword('strongPass0')).toBe(true);
});

test('strong password test 3', () => {
    expect(functions.isStrongPassword('1234567890')).toBe(false);
});

test('strong password test 4', () => {
    expect(functions.isStrongPassword('0123abcdefg!')).toBe(false);
});

test('date test 1', () => {
    expect(functions.isDate('77/99/2000')).toBe(true);
});

test('date test 2', () => {
    expect(functions.isDate('1/1/2000')).toBe(true);
});

test('date test 3', () => {
    expect(functions.isDate('1/1/00')).toBe(false);
});

test('date test 4', () => {
    expect(functions.isDate('12252023')).toBe(false);
});

test('hex color test 1', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('hex color test 2', () => {
    expect(functions.isHexColor('FfFf01')).toBe(true);
});

test('hex color test 3', () => {
    expect(functions.isHexColor('#1234')).toBe(false);
});

test('hex color test 4', () => {
    expect(functions.isHexColor('#z12345')).toBe(false);
});