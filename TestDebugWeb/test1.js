"use strict";
QUnit.module("Test Suite 1");
QUnit.test("Test A", function (assert) {
    assert.ok(true, "This shouldn`t faild");
});
QUnit.test("Test B", function (assert) {
    assert.ok(1 === 1, "This shouldn`t fail");
    assert.ok(false, "This should fail");
});
//# sourceMappingURL=test1.js.map