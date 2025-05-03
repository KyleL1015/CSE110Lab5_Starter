// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('test 123-456-7890 as valid phone number', ()=> {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('test (123) 456-7890 as valid phone number', ()=> {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('test 2 as valid phone number', ()=> {
  expect(isPhoneNumber('2')).toBe(false);
});

test('test 1234567890 as valid phone number', ()=> {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

////////////////////////////////////////////////////

test('test abc0092jPHF@abwiOD_TsN.gg as valid email', ()=> {
  expect(isEmail('abc0092jPHF@abwiOD_TsN.gg')).toBe(true);
});

test('test 1@_.com', ()=> {
  expect(isEmail('1@_.com')).toBe(true);
});

test('test 1@_.z', ()=> {
  expect(isEmail('1@_.9')).toBe(false);
});

test('test sample@email.company', ()=> {
  expect(isEmail('sample@email.company')).toBe(false);
});

test('test No2o90asn3', ()=> {
  expect(isStrongPassword('No2o90asn3')).toBe(true);
});

test('test z0il', ()=> {
  expect(isStrongPassword('z0il')).toBe(true);
});

test('test 123456nsb', ()=> {
  expect(isStrongPassword('123456nsb')).toBe(false);
});

test('test Pn92109ksil082n2jna81923masd', ()=> {
  expect(isStrongPassword('Pn92109ksil082n2jna81923masd')).toBe(false);
});

test('test 123-456-7890 as date', ()=> {
  expect(isDate('123-456-7890')).toBe(false);
});

test('test 101004 as date', ()=> {
  expect(isDate('101004')).toBe(false);
});

test('test 99/99/9999 as date', ()=> {
  expect(isDate('99/99/9999')).toBe(true);
});

test('test 19/23/2004 as date', ()=> {
  expect(isDate('19/23/2004')).toBe(true);
});

test('test #AB7345junktext as hex code', ()=> {
  expect(isHexColor('#AB7345junktext')).toBe(false);
});

test('test ABCD as hex code', ()=> {
  expect(isHexColor('ABCD')).toBe(false);
});

test('test 84932C as hex code', ()=> {
  expect(isHexColor('84932C')).toBe(true);
});

test('test #AC2 as hex code', ()=> {
  expect(isHexColor('#AC2')).toBe(true);
});