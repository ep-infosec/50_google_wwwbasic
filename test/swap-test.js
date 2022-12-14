// Copyright 2022 Google LLC
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

basic_test.BASIC_TEST('Swap', 'SwapNumbers', `
x = 1
y = 100
swap x, y
print x
print y
print "done"
`, `
100
1
done
`);

basic_test.BASIC_TEST('Swap', 'SwapStrings', `
a$ = "hello"
b$ = "there"
swap a$, b$
print a$
print b$
print "done"
`, `
there
hello
done
`);
