// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var basic_test = require('./basic-tester.js');

basic_test.BASIC_TEST('BuiltInFunctions', 'Log', `
PRINT LOG(1)
PRINT LOG(8) / LOG(2)
PRINT LOG(EXP(11))
`, `
0
3
11
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Chr$', `
PRINT CHR$(42)
PRINT CHR$(65)
PRINT CHR$(97)
`, `
*
A
a
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Ucase$', `
PRINT UCASE$("hello")
PRINT UCASE$("Hello")
PRINT UCASE$("123")
`, `
HELLO
HELLO
123
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Lcase$', `
PRINT LCASE$("hello")
PRINT LCASE$("Hello")
PRINT LCASE$("HI123")
`, `
hello
hello
hi123
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Lcase$', `
PRINT SQR(64)
PRINT SQR(4)
`, `
8
2
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Int', `
PRINT INT(89.91)
PRINT INT(-11.12)
`, `
89
-12
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Abs', `
PRINT ABS(88)
PRINT ABS(-11)
PRINT ABS(-11.25)
PRINT ABS(0)
`, `
88
11
11.25
0
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Sin', `
PRINT SIN(0)
`, `
0
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Cos', `
PRINT COS(0)
`, `
1
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Tan', `
PRINT TAN(0)
`, `
0
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Exp', `
PRINT EXP(0)
PRINT LOG(EXP(11))
`, `
1
11
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Str$', `
PRINT STR$(123) + "aa"
`, `
 123aa
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Str$Neg', `
PRINT STR$(-123) + "aa"
`, `
-123aa
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Atan2', `
PRINT ATAN2(0, 1)
`, `
0
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Mid$', `
PRINT MID$("ABCDEFG", 2, 3)
PRINT MID$("ABCDEFG", 1, 3)
PRINT MID$("ABCDEFG", 3)
PRINT MID$("ABCDEFG", 2, 2)
`, `
BCD
ABC
CDEFG
BC
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Mid$Statement', `
A$="hello"
MID$(A$, 2, 2) = "xyz"
PRINT A$
MID$(A$, 3) = "a"
PRINT A$
`, `
hxylo
hxalo
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Mid$StatementArray', `
DIM A$(10)
A$(2)="hello"
MID$(A$(2), 2, 2) = "xyz"
PRINT A$(2)
MID$(A$(2), 3) = "a"
PRINT A$(2)
`, `
hxylo
hxalo
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Left$', `
PRINT LEFT$("ABCDEFG", 3)
`, `
ABC
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Right$', `
PRINT RIGHT$("ABCDEFG", 3)
`, `
EFG
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Instr', `
PRINT INSTR("hello", "el")
PRINT INSTR("hello", "mo")
`, `
2
0
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Fix', `
PRINT FIX(45.67)
PRINT FIX(-2.89)
`, `
45
-2
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'Int', `
PRINT INT(45.67)
PRINT INT(-2.89)
`, `
45
-3
`);

basic_test.BASIC_TEST('BuiltInFunctions', 'CInt', `
PRINT CINT(45.67)
PRINT CINT(-2.89)
`, `
46
-3
`);
