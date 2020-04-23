// Test実行時にdescribe is not defined になる場合はlounch.jsonのargsのパラメーターをtddからbddに変更すること
// Version6.0.0以降はTDDからBDDに変更になった模様

import assert = require('assert');
import appTalk = require("../app-talk");

describe("App.Talk", () => {
    it("GetGreeting Test", () => {
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 0, 1, 0, 0, 0, 0)), "Welcom back!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 0, 1, 4, 59, 59, 999)), "Welcom back!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 0, 1, 5, 0, 0, 0)), "Good morning!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 0, 1, 11, 59, 59, 999)), "Good morning!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 0, 1, 12, 0, 0, 0)), "Good afternoon!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 0, 1, 15, 59, 59, 999)), "Good afternoon!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 0, 1, 16, 0, 0, 0)), "Good evening!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 0, 1, 21, 59, 59, 999)), "Good evening!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 0, 1, 22, 0, 0, 0)), "Welcom back!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 0, 1, 23, 59, 59,999)), "Welcom back!");
    });
});